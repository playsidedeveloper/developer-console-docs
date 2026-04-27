import Link from 'next/link'

export const metadata = {
  title: 'Avaliações e Respostas — Developer Console',
  description: 'Como visualizar as avaliações dos usuários e responder cada uma delas pelo Developer Console.',
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
        <span className="text-[#555]">Avaliações e Respostas</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Avaliações e Respostas</h1>
        <p className="text-[#666] text-base mb-6">Visualize as avaliações dos usuários e responda cada uma delas pelo Developer Console</p>

        {/* O que são avaliações */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">O que são as Avaliações?</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            As avaliações são os comentários e notas que os usuários da Aurora Play deixam na página do
            seu app na loja. Elas influenciam diretamente a reputação do app, o rating médio e a decisão
            de novos usuários de instalar ou não o seu aplicativo.
          </p>
        </div>

        {/* O que você pode fazer */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          O que você pode fazer
        </h2>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-2">
          <li>Ver todas as avaliações recebidas</li>
          <li>Filtrar por nota e data</li>
          <li>Responder publicamente a qualquer avaliação</li>
        </ul>

        {/* Como acessar */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como acessar
        </h2>
        <ol className="list-none p-0 mb-4">
          {[
            <>Abra o <strong>Developer Console</strong> e entre no seu app.</>,
            <>No menu lateral, toque em <strong>Avaliações</strong>.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-6">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Requisito</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Esta tela está disponível apenas para apps com status <strong>Publicado</strong>, <strong>Pré-registro</strong> ou <strong>Pré-lançamento</strong>. Apps removidos ou em rascunho não têm acesso.
          </p>
        </div>
        <p className="text-sm text-[#444] mb-6">
          Você também pode acessar pelo <strong>Dashboard</strong> — as avaliações mais recentes aparecem em preview na tela principal. Toque em <em>ver mais</em> para ir à tela completa.
        </p>

        {/* O que você vê */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          O que você vê em cada avaliação
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Informação</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Nome do usuário', 'Quem enviou a avaliação'],
                ['Nota', 'De 1 a 5 estrelas'],
                ['Comentário', 'Texto deixado pelo usuário'],
                ['Data', 'Quando a avaliação foi enviada'],
                ['Resposta', 'Sua resposta pública, se já tiver respondido'],
              ].map(([info, desc], i) => (
                <tr key={info}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{info}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Como responder */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como responder uma avaliação
        </h2>
        <p className="text-sm text-[#444] mb-4 leading-relaxed">
          Responder avaliações mostra aos usuários que o desenvolvedor está ativo e se importa com o feedback.
          Sua resposta fica visível publicamente na página do app na loja.
        </p>
        <ol className="list-none p-0 mb-6">
          {[
            <>Na tela de <strong>Avaliações</strong>, localize a avaliação que deseja responder.</>,
            <>Toque no botão <strong>Responder</strong>.</>,
            <>Digite sua resposta na tela que se abre.</>,
            <>Confirme o envio.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-[#444] mb-6">
          Sua resposta ficará vinculada à avaliação original e será exibida logo abaixo do comentário do usuário na Aurora Play.
        </p>

        {/* Boas práticas */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Boas práticas ao responder avaliações
        </h2>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Avaliações positivas (4–5 estrelas)</h3>
        <ul className="text-sm text-[#444] pl-5 mb-4 space-y-1.5">
          <li>Agradeça o usuário pelo tempo dedicado</li>
          <li>Mencione algo específico que ele destacou</li>
          <li>Aproveite para contar uma novidade ou funcionalidade nova</li>
        </ul>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-3 mb-5 text-sm text-[#444] italic">
          "Obrigado pela avaliação! Fico feliz que a funcionalidade X tenha sido útil. Em breve traremos melhorias ainda maiores — continue acompanhando as atualizações!"
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">Avaliações negativas (1–3 estrelas)</h3>
        <ul className="text-sm text-[#444] pl-5 mb-4 space-y-1.5">
          <li>Não responda com defensividade</li>
          <li>Reconheça o problema relatado</li>
          <li>Explique o que está sendo feito para corrigir (ou peça mais detalhes)</li>
          <li>Convide o usuário a entrar em contato para suporte direto</li>
        </ul>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-3 mb-5 text-sm text-[#444] italic">
          "Agradecemos o seu feedback! Identificamos o problema que você relatou e já estamos trabalhando em uma correção. Se precisar de ajuda imediata, nos contate pelo suporte. Vamos resolver isso."
        </div>

        <div className="bg-[#efffee] border-l-4 border-[#27a754] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">Regras gerais:</strong>
          <ul className="text-[#444] text-sm mt-2 mb-0 pl-4 space-y-1">
            <li>Mantenha um tom respeitoso e profissional em todas as respostas</li>
            <li>Evite respostas genéricas copiadas — personalize sempre que possível</li>
            <li>Responda no mesmo idioma da avaliação</li>
          </ul>
        </div>

        {/* Impacto no rating */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Impacto das avaliações no seu app
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O rating médio do seu app (exibido na Aurora Play) é calculado com base em todas as avaliações recebidas.
          Apps com nota alta têm mais visibilidade nas seções curadas da loja e maior taxa de conversão.
        </p>
        <ul className="text-sm text-[#444] pl-5 mb-8 space-y-2">
          <li>Corrija os bugs reportados nas avaliações e publique atualizações regularmente</li>
          <li>Inclua no seu app um convite discreto para o usuário avaliar após uma boa experiência</li>
          <li>Responda avaliações negativas com agilidade — isso demonstra comprometimento</li>
        </ul>

        {/* FAQ */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Perguntas frequentes
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: 'Posso editar uma resposta depois de enviada?',
              a: 'Sim. Basta acessar a avaliação novamente e atualizar o texto da resposta.',
            },
            {
              q: 'O usuário é notificado quando respondo?',
              a: 'Sim. O usuário recebe uma notificação quando o desenvolvedor responde à sua avaliação.',
            },
            {
              q: 'Posso remover uma avaliação?',
              a: 'Não. As avaliações são enviadas pelos usuários e não podem ser removidas pelo desenvolvedor. Apenas a equipe Aurora Play pode moderar conteúdo inadequado.',
            },
            {
              q: 'As avaliações aparecem imediatamente?',
              a: 'Sim. Todas as avaliações ficam visíveis no Developer Console em tempo real, assim que são enviadas pelos usuários na loja.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#dde3f0] rounded-lg p-4">
              <p className="text-sm font-semibold text-[#1a1a2e] mb-1">{q}</p>
              <p className="text-sm text-[#444] mb-0 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/aso-aumentar-downloads" className="text-[#2c7df0] no-underline hover:underline">
            ← ASO — Aumentar Downloads
          </Link>
          <Link href="/docs/produtos-in-app" className="text-[#2c7df0] no-underline hover:underline">
            Produtos In-App →
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
