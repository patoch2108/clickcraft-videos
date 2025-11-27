import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  // Se usuário negou acesso
  if (error) {
    return NextResponse.redirect(
      new URL(`/?error=${error}`, request.url)
    );
  }

  // Se não recebeu o código de autorização
  if (!code) {
    return NextResponse.redirect(
      new URL('/?error=no_code', request.url)
    );
  }

  try {
    // Trocar o código por um access token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID || '',
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET || '',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || '',
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();
    const { access_token, user_id } = tokenData;

    // Trocar short-lived token por long-lived token
    const longLivedTokenResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${access_token}`
    );

    if (!longLivedTokenResponse.ok) {
      throw new Error('Failed to get long-lived token');
    }

    const longLivedTokenData = await longLivedTokenResponse.json();
    const { access_token: long_lived_token, expires_in } = longLivedTokenData;

    // Buscar informações do usuário
    const userResponse = await fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type&access_token=${long_lived_token}`
    );

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userData = await userResponse.json();

    // Aqui você deve:
    // 1. Salvar o usuário no banco de dados
    // 2. Salvar os tokens de forma segura
    // 3. Criar uma sessão para o usuário

    // Por enquanto, vamos redirecionar para o dashboard com os dados na URL
    const dashboardUrl = new URL('/dashboard', request.url);
    dashboardUrl.searchParams.set('platform', 'instagram');
    dashboardUrl.searchParams.set('user_id', user_id);
    dashboardUrl.searchParams.set('username', userData.username || 'User');

    return NextResponse.redirect(dashboardUrl);

  } catch (error) {
    console.error('Instagram OAuth Error:', error);
    return NextResponse.redirect(
      new URL('/?error=auth_failed', request.url)
    );
  }
}
