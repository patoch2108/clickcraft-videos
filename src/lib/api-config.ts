// API Configuration for ClickCraft
// This file contains all API endpoints and configuration

export const API_CONFIG = {
  // Base URLs - Use relative paths for same-origin requests
  baseUrl: typeof window !== 'undefined' ? window.location.origin : '',
  
  // OAuth Endpoints
  oauth: {
    tiktok: {
      clientId: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID || '',
      redirectUri: process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI || '',
      authUrl: 'https://www.tiktok.com/v2/auth/authorize/',
      tokenUrl: '/api/auth/tiktok/callback',
    },
    instagram: {
      clientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID || '',
      redirectUri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || '',
      authUrl: 'https://api.instagram.com/oauth/authorize',
      tokenUrl: '/api/auth/instagram/callback',
    },
    facebook: {
      appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
      redirectUri: process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI || '',
      authUrl: 'https://www.facebook.com/v18.0/dialog/oauth',
      tokenUrl: '/api/auth/facebook/callback',
    },
  },

  // Video Processing Endpoints
  video: {
    upload: '/api/video/upload',
    process: '/api/video/process',
    status: '/api/video/status',
    download: '/api/video/download',
    clips: '/api/video/clips',
  },

  // Publishing Endpoints
  publish: {
    tiktok: '/api/publish/tiktok',
    instagram: '/api/publish/instagram',
    facebook: '/api/publish/facebook',
    youtube: '/api/publish/youtube',
    multi: '/api/publish/multi',
  },

  // Analytics Endpoints
  analytics: {
    overview: '/api/analytics/overview',
    video: '/api/analytics/video',
    top10: '/api/analytics/top10',
  },

  // User Endpoints
  user: {
    profile: '/api/user/profile',
    subscription: '/api/user/subscription',
    videos: '/api/user/videos',
    favorites: '/api/user/favorites',
  },
};

// Helper function to build OAuth URL
export function buildOAuthUrl(platform: 'tiktok' | 'instagram' | 'facebook'): string {
  const config = API_CONFIG.oauth[platform];
  
  const params = new URLSearchParams({
    client_id: platform === 'facebook' ? config.appId : config.clientId,
    redirect_uri: config.redirectUri,
    response_type: 'code',
    scope: getOAuthScope(platform),
  });

  return `${config.authUrl}?${params.toString()}`;
}

// Get OAuth scopes for each platform
function getOAuthScope(platform: 'tiktok' | 'instagram' | 'facebook'): string {
  const scopes = {
    tiktok: 'user.info.basic,video.list,video.upload',
    instagram: 'user_profile,user_media,instagram_content_publish',
    facebook: 'pages_manage_posts,pages_read_engagement,publish_video',
  };
  
  return scopes[platform];
}

// API Request helper with error handling
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Use relative path for same-origin requests
  const url = endpoint.startsWith('http') 
    ? endpoint 
    : endpoint;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Request failed' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão.');
    }
    throw error;
  }
}
