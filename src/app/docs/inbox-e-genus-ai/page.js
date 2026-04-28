import Link from 'next/link'

export const metadata = {
  title: 'Inbox e Gênus AI — Developer Console',
  description: 'Como usar o Inbox para ver mensagens do app e a Gênus AI para analisar dados e obter sugestões personalizadas.',
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
        <span className="text-[#555]">Inbox e Gênus AI</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Inbox e Gênus AI</h1>
        <p className="text-[#666] text-base mb-6">Central de mensagens e assistente inteligente integrados ao Developer Console</p>

        {/* Visão Geral */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">Visão Geral</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O Developer Console oferece dois canais de comunicação acessíveis pelo menu lateral: o <strong>Inbox</strong>,
            central de mensagens do seu app, e a <strong>Gênus AI</strong>, assistente inteligente com contexto dos seus dados de performance.
          </p>
        </div>

        {/* ── INBOX ─────────────────────────────── */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Inbox — Central de Mensagens
        </h2>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">O que é</h3>
        <p className="text-sm text-[#444] mb-3 leading-relaxed">
          O Inbox reúne em um único lugar todas as mensagens relacionadas ao seu app:
        </p>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-1.5">
          <li><strong>Notificações da plataforma</strong> — atualizações de revisão, alertas de política e avisos importantes da Aurora Play</li>
          <li><strong>Feedbacks de usuários</strong> — mensagens enviadas por quem usa o seu app</li>
          <li><strong>Suporte</strong> — comunicações da equipe da loja</li>
        </ul>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Como acessar</h3>
        <p className="text-sm text-[#444] mb-2 leading-relaxed">
          Acesse pelo <strong>Menu lateral &gt; Inbox</strong>. Você também pode abrir pelo ícone de mensagens no cabeçalho do Dashboard.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Informações exibidas por mensagem</h3>
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
                ['Remetente', 'Quem enviou a mensagem'],
                ['Mensagem', 'Conteúdo completo'],
                ['Data/Hora', 'Quando foi enviada'],
                ['Lida', 'Indicador de leitura (sim/não)'],
                ['Tipo', 'Categoria: notificação, feedback ou suporte'],
              ].map(([campo, desc], i) => (
                <tr key={campo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{campo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Quando o Inbox fica indisponível</h3>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-6">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Atenção</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O Inbox fica bloqueado quando o app está com status <strong>Removido</strong> ou ainda em <strong>Rascunho</strong> (nunca submetido para publicação).
            Em todos os outros status — Publicação Pendente, Pré-registro, Pré-lançamento, Publicado e Suspenso — o Inbox permanece acessível.
          </p>
        </div>

        {/* ── GÊNUS AI ──────────────────────────── */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-10">
          Gênus AI — Assistente Inteligente
        </h2>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">O que é</h3>
        <p className="text-sm text-[#444] mb-4 leading-relaxed">
          A <strong>Gênus AI</strong> é uma assistente integrada ao Developer Console que analisa os dados do seu app
          e responde perguntas com contexto real de performance — não exemplos genéricos.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Como acessar</h3>
        <p className="text-sm text-[#444] mb-2 leading-relaxed">
          Acesse pelo <strong>Menu lateral &gt; Gênus AI</strong>.
        </p>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-6">
          <p className="text-[#444] text-sm mb-0 leading-relaxed">
            A Gênus AI está sempre disponível, independente do status do app — inclusive em apps suspensos ou com publicação pendente.
          </p>
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Como funciona</h3>
        <p className="text-sm text-[#444] mb-4 leading-relaxed">
          Ao abrir o chat, os dados de performance dos últimos 7 dias são enviados automaticamente como contexto.
          Isso permite que a Gênus AI ofereça análises e sugestões personalizadas — sem que você precise copiar e colar números manualmente.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">O que você pode perguntar</h3>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-2">
          <li><strong>Visibilidade na loja</strong> — dicas de título, descrição, ícone e screenshots para melhorar sua posição na Aurora Play</li>
          <li><strong>Monetização</strong> — estratégias para aumentar receita com anúncios, assinaturas e compras in-app</li>
          <li><strong>Crescimento e retenção</strong> — como interpretar quedas de instalação, aumentar avaliações positivas e reduzir desinstalações</li>
          <li><strong>Publicação e atualizações</strong> — orientações sobre o fluxo de envio, revisão e APK</li>
          <li><strong>Código e projetos</strong> — geração de trechos de código, ideias de funcionalidades e sugestões técnicas</li>
        </ul>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Exemplo de uso</h3>
        <p className="text-sm text-[#444] mb-3">Você pode perguntar diretamente:</p>
        <ul className="text-sm text-[#444] pl-5 mb-8 space-y-1.5 italic">
          <li>"Por que meu número de instalações caiu esta semana?"</li>
          <li>"Como posso melhorar meu ícone para aumentar a conversão?"</li>
          <li>"Quais produtos in-app devo criar para o meu tipo de app?"</li>
        </ul>

        {/* Resumo */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Resumo
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Recurso</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Acesso</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Disponibilidade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Inbox', 'Menu lateral > Inbox', 'Bloqueado em Rascunho e Removido'],
                ['Gênus AI', 'Menu lateral > Gênus AI', 'Sempre disponível'],
              ].map(([recurso, acesso, disp], i) => (
                <tr key={recurso}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{recurso}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{acesso}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{disp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/produtos-in-app" className="text-[#2c7df0] no-underline hover:underline">
            ← Produtos In-App
          </Link>
          <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">
            Ver todos os docs →
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
