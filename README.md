# 🎵 CyberPlay - Y2K Spotify Player

A retro-futuristic Spotify music player with a Cybercore/Y2K aesthetic, featuring Windows 95/Winamp-inspired design elements.

## ✨ Features

- 🎨 Authentic Y2K/Cybercore aesthetic with vibrant gradients and retro UI
- 🎵 Spotify Web Playback SDK integration
- 🤖 AI-powered music recommendations using Google Gemini
- 💿 Classic Winamp-style player controls
- 🌈 Dynamic visualizations and effects

## 🔧 Setup Instructions

### 1. Get Your Spotify Client ID

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill in the details:
   - **App name**: CyberPlay (or any name you like)
   - **App description**: Y2K Spotify Player
   - **Redirect URI**: `http://localhost:3000/` (for local development)
   - Check the box to agree to terms
5. Click **"Save"**
6. On your app page, click **"Settings"**
7. Copy your **Client ID** (you'll need this!)

### 2. Get Your Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key (you'll need this!)

### 3. Configure Local Environment

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your keys:
   ```
   VITE_SPOTIFY_CLIENT_ID=your_actual_spotify_client_id
   GEMINI_API_KEY=your_actual_gemini_api_key
   ```

## 🚀 Deployment on Netlify

### Quick Deploy

1. **Push to GitHub** (already done!)
   ```bash
   git push origin main
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select the `cyberplay` repository
   - Netlify will auto-detect the build settings from `netlify.toml`
   - Add environment variables (IMPORTANT!):
     - Key: `VITE_SPOTIFY_CLIENT_ID` → Value: Your Spotify Client ID
     - Key: `GEMINI_API_KEY` → Value: Your Gemini API key
   - Click "Deploy site"

3. **Update Spotify Redirect URIs**:
   - After deployment, copy your Netlify URL (e.g., `https://your-app.netlify.app`)
   - Go back to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Open your app settings
   - Click **"Edit Settings"**
   - Under **Redirect URIs**, add your Netlify URL (e.g., `https://your-app.netlify.app/`)
   - Click **"Add"** then **"Save"**

### Environment Variables

You need to set the following in Netlify (Site settings → Environment variables):
- `VITE_SPOTIFY_CLIENT_ID` - Your Spotify Client ID
- `GEMINI_API_KEY` - Your Google Gemini API key

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

The project uses:
- **Vite** for build tooling
- **React** for UI
- **TypeScript** for type safety
- **Spotify Web Playback SDK** for music playback
- **Google Gemini AI** for recommendations

## 🎨 Tech Stack

- React 19
- TypeScript
- Vite
- Spotify Web API
- Google Gemini AI
- CSS3 (with Y2K aesthetic)

---

Made with 💜 by deepak21-hub
