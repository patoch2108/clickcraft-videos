// Server-side API Route: Publish to Instagram
// Path: src/app/api/publish/instagram/route.ts

import { NextRequest, NextResponse } from 'next/server';

interface InstagramPublishRequest {
  videoUrl: string;
  caption: string;
  coverUrl?: string;
  shareToFeed?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: InstagramPublishRequest = await request.json();
    const { videoUrl, caption, coverUrl, shareToFeed = true } = body;

    // Get user's access token and Instagram Business Account ID
    const accessToken = request.headers.get('Authorization')?.replace('Bearer ', '');
    const igUserId = request.headers.get('X-IG-User-ID');
    
    if (!accessToken || !igUserId) {
      return NextResponse.json(
        { error: 'Not authenticated or missing Instagram Business Account' },
        { status: 401 }
      );
    }

    // Step 1: Create media container for Reel
    const containerResponse = await fetch(
      `https://graph.facebook.com/v18.0/${igUserId}/media`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          media_type: 'REELS',
          video_url: videoUrl,
          caption: caption,
          cover_url: coverUrl,
          share_to_feed: shareToFeed,
          access_token: accessToken,
        }),
      }
    );

    const containerData = await containerResponse.json();

    if (!containerResponse.ok) {
      throw new Error(containerData.error?.message || 'Failed to create media container');
    }

    const creationId = containerData.id;

    // Step 2: Publish the media container
    // Note: Instagram requires the video to be fully processed before publishing
    // In production, implement polling to check container status before publishing
    
    const publishResponse = await fetch(
      `https://graph.facebook.com/v18.0/${igUserId}/media_publish`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          creation_id: creationId,
          access_token: accessToken,
        }),
      }
    );

    const publishData = await publishResponse.json();

    if (!publishResponse.ok) {
      throw new Error(publishData.error?.message || 'Failed to publish media');
    }

    return NextResponse.json({
      success: true,
      mediaId: publishData.id,
      message: 'Video published to Instagram successfully',
    });
  } catch (error) {
    console.error('Instagram publish error:', error);
    return NextResponse.json(
      { error: 'Failed to publish to Instagram' },
      { status: 500 }
    );
  }
}

// Check media container status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const containerId = searchParams.get('containerId');
  const accessToken = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!containerId || !accessToken) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    const statusResponse = await fetch(
      `https://graph.facebook.com/v18.0/${containerId}?fields=status_code,status&access_token=${accessToken}`
    );

    const statusData = await statusResponse.json();

    return NextResponse.json(statusData);
  } catch (error) {
    console.error('Instagram status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check media status' },
      { status: 500 }
    );
  }
}
