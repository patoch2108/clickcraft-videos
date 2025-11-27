import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
      
      <div className="prose prose-lg">
        <p className="mb-4">
          Bem-vindo aos Termos de Uso do nosso aplicativo. Estes termos regem o uso do nosso serviço e estabelecem as regras para a interação com nossa plataforma.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Aceitação dos Termos</h2>
        <p className="mb-4">
          Ao acessar e usar nosso aplicativo, você concorda em cumprir estes Termos de Uso. Se você não concordar com estes termos, por favor, não use nosso serviço.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Uso do Serviço</h2>
        <p className="mb-4">
          Você concorda em usar nosso aplicativo apenas para fins legais e de acordo com estes termos. É proibido usar o serviço para atividades ilegais ou prejudiciais.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Conta de Usuário</h2>
        <p className="mb-4">
          Para acessar certas funcionalidades, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de login.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Privacidade</h2>
        <p className="mb-4">
          Sua privacidade é importante para nós. Consulte nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações pessoais.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitação de Responsabilidade</h2>
        <p className="mb-4">
          Não nos responsabilizamos por danos indiretos, incidentais ou consequenciais decorrentes do uso do nosso aplicativo.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Modificações</h2>
        <p className="mb-4">
          Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Lei Aplicável</h2>
        <p className="mb-4">
          Estes termos são regidos pelas leis do [Seu País/Estado]. Qualquer disputa será resolvida nos tribunais competentes.
        </p>
        
        <p className="mt-6">
          Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do suporte.
        </p>
      </div>
    </div>
  );
}