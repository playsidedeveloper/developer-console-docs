import Link from 'next/link'

const docs = [
  {
    slug: 'developer-console-visao-geral',
    title: 'Developer Console — Visão Geral',
    description: 'Visão geral do painel de gerenciamento de apps para desenvolvedores da Aurora Play.',
  },
  {
    slug: 'integrar-adastra',
    title: 'Integrar o AdAstra',
    description: 'Passo a passo para integrar o módulo AdAstra de monetização no seu app.',
  },
  {
    slug: 'monitorar-analytics-metricas',
    title: 'Monitorar Analytics e Métricas',
    description: 'Como acompanhar instalações, dispositivos ativos e conversão.',
  },
  {
    slug: 'publicar-atualizacoes',
    title: 'Publicar Atualizações',
    description: 'Como publicar atualizações de APK e metadados em apps já publicados.',
  },
  {
    slug: 'publicar-primeiro-app',
    title: 'Publicar seu Primeiro App',
    description: 'Caminho completo do zero até a publicação do app na Aurora Play.',
  },
  {
    slug: 'referencia-modulos',
    title: 'Referência de Módulos',
    description: 'Guia rápido de todos os módulos disponíveis no Developer Console.',
  },
  {
    slug: 'testes-beta-e-debug',
    title: 'Testes Beta e Debug',
    description: 'Como usar faixas de teste (alfa/beta/pré-registro) e monitorar erros em produção.',
  },
  {
    slug: 'monetizacao-adastra',
    title: 'Monetização com AdAstra',
    description: 'Como ganhar com seu app: CPM, saques, requisitos e boas práticas de monetização.',
  },
  {
    slug: 'criterios-review-aprovacao',
    title: 'Critérios de Review e Aprovação',
    description: 'O que a equipe avalia, motivos de rejeição e checklist para aprovação rápida.',
  },
  {
    slug: 'aso-aumentar-downloads',
    title: 'ASO — Aumentar Downloads',
    description: 'Técnicas de App Store Optimization para melhorar visibilidade e downloads na Aurora Play.',
  },
  {
    slug: 'avaliacoes-e-respostas',
    title: 'Avaliações e Respostas',
    description: 'Como visualizar as avaliações dos usuários e responder cada uma delas pelo Developer Console.',
  },
  {
    slug: 'produtos-in-app',
    title: 'Produtos In-App',
    description: 'Como criar, editar e gerenciar produtos de compra dentro do seu app pelo Developer Console.',
  },
]

export const metadata = {
  title: 'Documentação — Developer Console',
  description: 'Guias e referências para desenvolvedores da Aurora Play.',
}

export default function DocsPage() {
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

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-4">
        <h1 className="text-3xl font-bold text-[#1a1a2e] mb-3">Documentação</h1>
        <p className="text-[#555] text-base">
          Guias e referências para desenvolvedores da Aurora Play.
        </p>
      </div>

      {/* Docs Grid */}
      <main className="max-w-4xl mx-auto px-6 pb-16 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="border border-[#dde3f0] rounded-lg p-5 no-underline hover:border-[#2c7df0] hover:shadow-sm transition-all bg-white"
            >
              <h3 className="text-[#2c7df0] font-semibold text-sm mb-2 leading-snug">
                {doc.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed m-0">
                {doc.description}
              </p>
            </Link>
          ))}
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
