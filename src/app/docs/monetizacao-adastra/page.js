import Link from 'next/link'

export const metadata = {
  title: 'Monetização com AdAstra — Developer Console',
  description: 'Como ganhar com seu app publicado na Aurora Play: CPM, saques, requisitos e boas práticas.',
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
        <span className="text-[#555]">Monetização com AdAstra</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Monetização com AdAstra</h1>
        <p className="text-[#666] text-base mb-6">Como ganhar com seu app publicado na Aurora Play</p>

        {/* O que é o AdAstra */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">O que é o AdAstra?</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            AdAstra é a rede de monetização própria da Aurora Play. Ao contrário de redes tradicionais,
            o AdAstra <strong>não exibe anúncios dentro do seu app</strong> — em vez disso, ele direciona
            usuários para a loja, onde os anúncios são exibidos. Isso mantém a experiência do usuário
            limpa dentro do app.
          </p>
        </div>

        {/* Modelo de ganhos */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como funciona o modelo de ganhos
        </h2>
        <p className="text-[#444] text-sm leading-relaxed mb-4">
          O AdAstra usa um modelo baseado em <strong>CPM (custo por mil instalações)</strong>. Cada vez que
          seu app gera instalações por meio da rede, você acumula ganhos proporcionais à demanda dos anunciantes
          naquele período.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Métrica</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">O que significa</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ganhos Disponíveis', 'Valor já aprovado e pronto para saque. Liberado quando atinge o limite mínimo definido pela plataforma.'],
                ['Ganhos Estimados', 'Ganhos pendentes de aprovação. Após análise, são movidos para "Ganhos Disponíveis".'],
                ['CPM Médio', 'Valor ganho por mil instalações. Varia conforme disponibilidade de anunciantes na rede.'],
                ['Saldo da Rede', 'Saldo total dos anunciantes. Se for negativo, seus ganhos ficam pausados automaticamente.'],
                ['Limite para Saque', 'Valor mínimo que os Ganhos Disponíveis precisam atingir para serem transferidos ao saldo da conta.'],
              ].map(([metrica, desc], i) => (
                <tr key={metrica}>
                  <td className={`px-3 py-2 font-mono text-[#2c7df0] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{metrica}</td>
                  <td className={`px-3 py-2 text-[#444] ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ativando o AdAstra */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Ativando o AdAstra no seu app
        </h2>
        <ol className="list-none p-0 mb-6" style={{ counterReset: 'step' }}>
          {[
            <>Acesse o <strong>Developer Console</strong> e abra seu app.</>,
            <>No menu lateral, vá em <strong>Módulos → AdAstra</strong> e ative a integração.</>,
            <>Publique uma atualização do app com o módulo integrado.</>,
            <>Os dados de ganhos aparecem automaticamente na aba <strong>Finanças</strong> do Console.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>

        <div className="bg-[#efffee] border-l-4 border-[#27a754] rounded-r-lg p-4 mb-8">
          <strong className="text-[#1a1a2e]">Dica:</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Você só verá dados na tela de Finanças se o app tiver o módulo AdAstra ativo e instalações
            suficientes registradas no período.
          </p>
        </div>

        {/* Requisito de atualização */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Requisito para manter a monetização ativa
        </h2>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-4">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Atenção</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O AdAstra exige <strong>pelo menos 1 atualização a cada 15 dias</strong> para manter a monetização ativa.
            Apps que ficam sem atualização por mais de 15 dias têm o AdAstra desativado automaticamente.
          </p>
        </div>
        <h3 className="text-sm font-semibold text-[#444] mt-5 mb-2">Por que esse requisito existe?</h3>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-1.5">
          <li>Garantir que apps ativos e mantidos sejam priorizados na rede.</li>
          <li>Evitar que apps abandonados continuem recebendo tráfego de anúncios.</li>
          <li>Incentivar melhorias contínuas para usuários.</li>
        </ul>

        {/* Quando os ganhos são pausados */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Quando os ganhos são pausados?
        </h2>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-2">
          <li><strong>Saldo da rede negativo:</strong> quando os anunciantes não têm saldo suficiente, os ganhos de todos os apps são pausados até a rede se recuperar.</li>
          <li><strong>Conta bloqueada:</strong> em caso de violação de políticas, o bloco de monetização é ocultado.</li>
          <li><strong>Sem atualizações:</strong> app sem atualização por 15+ dias perde o AdAstra automaticamente.</li>
        </ul>

        {/* Como solicitar saque */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como solicitar saque
        </h2>
        <ol className="list-none p-0 mb-4">
          {[
            <>Acesse <strong>Finanças</strong> no Developer Console.</>,
            <>Verifique se os <strong>Ganhos Disponíveis</strong> atingiram o limite mínimo.</>,
            <>Clique em <strong>"Solicitar Saque"</strong>.</>,
            <>A solicitação entra na fila de aprovação — o status aparece no <strong>Histórico de Pagamentos</strong>.</>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 mb-3 text-sm text-[#444]">
              <span className="flex-shrink-0 w-6 h-6 bg-[#2c7df0] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-sm font-semibold text-[#444] mb-3">Status possíveis no histórico</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Status</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2"><span className="inline-block bg-[#27a754] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Pago</span></td>
                <td className="px-3 py-2 text-[#444]">Pagamento concluído e transferido.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 bg-[#f5f7fb]"><span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Processando</span></td>
                <td className="px-3 py-2 text-[#444] bg-[#f5f7fb]">Saque em análise ou em transferência.</td>
              </tr>
              <tr>
                <td className="px-3 py-2"><span className="inline-block bg-[#999] text-white text-xs font-semibold px-2 py-0.5 rounded-full">Pendente</span></td>
                <td className="px-3 py-2 text-[#444]">Aguardando revisão da equipe Aurora Play.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Boas práticas */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Boas práticas para maximizar ganhos
        </h2>
        <ul className="text-sm text-[#444] pl-5 mb-6 space-y-2">
          <li><strong>Atualize o app regularmente</strong> — pelo menos a cada 15 dias para manter o AdAstra ativo.</li>
          <li><strong>Melhore o rating</strong> — apps bem avaliados recebem mais destaque na loja e geram mais instalações.</li>
          <li><strong>Cuide da descrição e dos screenshots</strong> — a página do app é o principal fator de conversão.</li>
          <li><strong>Divulgue seu app</strong> — use redes sociais e comunidades para aumentar o volume de instalações.</li>
          <li><strong>Monitore o Saldo da Rede</strong> — se negativo, aguarde a recuperação antes de esperar novos ganhos.</li>
        </ul>

        {/* Resumo */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-10">
          <strong className="text-[#1a1a2e]">Resumo rápido:</strong>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            Integre o AdAstra → atualize o app regularmente → instalações geram CPM → ganhos acumulam → solicite saque quando atingir o limite mínimo.
          </p>
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/testes-beta-e-debug" className="text-[#2c7df0] no-underline hover:underline">
            ← Testes Beta e Debug
          </Link>
          <Link href="/docs/criterios-review-aprovacao" className="text-[#2c7df0] no-underline hover:underline">
            Critérios de Review e Aprovação →
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
