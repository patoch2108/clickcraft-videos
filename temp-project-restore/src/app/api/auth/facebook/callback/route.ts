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
    const tokenResponse = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?` +
      `client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}` +
      `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
      `&code=${code}` +
      `&redirect_uri=${process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI}`
    );

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();
    const { access_token } = tokenData;

    // Buscar informações do usuário
    const userResponse = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`
    );

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userData = await userResponse.json();

    // Trocar por long-lived token (60 dias)
    const longLivedTokenResponse = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?` +
      `grant_type=fb_exchange_token` +
      `&client_id=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}` +
      `&client_secret=${process.env.FACEBOOK_APP_SECRET}` +
      `&fb_exchange_token=${access_token}`
    );

    if (!longLivedTokenResponse.ok) {
      throw new Error('Failed to get long-lived token');
    }

    const longLivedTokenData = await longLivedTokenResponse.json();
    const { access_token: long_lived_token } = longLivedTokenData;

    // Aqui você deve:
    // 1. Salvar o usuário no banco de dados
    // 2. Salvar os tokens de forma segura
    // 3. Criar uma sessão para o usuário

    // Por enquanto, vamos redirecionar para o dashboard com os dados na URL
    const dashboardUrl = new URL('/dashboard', request.url);
    dashboardUrl.searchParams.set('platform', 'facebook');
    dashboardUrl.searchParams.set('user_id', userData.id);
    dashboardUrl.searchParams.set('username', userData.name || 'User');

    return NextResponse.redirect(dashboardUrl);

  } catch (error) {
    console.error('Facebook OAuth Error:', error);
    return NextResponse.redirect(
      new URL('/?error=auth_failed', request.url)
    );
  }
}
