// Spotify Client ID from environment variable
export const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '';
export const REDIRECT_URI = window.location.origin + window.location.pathname;

// Scopes required for playback
export const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
];

export const getLoginUrl = (): string => {
  if (!CLIENT_ID) {
    console.error('VITE_SPOTIFY_CLIENT_ID environment variable is not set!');
    throw new Error('Spotify Client ID is not configured. Please set VITE_SPOTIFY_CLIENT_ID in your .env.local file.');
  }

  const scopesEncoded = SCOPES.join('%20');
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${scopesEncoded}&response_type=token&show_dialog=true`;
};

export const getTokenFromUrl = (): string | null => {
  const hash = window.location.hash;
  if (!hash) return null;

  const params = new URLSearchParams(hash.substring(1)); // remove #
  return params.get('access_token');
};

export const clearUrlHash = () => {
  window.location.hash = '';
};
