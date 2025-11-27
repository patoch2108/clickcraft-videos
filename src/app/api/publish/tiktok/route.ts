// Server-side API Route: Publish to TikTok
// Path: src/app/api/publish/tiktok/route.ts

import { NextRequest, NextResponse } from 'next/server';

interface PublishRequest {
  videoUrl: string;
  caption: string;
  hashtags?: string[];
  privacyLevel?: 'PUBLIC' | 'FRIENDS' | 'SELF';
  allowComments?: boolean;
  allowDuet?: boolean;
  allowStitch?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: PublishRequest = await request.json();
    const { videoUrl, caption, hashtags = [], privacyLevel = 'PUBLIC' } = body;

    // Get user's access token (from session/database)
    const accessToken = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Step 1: Initialize video upload
    const initResponse = await fetch('https://open.tiktokapis.com/v2/post/publish/video/init/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_info: {
          title: caption,
          privacy_level: privacyLevel,
          disable_comment: !body.allowComments,
          disable_duet: !body.allowDuet,
          disable_stitch: !body.allowStitch,
        },
        source_info: {
          source: 'FILE_URL',
          video_url: videoUrl,
        },
      }),
    });

    const initData = await initResponse.json();

    if (!initResponse.ok) {
      throw new Error(initData.error?.message || 'Failed to initialize upload');
    }

    // Step 2: Check publish status
    const publishId = initData.data.publish_id;
    
    // In production, implement polling or webhook to check status
    // For now, return the publish ID for status tracking
    
    return NextResponse.json({
      success: true,
      publishId,
      status: 'processing',
      message: 'Video is being published to TikTok',
    });
  } catch (error) {
    console.error('TikTok publish error:', error);
    return NextResponse.json(
      { error: 'Failed to publish to TikTok' },
      { status: 500 }
    );
  }
}

// Check publish status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const publishId = searchParams.get('publishId');
  const accessToken = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!publishId || !accessToken) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    const statusResponse = await fetch(
      `https://open.tiktokapis.com/v2/post/publish/status/fetch/?publish_id=${publishId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    const statusData = await statusResponse.json();

    return NextResponse.json(statusData);
  } catch (error) {
    console.error('TikTok status check error:', error);
    return NextResponse.json(
      { error: 'Failed to check publish status' },
      { status: 500 }
    );
  }
}
