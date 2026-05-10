import Link from 'next/link'

const features = [
  {
    icon: '🚀',
    title: 'Publicação Simplificada',
    desc: 'Envie seu APK, defina metadados e publique na loja com poucos cliques. Gerencie versões e atualizações facilmente.',
  },
  {
    icon: '📊',
    title: 'Analytics em Tempo Real',
    desc: 'Acompanhe instalações, dispositivos ativos, retenção e conversão. Dados atualizados para decisões mais inteligentes.',
  },
  {
    icon: '💰',
    title: 'Monetização com AdAstra',
    desc: 'Integre o módulo AdAstra e comece a monetizar seus apps com anúncios otimizados para o público Aurora Play.',
  },
  {
    icon: '🔄',
    title: 'Atualizações Contínuas',
    desc: 'Publique atualizações de APK e metadados a qualquer momento, mantendo seus usuários sempre na versão mais recente.',
  },
  {
    icon: '📦',
    title: 'Gestão de Apps',
    desc: 'Visualize, edite e controle todos os seus apps publicados em um único painel organizado e intuitivo.',
  },
  {
    icon: '📚',
    title: 'Documentação Completa',
    desc: 'Guias passo a passo, referências de módulos e exemplos práticos para você ir do zero até a publicação.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Conheça o Console',
    desc: 'Entenda o painel, as abas disponíveis e o que cada seção oferece antes de começar.',
    href: '/docs/developer-console-visao-geral',
    label: 'Ver visão geral →',
  },
  {
    step: '02',
    title: 'Prepare seu APK',
    desc: 'Saiba quais metadados, ícones e screenshots são necessários e como estruturar seu build.',
    href: '/docs/publicar-primeiro-app',
    label: 'Guia de publicação →',
  },
  {
    step: '03',
    title: 'Passe pelo Review',
    desc: 'Conheça os critérios de aprovação para garantir que seu app seja aceito na primeira tentativa.',
    href: '/docs/criterios-review-aprovacao',
    label: 'Ver critérios →',
  },
  {
    step: '04',
    title: 'Monitore e Monetize',
    desc: 'Acompanhe instalações e receita com Analytics e AdAstra logo após a publicação.',
    href: '/docs/monitorar-analytics-metricas',
    label: 'Ver Analytics →',
  },
]

export default function Home() {
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

      {/* Hero */}
      <section className="bg-white text-center px-8 pt-20 pb-18">
        <div className="inline-block bg-[#f3f4f6] text-[#1a1a2e] text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5">
          Aurora Play
        </div>
        <h1 className="text-[2.6rem] font-bold leading-tight max-w-2xl mx-auto mb-5">
          Publique e gerencie seus apps com confiança
        </h1>
        <p className="text-[#555] text-lg max-w-lg mx-auto mb-9 leading-relaxed">
          O Developer Console é a plataforma completa para desenvolvedores da Aurora Play — publique APKs, acompanhe métricas e monetize seus apps.
        </p>
        <div className="flex justify-center gap-3.5 flex-wrap">
          <a
            href="https://mobsoft-console.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] text-white px-7 py-3 rounded-lg font-semibold text-sm no-underline hover:bg-[#333] transition-colors"
          >
            Acessar Console
          </a>
          <Link
            href="/docs"
            className="bg-white text-[#2563eb] px-7 py-3 rounded-lg font-semibold text-sm no-underline border border-[#2563eb] hover:bg-[#eff6ff] transition-colors"
          >
            Ver Documentação
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-[#1a1a2e] mb-2">
          Tudo que você precisa para crescer
        </h2>
        <p className="text-center text-[#555] mb-10 text-base">
          Ferramentas pensadas para desenvolvedores independentes e estúdios.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="border border-[#e5e7eb] rounded-xl p-6 bg-[#f5f5f5]"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2">{f.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Primeiros Passos */}
      <section className="bg-[#f5f5f5] border-t border-[#e5e7eb] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-[#1a1a2e] mb-2">
            Primeiros passos
          </h2>
          <p className="text-center text-[#555] mb-11 text-base">
            Do cadastro à primeira publicação em quatro etapas.
          </p>
          <div className="flex flex-col">
            {steps.map((item, i) => (
              <div key={item.step} className="flex items-start gap-5">
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#16a34a] text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-10 bg-[#e5e7eb] my-1" />
                  )}
                </div>
                {/* Step content */}
                <div className="pb-7 flex-1">
                  <h3 className="text-sm font-semibold text-[#1a1a2e] mt-2 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed mb-2.5">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="text-[#2563eb] text-sm font-medium no-underline hover:underline"
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#f5f5f5] border-t border-[#e5e7eb] px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-3">
          Pronto para publicar seu app?
        </h2>
        <p className="text-[#555] mb-7 text-sm">
          Leia o guia de publicação e dê o primeiro passo.
        </p>
        <Link
          href="/docs/publicar-primeiro-app"
          className="bg-[#2563eb] text-white px-7 py-3 rounded-lg font-semibold text-sm no-underline hover:bg-[#1d4ed8] transition-colors"
        >
          Publicar meu primeiro app →
        </Link>
      </section>

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
