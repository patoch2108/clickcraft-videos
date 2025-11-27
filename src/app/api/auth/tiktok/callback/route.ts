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
    const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_key: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_ID || '',
        client_secret: process.env.TIKTOK_CLIENT_SECRET || '',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.NEXT_PUBLIC_TIKTOK_REDIRECT_URI || '',
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();
    const { access_token, refresh_token, expires_in, open_id } = tokenData;

    // Buscar informações do usuário
    const userResponse = await fetch('https://open.tiktokapis.com/v2/user/info/', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userData = await userResponse.json();

    // Aqui você deve:
    // 1. Salvar o usuário no banco de dados
    // 2. Salvar os tokens de forma segura
    // 3. Criar uma sessão para o usuário

    // Por enquanto, vamos redirecionar para o dashboard com os dados na URL
    // (NÃO FAÇA ISSO EM PRODUÇÃO - use sessões/cookies seguros)
    const dashboardUrl = new URL('/dashboard', request.url);
    dashboardUrl.searchParams.set('platform', 'tiktok');
    dashboardUrl.searchParams.set('user_id', open_id);
    dashboardUrl.searchParams.set('username', userData.data?.user?.display_name || 'User');

    return NextResponse.redirect(dashboardUrl);

  } catch (error) {
    console.error('TikTok OAuth Error:', error);
    return NextResponse.redirect(
      new URL('/?error=auth_failed', request.url)
    );
  }
}
