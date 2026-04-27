import Link from 'next/link'

export const metadata = {
  title: 'Developer Console — Visão Geral',
  description: 'Visão geral do painel de gerenciamento de apps para desenvolvedores da Aurora Play.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Navbar */}
      <nav className="bg-[#1e2235] px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-[#2c7df0] font-bold text-base no-underline">
          Developer Console
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-[#9ca3af] text-sm no-underline hover:text-white transition-colors">
            Documentação
          </Link>
          <a
            href="https://mobsoft-console.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2c7df0] text-white px-4 py-2 rounded-md text-sm font-medium no-underline hover:bg-[#1a6de0] transition-colors"
          >
            Acessar Console
          </a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-2 text-sm text-[#9ca3af] flex items-center gap-2">
        <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">Documentação</Link>
        <span>/</span>
        <span className="text-[#555]">Developer Console — Visão Geral</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Developer Console — Visão Geral</h1>
        <p className="text-[#666] text-base mb-6">
          O painel central para criar, publicar, monitorar e monetizar seus apps na Aurora Play.
        </p>

        {/* Intro */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">O que é o Developer Console?</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O Developer Console é o painel de gerenciamento de apps para desenvolvedores da loja{' '}
            <strong>Aurora Play</strong>. Ele centraliza todas as ferramentas necessárias para criar,
            publicar, monitorar e monetizar aplicativos Android na plataforma.
          </p>
        </div>

        {/* Acesso */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Acesso
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-6">
          O login é feito com uma conta Google vinculada ao cadastro de desenvolvedor na Aurora Play.
          Após autenticação, o console exibe a lista de todos os apps registrados na conta.
        </p>

        {/* Criando novo app */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Criando um novo app
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Para cadastrar um app, acesse a opção de criar novo projeto e preencha:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Campo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Título', 'Nome do app na loja'],
                ['Tipo', 'Aplicativo ou Jogo'],
                ['Modelo', 'Gratuito ou Pago'],
                ['Preço', 'Apenas para apps pagos'],
                ['Diretrizes', 'Aceite obrigatório dos termos da Aurora Play'],
              ].map(([campo, desc], i) => (
                <tr key={campo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{campo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-6">
          Após a criação, o app aparece na lista com status <strong>rascunho</strong>.
        </p>

        {/* Sistema de status */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Sistema de status
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O status do app determina o que está disponível no console. Existem dois indicadores:
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Status do App</h3>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Status</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ATIVO', 'App disponível na loja'],
                ['REMOVIDO', 'App retirado da plataforma'],
              ].map(([status, desc], i) => (
                <tr key={status}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{status}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Status da Atualização</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Status</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Rascunho', 'App criado, configuração incompleta'],
                ['Atualização pendente', 'Enviado para análise da equipe Aurora Play'],
                ['Atualização publicada', 'Aprovado e disponível na loja'],
                ['Atualização recusada', 'Rejeitado — motivo exibido no Dashboard'],
                ['Seu app foi removido', 'App retirado da plataforma'],
              ].map(([status, desc], i) => (
                <tr key={status}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{status}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Menu lateral */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Menu lateral e o impacto do status
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O menu lateral do Dashboard é o ponto central de navegação para todos os módulos.
          Seu comportamento muda conforme o status:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Situação</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Menu lateral</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">O que o desenvolvedor pode fazer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['App em rascunho', 'Bloqueado', 'Apenas seguir o checklist de 5 passos no Dashboard'],
                ['App publicado (ATIVO)', 'Desbloqueado', 'Acessar qualquer módulo livremente'],
                ['App removido', 'Bloqueado', 'Apenas visualizar o status'],
              ].map(([situacao, menu, acao], i) => (
                <tr key={situacao}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{situacao}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{menu}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <p className="text-[#444] text-sm mb-0 leading-relaxed">
            Quando o app está em rascunho, <strong>toda a configuração é feita exclusivamente pelo checklist</strong>{' '}
            visível no Dashboard. O menu lateral não funciona nesse estado.
          </p>
        </div>

        {/* Checklist */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Checklist de configuração (rascunho)
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Apps em rascunho precisam completar 5 etapas obrigatórias antes da publicação:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Passo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">O que fazer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1. Página Detalhes', 'Ícone, título, descrição, desenvolvedor e screenshots (mín. 3)'],
                ['2. Conteúdo', 'Categoria, classificação indicativa e declaração de conteúdo adulto'],
                ['3. Testes', 'Definir estratégia de lançamento (produção, beta ou pré-registro)'],
                ['4. Arquivo APK', 'Upload do APK (ignorado no pré-registro)'],
                ['5. Publicação', 'Enviar para análise da equipe Aurora Play'],
              ].map(([passo, acao], i) => (
                <tr key={passo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{passo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Módulos */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Módulos disponíveis (app publicado)
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Após a publicação, o menu lateral dá acesso a todos os módulos de gerenciamento:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Módulo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Acesso pelo menu</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Dashboard', 'Tela inicial, métricas resumidas'],
                ['Página Detalhes', 'Editar informações da loja'],
                ['Publicação', 'Enviar alterações para análise'],
                ['Lançamentos', 'Gerenciar versões e upload de APK'],
                ['Testes', 'Faixas de teste, testadores, pré-registro'],
                ['Analytics', 'Métricas detalhadas de instalações e conversão'],
                ['Avaliações', 'Notas e comentários dos usuários'],
                ['Produtos', 'Compras in-app'],
                ['Debug', 'Logs de erros e crashes'],
                ['Inbox', 'Mensagens e notificações da plataforma'],
                ['Gênus AI', 'Chat com IA com contexto do app'],
                ['Finanças', 'Ganhos AdAstra e pagamentos'],
                ['Configurações', 'Visibilidade, notificações e remoção do app'],
              ].map(([modulo, desc], i) => (
                <tr key={modulo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{modulo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Monetização */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Monetização — AdAstra
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O AdAstra é a rede de monetização da Aurora Play. O desenvolvedor integra o módulo AdAstra
          no seu app — ele verifica automaticamente se há atualização disponível e, quando não há,
          exibe um <strong>anúncio intersticial</strong> promovendo outros apps da loja Aurora Play.
        </p>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O desenvolvedor é remunerado cada vez que um dispositivo abre o app:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Tipo de usuário</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Ganho por dispositivo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Novo usuário', 'R$ 0,03'],
                ['Usuário fiel (já atualizou o app)', 'R$ 0,045 (+50% de bônus)'],
              ].map(([tipo, ganho], i) => (
                <tr key={tipo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{tipo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{ganho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-4">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Requisito</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O app precisa ter ao menos <strong>1 atualização a cada 15 dias</strong> para manter o AdAstra ativo.
            Sem isso, a monetização é pausada automaticamente.
          </p>
        </div>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <p className="text-[#444] text-sm mb-0 leading-relaxed">
            Os dados de monetização só aparecem no console após o desenvolvedor integrar o módulo AdAstra no app.
          </p>
        </div>

        {/* Gênus AI */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Gênus AI
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          A Gênus AI é uma assistente inteligente disponível no menu lateral. Ela recebe dados de
          performance dos últimos 7 dias como contexto e oferece sugestões sobre crescimento,
          monetização, SEO na loja, atualizações e geração de código. Está disponível para qualquer
          app, independentemente do status.
        </p>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-end text-sm">
          <Link href="/docs/integrar-adastra" className="text-[#2c7df0] no-underline hover:underline">
            Integrar o AdAstra →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e2235] text-[#6b7280] text-center py-5 text-sm">
        © 2026 Aurora Play ·{' '}
        <Link href="/docs" className="text-[#9ca3af] no-underline hover:text-white">
          Documentação
        </Link>
      </footer>
    </div>
  )
}
