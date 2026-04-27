import Link from 'next/link'

export const metadata = {
  title: 'Produtos In-App — Developer Console',
  description: 'Como criar, editar e gerenciar produtos de compra dentro do seu app pelo Developer Console.',
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
        <span className="text-[#555]">Produtos In-App</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Produtos In-App</h1>
        <p className="text-[#666] text-base mb-6">Crie e gerencie produtos de compra dentro do seu app pelo Developer Console</p>

        {/* O que são */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">O que são Produtos In-App?</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Produtos In-App permitem que você venda conteúdo ou funcionalidades diretamente dentro do seu app —
            como itens extras, versões premium ou assinaturas. Esse recurso é usado principalmente por apps
            pagos e apps que oferecem compras internas.
          </p>
        </div>

        {/* Como acessar */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como acessar
        </h2>
        <ol className="list-none p-0 mb-4">
          {[
            <>Abra o <strong>Developer Console</strong> e selecione o app.</>,
            <>No <strong>menu lateral</strong>, toque em <strong>Produtos</strong>.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-[#555] mb-6">
          A seção Produtos fica disponível assim que o app sai do rascunho e não está removido.
        </p>

        {/* Tipos de produto */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Tipos de produto
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Tipo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Consumível', 'Pode ser comprado várias vezes (ex: moedas, vidas, itens de jogo)'],
                ['Não-consumível', 'Comprado uma única vez, permanece no app (ex: remover anúncios, pacote premium)'],
                ['Assinatura', 'Acesso recorrente com cobrança periódica'],
              ].map(([tipo, desc], i) => (
                <tr key={tipo}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{tipo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Campos de um produto */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Campos de um produto
        </h2>
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
                ['ID do Produto', 'Identificador único — use um slug descritivo (ex: premium_pack)'],
                ['Nome', 'Título exibido ao usuário na tela de compra'],
                ['Descrição', 'Detalhes sobre o que o usuário recebe ao comprar'],
                ['Preço', 'Valor cobrado pela compra'],
                ['Conteúdo', 'URL do APK ou conteúdo digital entregue após a compra'],
                ['Tipo', 'Consumível, não-consumível ou assinatura'],
              ].map(([campo, desc], i) => (
                <tr key={campo}>
                  <td className={`px-3 py-2 font-mono text-[#2c7df0] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{campo}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Adicionar produto */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Adicionar um produto
        </h2>
        <ol className="list-none p-0 mb-6">
          {[
            <>Na tela <strong>Produtos</strong>, toque em <strong>Adicionar Produto</strong>.</>,
            <>Preencha todos os campos: ID, nome, descrição, preço, conteúdo e tipo.</>,
            <>Salve — o produto aparece listado e fica disponível no seu app.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>

        {/* Editar ou remover */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Editar ou remover um produto
        </h2>
        <ul className="text-sm text-[#444] pl-5 mb-4 space-y-2">
          <li><strong>Editar:</strong> toque no produto da lista → altere os campos desejados → salve.</li>
          <li><strong>Remover:</strong> toque em <em>Remover</em> ao lado do produto → confirme a exclusão.</li>
        </ul>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-8">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Atenção</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Remover um produto <strong>não cancela compras já realizadas</strong> por usuários.
          </p>
        </div>

        {/* Integração automática com APK */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Integração automática com APK
        </h2>
        <div className="bg-[#efffee] border-l-4 border-[#27a754] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">Atualização automática de conteúdo:</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Quando você faz upload de uma nova versão do APK no Developer Console, o campo <strong>Conteúdo</strong> de
            todos os produtos do tipo pago é atualizado automaticamente com a URL da nova versão. Isso garante que
            qualquer usuário que comprar o app sempre receba o APK mais recente — sem precisar atualizar os produtos manualmente.
          </p>
        </div>

        {/* Boas práticas */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Boas práticas
        </h2>
        <ul className="text-sm text-[#444] pl-5 mb-8 space-y-2">
          <li>Use IDs de produto descritivos e sem espaços (ex: <code className="bg-[#f0f5ff] text-[#1a56db] px-1 py-0.5 rounded text-xs">remove_ads</code>, <code className="bg-[#f0f5ff] text-[#1a56db] px-1 py-0.5 rounded text-xs">gold_pack_100</code>)</li>
          <li>Mantenha as descrições claras: o usuário decide a compra com base no que você escreve</li>
          <li>Teste o fluxo de compra em um dispositivo antes de publicar</li>
          <li>Para assinaturas, descreva claramente o período e o que está incluído</li>
        </ul>

        {/* Disponibilidade */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Disponibilidade
        </h2>
        <p className="text-sm text-[#444] mb-3">A seção Produtos não está disponível nos seguintes casos:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Situação</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 text-[#444]">App ainda em rascunho</td>
                <td className="px-3 py-2"><span className="inline-block bg-[#e53e3e] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Bloqueado</span></td>
              </tr>
              <tr className="bg-[#f5f7fb]">
                <td className="px-3 py-2 text-[#444]">App removido da loja</td>
                <td className="px-3 py-2 bg-[#f5f7fb]"><span className="inline-block bg-[#e53e3e] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Bloqueado</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#555] mb-10">
          Se você não vê a seção no menu lateral, verifique o status do seu app no <strong>Dashboard</strong>.
        </p>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/avaliacoes-e-respostas" className="text-[#2c7df0] no-underline hover:underline">
            ← Avaliações e Respostas
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
