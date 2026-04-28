import Link from 'next/link'

export const metadata = {
  title: 'Critérios de Review e Aprovação — Developer Console',
  description: 'O que a equipe avalia, motivos comuns de rejeição e checklist para aprovação rápida na Aurora Play.',
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
      <div className="bg-[#f7f9ff] border-b border-[#dde3f0] px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">Documentação</Link>
          <span>/</span>
          <span className="text-[#1a1a2e]">Critérios de Review e Aprovação</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">Critérios de Review e Aprovação</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          Antes de aparecer na Aurora Play, cada app passa por uma revisão manual. Este guia explica o que a equipe avalia,
          os motivos mais comuns de rejeição e como aumentar suas chances de aprovação na primeira tentativa.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* O que é revisado */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          O que é revisado
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          A equipe analisa quatro dimensões principais:
        </p>
        <ul className="text-sm text-[#444] leading-relaxed mb-8 space-y-2 pl-5 list-disc">
          <li><strong>Funcionalidade</strong> — o app instala, abre e executa sua função principal sem travar ou crashar.</li>
          <li><strong>Metadados</strong> — título, descrição e ícone condizem com o que o app realmente faz.</li>
          <li><strong>Conformidade</strong> — o app respeita as diretrizes da plataforma (sem conteúdo proibido, sem coleta indevida de dados).</li>
          <li><strong>Qualidade</strong> — a experiência do usuário é minimamente aceitável (sem anúncios invasivos, UI navegável).</li>
        </ul>

        {/* Checklist */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Checklist antes de enviar
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Verifique cada item abaixo antes de submeter ou atualizar seu app:
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-3">APK</h3>
        <ul className="text-sm text-[#444] leading-relaxed mb-6 space-y-2 pl-5 list-disc">
          <li>O APK foi testado em pelo menos um dispositivo físico ou emulador.</li>
          <li>O app abre sem precisar de configuração externa não documentada.</li>
          <li>Todas as telas principais são acessíveis sem erros.</li>
          <li>O versionCode é maior que o da versão anterior (se for atualização).</li>
        </ul>

        <h3 className="text-base font-semibold text-[#1a56db] mb-3">Metadados</h3>
        <ul className="text-sm text-[#444] leading-relaxed mb-6 space-y-2 pl-5 list-disc">
          <li>Título: máximo 30 caracteres, sem clickbait ("melhor app do mundo", "grátis forever").</li>
          <li>Descrição: mínimo 80 caracteres, descreve claramente a função principal.</li>
          <li>Ícone: resolução mínima 512×512 px, sem bordas brancas excessivas.</li>
          <li>Categoria: condiz com o conteúdo real do app.</li>
        </ul>

        <h3 className="text-base font-semibold text-[#1a56db] mb-3">Conteúdo</h3>
        <ul className="text-sm text-[#444] leading-relaxed mb-8 space-y-2 pl-5 list-disc">
          <li>Sem conteúdo adulto, violento ou discriminatório.</li>
          <li>Sem funcionalidades que coletam dados pessoais sem consentimento explícito.</li>
          <li>Sem apps que sejam apenas wrappers de sites sem valor agregado.</li>
        </ul>

        {/* Motivos de rejeição */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Motivos mais comuns de rejeição
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Motivo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Como resolver</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['App crasha na tela inicial', 'Teste o APK em dispositivo limpo antes de submeter'],
                ['Descrição vaga ou genérica', 'Escreva pelo menos 2 parágrafos descrevendo funcionalidades reais'],
                ['Ícone de baixa qualidade', 'Use PNG 512×512 com fundo não transparente'],
                ['Título enganoso', 'O título deve refletir exatamente o que o app faz'],
                ['Versão igual à já publicada', 'Incremente o versionCode no AndroidManifest antes de gerar o APK'],
                ['App idêntico a outro já publicado', 'Adicione funcionalidades distintas; clones são recusados'],
              ].map(([motivo, solucao], i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0]">{motivo}</td>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0]">{solucao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prazo e comunicação */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Prazo e comunicação
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          A revisão costuma levar entre <strong>24 e 72 horas</strong> após o envio. Você recebe uma notificação no app com o resultado:
        </p>
        <ul className="text-sm text-[#444] leading-relaxed mb-4 space-y-2 pl-5 list-disc">
          <li><strong>Aprovado</strong> — seu app fica visível na loja imediatamente.</li>
          <li><strong>Recusado</strong> — a notificação traz o motivo. Corrija e reenvie normalmente pelo Developer Console.</li>
        </ul>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-lg mb-8">
          <p className="text-sm text-[#333] m-0">
            Não é necessário abrir chamado ou entrar em contato para reenviar — basta corrigir o problema e publicar uma nova versão.
          </p>
        </div>

        {/* Atualizações */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Atualizações
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Atualizações passam pelo mesmo processo de revisão que o envio inicial. Para agilizar:
        </p>
        <ul className="text-sm text-[#444] leading-relaxed mb-8 space-y-2 pl-5 list-disc">
          <li>Descreva claramente o que mudou no campo "Novidades desta versão".</li>
          <li>Atualizações que corrigem bugs críticos são priorizadas na fila.</li>
          <li>Lembre-se: o AdAstra exige atualização a cada 15 dias para manter os ganhos ativos. Revise com antecedência.</li>
        </ul>

        {/* Dicas */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Dicas para aprovação rápida
        </h2>
        <ul className="text-sm text-[#444] leading-relaxed mb-8 space-y-2 pl-5 list-disc">
          <li>Teste o APK em um dispositivo diferente do de desenvolvimento.</li>
          <li>Peça para alguém usar o app sem orientação — se ficarem perdidos, simplifique a UI.</li>
          <li>Use a faixa de testes fechados para validar com usuários reais antes do envio final (veja o guia de Testes Beta).</li>
          <li>Mantenha o changelog atualizado — mostra que o app está sendo mantido ativamente.</li>
        </ul>

        {/* Nav prev/next */}
        <div className="flex justify-between pt-6 border-t border-[#e8e8e8]">
          <Link
            href="/docs/monetizacao-adastra"
            className="text-[#2c7df0] text-sm no-underline hover:underline flex items-center gap-1"
          >
            ← Monetização com AdAstra
          </Link>
          <Link
            href="/docs/aso-aumentar-downloads"
            className="text-[#2c7df0] text-sm no-underline hover:underline flex items-center gap-1"
          >
            ASO — Aumentar Downloads →
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
