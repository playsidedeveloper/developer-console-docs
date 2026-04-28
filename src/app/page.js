import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: '#1a1a2e', background: '#fff' }}>
      {/* Navbar */}
      <nav style={{ background: '#1e2235', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ color: '#2c7df0', fontWeight: 'bold', fontSize: '1rem', textDecoration: 'none' }}>
          Developer Console
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="/docs" style={{ color: '#9ca3af', fontSize: '0.9rem', textDecoration: 'none' }}>Documentação</a>
          <a
            href="https://mobsoft-console.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#2c7df0', color: '#fff', padding: '8px 18px', borderRadius: '6px', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500' }}
          >
            Acessar Console
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1e2235 0%, #2a3050 100%)', color: '#fff', textAlign: 'center', padding: '80px 32px 72px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(44,125,240,0.18)', color: '#7ab4ff', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '20px', marginBottom: '20px' }}>
          Aurora Play
        </div>
        <h1 style={{ fontSize: '2.6rem', fontWeight: '700', lineHeight: 1.2, margin: '0 0 20px', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          Publique e gerencie seus apps com confiança
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#b0bcdb', maxWidth: '520px', margin: '0 auto 36px', lineHeight: '1.7' }}>
          O Developer Console é a plataforma completa para desenvolvedores da Aurora Play — publique APKs, acompanhe métricas e monetize seus apps.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href="https://mobsoft-console.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#2c7df0', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none' }}
          >
            Acessar Console
          </a>
          <a
            href="/docs"
            style={{ background: 'rgba(255,255,255,0.08)', color: '#e2e8f0', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Ver Documentação
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a2e' }}>
          Tudo que você precisa para crescer
        </h2>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '1rem' }}>
          Ferramentas pensadas para desenvolvedores independentes e estúdios.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {[
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
          ].map((f) => (
            <div
              key={f.title}
              style={{ border: '1px solid #dde3f0', borderRadius: '10px', padding: '24px', background: '#fafbff' }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Primeiros Passos */}
      <section style={{ background: '#f7f9ff', borderTop: '1px solid #dde3f0', padding: '64px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: '700', marginBottom: '8px', color: '#1a1a2e' }}>
            Primeiros passos
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '44px', fontSize: '1rem' }}>
            Do cadastro à primeira publicação em quatro etapas.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
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
            ].map((item, i, arr) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  paddingBottom: i < arr.length - 1 ? '0' : '0',
                  position: 'relative',
                }}
              >
                {/* Linha vertical conectando os passos */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: '#2c7df0', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: '700', flexShrink: 0,
                  }}>
                    {item.step}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '2px', height: '40px', background: '#dde3f0', margin: '4px 0' }} />
                  )}
                </div>

                <div style={{ paddingBottom: '28px', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a2e', margin: '8px 0 6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 10px' }}>
                    {item.desc}
                  </p>
                  <a
                    href={item.href}
                    style={{ color: '#2c7df0', fontSize: '0.88rem', fontWeight: '500', textDecoration: 'none' }}
                  >
                    {item.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: '#f0f5ff', borderTop: '1px solid #dde3f0', padding: '56px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: '#1a1a2e' }}>
          Pronto para publicar seu app?
        </h2>
        <p style={{ color: '#555', marginBottom: '28px', fontSize: '0.95rem' }}>
          Leia o guia de publicação e dê o primeiro passo.
        </p>
        <a
          href="/docs/publicar-primeiro-app"
          style={{ background: '#2c7df0', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none' }}
        >
          Publicar meu primeiro app →
        </a>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1e2235', color: '#6b7280', textAlign: 'center', padding: '20px 24px', fontSize: '0.85rem' }}>
        © 2026 Aurora Play · <a href="/docs" style={{ color: '#9ca3af', textDecoration: 'none' }}>Documentação</a>
      </footer>
    </div>
  )
}
