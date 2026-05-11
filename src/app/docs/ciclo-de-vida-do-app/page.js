import Link from 'next/link'

export const metadata = {
  title: 'Ciclo de Vida do App — Developer Console',
  description: 'Entenda todos os status do seu app, o que cada um significa e como avançar de rascunho até publicado.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e]" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Navbar */}
      <nav className="bg-white border-b border-[#e5e7eb] px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-[#111] font-bold text-base no-underline">
          Developer Console
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="text-[#2563eb] text-sm no-underline hover:text-[#1d4ed8] transition-colors">
            Documentação
          </Link>
          <a
            href="https://mobsoft-console.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] text-white px-4 py-2 rounded-md text-sm font-medium no-underline hover:bg-[#333] transition-colors"
          >
            Acessar Console
          </a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e7eb] px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/docs" className="text-[#2563eb] no-underline hover:underline">Documentação</Link>
          <span>/</span>
          <span className="text-[#1a1a2e]">Ciclo de Vida do App</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#111] mb-2">Ciclo de Vida do App no Developer Console</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          Entender o status do seu app é essencial para navegar pelo Developer Console. O status atual determina
          o que está disponível, o que está bloqueado e o que você precisa fazer para avançar.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Tabela de status */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Os status possíveis
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#2c7df0] text-white">
                <th className="text-left px-3 py-2.5 font-semibold">Status</th>
                <th className="text-left px-3 py-2.5 font-semibold">Menu lateral</th>
                <th className="text-left px-3 py-2.5 font-semibold">Visível na Aurora Play</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Rascunho', 'Bloqueado', 'Não'],
                ['Publicação pendente', 'Bloqueado', 'Não'],
                ['Pré-registro', 'Desbloqueado', 'Sim (página de inscrições)'],
                ['Pré-lançamento', 'Desbloqueado', 'Não (só testadores)'],
                ['Publicado', 'Desbloqueado', 'Sim'],
                ['Suspenso', 'Bloqueado', 'Não'],
                ['Removido', 'Bloqueado', 'Não'],
              ].map(([status, menu, visivel], i) => (
                <tr key={status} className={i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">{status}</td>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0] text-[#555]">{menu}</td>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0] text-[#555]">{visivel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Fase 1 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Fase 1 — Rascunho
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Quando você cria um novo app, ele começa como <strong className="text-[#1a1a2e]">Rascunho</strong>. O menu lateral
          fica completamente bloqueado nessa fase. Tudo acontece pelo checklist de configuração no Dashboard.
        </p>
        <p className="text-sm text-[#444] leading-relaxed mb-3">O checklist tem 5 passos obrigatórios, em ordem:</p>
        <ol className="list-decimal pl-5 text-sm text-[#444] space-y-2 mb-6">
          <li><strong className="text-[#1a1a2e]">Página Detalhes</strong> — ícone, título, descrição, screenshots</li>
          <li><strong className="text-[#1a1a2e]">Conteúdo</strong> — categoria, classificação etária, conteúdo adulto</li>
          <li><strong className="text-[#1a1a2e]">Testes</strong> — estratégia de lançamento (direto, faixa de teste ou pré-registro)</li>
          <li><strong className="text-[#1a1a2e]">APK</strong> — upload do arquivo (ignorado no pré-registro)</li>
          <li><strong className="text-[#1a1a2e]">Publicar</strong> — enviar para análise</li>
        </ol>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Ao concluir o passo 5, o status muda para <strong className="text-[#1a1a2e]">Publicação pendente</strong>.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Fase 2 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Fase 2 — Publicação pendente
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O app foi enviado para análise. O menu lateral ainda está bloqueado. Você aguarda a revisão da equipe Aurora Play.
        </p>
        <p className="text-sm text-[#555] font-medium mb-2">Possíveis resultados da análise:</p>
        <ul className="list-disc pl-5 text-sm text-[#444] space-y-2 mb-8">
          <li><strong className="text-[#1a1a2e]">Aprovado</strong> — status avança conforme a configuração escolhida no passo 3</li>
          <li><strong className="text-[#1a1a2e]">Reprovado</strong> — aparece um alerta no Dashboard; você corrige e reenvia</li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Fase 3 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Fase 3 — Resultado da aprovação
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O status pós-aprovação depende do que foi configurado no passo 3:
        </p>
        <pre className="bg-[#1e2235] text-[#e2e8f0] rounded-lg px-4 py-4 text-xs leading-relaxed overflow-x-auto mb-8 font-mono">
{`App aprovado
    →
    +-- Sem fase de testes → PUBLICADO
    →
    +-- Com faixa de teste (sem APK de produção) → PRÉ-LANÇAMENTO
    →
    +-- Com pré-registro (sem APK) → PRÉ-REGISTRO`}
        </pre>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Pré-registro */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Pré-registro
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Seu app aparece na Aurora Play como uma <strong className="text-[#1a1a2e]">página de inscrições</strong>. Usuários podem se
          cadastrar para receber uma notificação quando o app for lançado. Você ainda não precisa ter um APK de produção.
        </p>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Para transitar para <strong className="text-[#1a1a2e]">Publicado</strong>: faça upload de um APK de produção e envie a atualização para análise.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Pré-lançamento */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Pré-lançamento
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O APK existe, mas só está disponível para testadores da faixa de teste. O app não aparece publicamente na loja.
          Ideal para validar com um grupo controlado antes do lançamento oficial.
        </p>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Para transitar para <strong className="text-[#1a1a2e]">Publicado</strong>: faça upload de um APK de produção e envie para análise.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Publicado */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Publicado
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O menu lateral está completamente desbloqueado. Você acessa todos os módulos diretamente:
        </p>
        <ul className="list-disc pl-5 text-sm text-[#444] space-y-1.5 mb-4">
          <li><strong className="text-[#1a1a2e]">Inbox</strong> — mensagens dos usuários do app</li>
          <li><strong className="text-[#1a1a2e]">Gênius AI</strong> — análises e sugestões com IA</li>
          <li><strong className="text-[#1a1a2e]">Analytics</strong> — instalações, dispositivos ativos, conversão</li>
          <li><strong className="text-[#1a1a2e]">Publicação</strong> — enviar alterações pendentes para aprovação</li>
          <li><strong className="text-[#1a1a2e]">Página Detalhes</strong> — editar ícone, título, descrição, screenshots</li>
          <li><strong className="text-[#1a1a2e]">Testes</strong> — gerenciar faixas alfa, beta e pré-registro</li>
          <li><strong className="text-[#1a1a2e]">Debug View</strong> — erros e crashes em produção</li>
          <li><strong className="text-[#1a1a2e]">Avaliações</strong> — ler e responder avaliações dos usuários</li>
          <li><strong className="text-[#1a1a2e]">Produtos</strong> — gerenciar compras in-app</li>
          <li><strong className="text-[#1a1a2e]">Finanças</strong> — saldo AdAstra e histórico de ganhos</li>
          <li><strong className="text-[#1a1a2e]">Configurações</strong> — ajustes gerais do app</li>
        </ul>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-md px-4 py-3 mb-8">
          <p className="text-sm text-[#333] leading-relaxed">
            <strong>Atenção:</strong> edições em Detalhes, Conteúdo ou APK geram <em>alterações pendentes</em>.
            Elas só ficam visíveis na loja após você enviar via <strong>Publicação</strong> e a análise aprovar.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Suspenso e Removido */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Suspenso e Removido
        </h2>
        <ul className="list-disc pl-5 text-sm text-[#444] space-y-2 mb-8">
          <li>
            <strong className="text-[#1a1a2e]">Suspenso</strong> — app indisponível na loja, dados preservados.
            O menu lateral fica bloqueado. A suspensão pode ser revertida pela equipe Aurora Play.
          </li>
          <li>
            <strong className="text-[#1a1a2e]">Removido</strong> — app excluído permanentemente. Sem possibilidade de reativação.
          </li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Resumo das transições */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Resumo das transições
        </h2>
        <pre className="bg-[#1e2235] text-[#e2e8f0] rounded-lg px-4 py-4 text-xs leading-relaxed overflow-x-auto mb-8 font-mono">
{`RASCUNHO → (publicar) → PUBLICAÇÃO PENDENTE
PUBLICAÇÃO PENDENTE → (aprovação) → PUBLICADO / PRÉ-REGISTRO / PRÉ-LANÇAMENTO
PRÉ-REGISTRO → (APK de produção aprovado) → PUBLICADO
PRÉ-LANÇAMENTO → (APK de produção aprovado) → PUBLICADO
PUBLICADO → (suspensão) → SUSPENSO`}
        </pre>

        {/* Nav entre docs */}
        <div className="flex justify-between pt-6 border-t border-[#e8e8e8] mt-4">
          <Link
            href="/docs/testes-beta-e-debug"
            className="text-sm text-[#2563eb] no-underline hover:underline"
          >
            ← Testes Beta e Debug
          </Link>
          <Link
            href="/docs/configuracoes-do-app"
            className="text-sm text-[#2563eb] no-underline hover:underline"
          >
            Configurações do App →
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
