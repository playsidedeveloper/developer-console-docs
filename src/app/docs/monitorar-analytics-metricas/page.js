import Link from 'next/link'

export const metadata = {
  title: 'Monitorar Analytics e Métricas — Developer Console',
  description: 'Como acompanhar instalações, dispositivos ativos e conversão no Developer Console.',
}

function H2({ children }) {
  return (
    <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4 mt-8">
      {children}
    </h2>
  )
}

function H3({ children }) {
  return (
    <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">{children}</h3>
  )
}

function Note({ children, variant = 'blue' }) {
  const cls =
    variant === 'orange'
      ? 'bg-[#fff8f0] border-[#fd7e14]'
      : 'bg-[#f0f5ff] border-[#2c7df0]'
  return (
    <div className={`${cls} border-l-4 rounded-r-lg px-4 py-3 mb-4`}>
      <p className="text-sm text-[#444] m-0 leading-relaxed">{children}</p>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="bg-[#2c7df0] text-white text-left px-3 py-2 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2 border-b border-[#eee] text-[#444] align-top ${j === 0 ? 'font-medium text-[#333]' : ''} ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Page() {
  return (
    <div
      className="min-h-screen bg-white text-[#1a1a2e]"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* Navbar */}
      <nav className="bg-[#1e2235] px-8 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-[#2c7df0] font-bold text-base no-underline">
          Developer Console
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="text-[#9ca3af] text-sm no-underline hover:text-white transition-colors"
          >
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
          <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">
            Documentação
          </Link>
          <span>/</span>
          <span className="text-[#1a1a2e]">Monitorar Analytics e Métricas</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">
          Guia: Monitorar Analytics e Métricas
        </h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          O módulo <strong>Analytics</strong> do Developer Console fornece dados detalhados sobre o
          desempenho do seu app na loja Aurora Play. Aqui você acompanha instalações, dispositivos ativos,
          conversão, aquisição de usuários e outras métricas essenciais para entender o crescimento.
        </p>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Pré-requisito */}
        <H2>Pré-requisito: AdAstra integrado no app</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          O Analytics coleta dados através do módulo <strong>AdAstra</strong>. Sem o AdAstra integrado no
          app, <strong>não há dados para exibir</strong>.
        </p>
        <p className="text-sm text-[#444] leading-relaxed mb-3">Para que o Analytics funcione:</p>
        <ol className="text-sm text-[#444] pl-5 space-y-1 mb-4">
          <li>✅ App publicado (status <strong>ATIVO</strong>)</li>
          <li>✅ <strong>AdAstra integrado</strong> no código do app e publicado em produção</li>
          <li>✅ Dispositivos abrindo o app (para gerar eventos)</li>
        </ol>
        <Note>
          Se o Analytics aparecer vazio ou sem dados, verifique se o AdAstra está integrado no APK mais
          recente publicado.
        </Note>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Acesso */}
        <H2>Acesso ao Analytics</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Existem duas formas de acessar o Analytics:
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li>
            <strong>Via menu lateral</strong>: No Dashboard, clique em{' '}
            <strong>Menu lateral &gt; Analytics</strong>
          </li>
          <li>
            <strong>Via bloco de métricas</strong>: No Dashboard, clique no bloco de{' '}
            <strong>Instalações</strong> ou <strong>Métricas</strong> para abrir a tela de analytics
            detalhadas
          </li>
        </ol>
        <Note variant="orange">
          <strong>⚠️ Importante:</strong> O Analytics só está acessível após o app estar{' '}
          <strong>publicado (ATIVO)</strong>. Apps em rascunho ou removidos não têm acesso a este módulo —
          o menu lateral fica bloqueado nestes estados.
        </Note>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Métricas principais */}
        <H2>Métricas principais</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O Analytics exibe as seguintes métricas-chave para o período selecionado:
        </p>
        <Table
          headers={['Métrica', 'O que significa', 'Utilidade']}
          rows={[
            [<><strong>Instalações</strong></>, 'Total de downloads do app no período', 'Medir crescimento absoluto e velocidade de adoção'],
            [<><strong>Dispositivos Ativos</strong></>, 'Quantidade de dispositivos únicos que abriram o app nos últimos 7 dias', 'Entender a base de usuários engajados'],
            [<><strong>Desinstalações</strong></>, 'Número de dispositivos sem atividade há mais de 7 dias', 'Identificar problemas de retenção'],
            [<><strong>Atualizações</strong></>, 'Número de atualizações de versão do app no período', 'Acompanhar frequência de releases'],
            [<><strong>Visualizações</strong></>, 'Visitas à página do app na loja Aurora Play', 'Medir interesse/visibilidade na loja'],
            [<><strong>Conversão</strong></>, 'Taxa de visualizações que resultaram em instalação (%)', 'Avaliar atratividade da página de loja'],
          ]}
        />

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Período de dados */}
        <H2>Período de dados</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Por padrão, o Analytics exibe dados dos <strong>últimos 7 dias</strong>. Você pode alterar o
          período clicando no seletor de datas:
        </p>
        <Table
          headers={['Período', 'Uso']}
          rows={[
            ['7 dias', 'Visão rápida, reações imediatas a mudanças'],
            ['30 dias', 'Tendências e padrões mensais'],
            ['90 dias', 'Análise sazonal e padrões de longo prazo'],
            ['Personalizado', 'Comparar períodos específicos'],
          ]}
        />

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Visualizando */}
        <H2>Visualizando e filtrando os dados</H2>

        <H3>Gráficos principais</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          A tela de Analytics exibe gráficos para as principais métricas:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-4">
          <li>
            <strong>Gráfico de linha</strong>: mostra instalações, dispositivos ativos e desinstalações ao
            longo do período
          </li>
          <li>
            <strong>Números resumidos</strong>: cards com totais e variação percentual em relação ao período
            anterior
          </li>
          <li>
            <strong>Taxa de conversão</strong>: percentual de visitantes que resultou em instalação
          </li>
        </ul>

        <H3>Breakdown por País</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          Visualize a distribuição das instalações por país/região geográfica:
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>
            Na seção de <strong>Instalações</strong>, procure pela opção{' '}
            <strong>&quot;Por País&quot;</strong> ou <strong>&quot;Breakdown geográfico&quot;</strong>
          </li>
          <li>A tabela mostra qual país gerou mais downloads</li>
        </ol>
        <p className="text-sm font-medium text-[#333] mb-1">Use para:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-5">
          <li>Entender onde seus usuários estão geograficamente</li>
          <li>Priorizar idiomas ou features por região</li>
          <li>Avaliar campanhas em regiões específicas</li>
        </ul>

        <H3>Breakdown por Aquisição</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          Visualize de onde seus usuários estão vindo:
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>
            Na seção de <strong>Aquisição de usuários</strong>, procure pelo filtro{' '}
            <strong>&quot;Por Origem&quot;</strong> ou <strong>&quot;Aquisição&quot;</strong>
          </li>
          <li>Os canais disponíveis são:</li>
        </ol>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li><strong>Orgânico</strong>: busca natural na loja</li>
          <li><strong>Busca</strong>: resultado de busca com palavras-chave</li>
          <li><strong>Indicação</strong>: referenciado por outro app ou campanha</li>
        </ul>
        <p className="text-sm font-medium text-[#333] mb-1">Use para:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-6">
          <li>Identificar qual canal traz mais usuários</li>
          <li>Otimizar SEO da loja (descrição, tags, screenshots)</li>
          <li>Medir impacto de campanhas de marketing</li>
        </ul>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Interpretando */}
        <H2>Interpretando as métricas</H2>

        <H3>Relação entre as métricas</H3>
        <Table
          headers={['Relacionadas', 'O que observar']}
          rows={[
            [<><strong>Visualizações → Conversão</strong></>, 'Se conversão é baixa, o problema é a página do app (descrição, ícone, screenshots)'],
            [<><strong>Instalações → Dispositivos Ativos</strong></>, 'Diferença grande = usuários desinstalando logo (problema de qualidade)'],
            [<><strong>Instalações → Desinstalações</strong></>, 'Muitas desinstalações = retenção ruim, app não entrega promessa'],
            [<><strong>Atualizações → Dispositivos Ativos</strong></>, 'Sem atualizações = usuários abandonam ou base envelhece'],
          ]}
        />

        <H3>Sinais de alerta</H3>
        <Table
          headers={['Sinal', 'O que pode indicar', 'O que fazer']}
          rows={[
            ['Queda súbita em instalações', 'Ranking caiu ou bug crítico', <>Abra <strong>Debug</strong> para checar crashes</>],
            ['Conversão &lt; 2%', 'Descrição/ícone/screenshots não atraem', <>Revise em <strong>Página Detalhes</strong></>],
            ['Muitas desinstalações', 'App não cumpre promessa ou tem problemas', <>Abra <strong>Avaliações</strong> para ler feedback</>],
            ['Sem atualizações há semanas', 'Usuários esquecem app ou se torna incompatível', 'Publique atualização mesmo que pequena'],
          ]}
        />

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Integrando com outras abas */}
        <H2>Integrando com outras abas</H2>

        <H3>Analytics depende completamente do AdAstra</H3>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li><strong>AdAstra coleta os dados</strong> quando o usuário abre o app</li>
          <li><strong>Analytics exibe esses dados</strong> coletados pelo AdAstra</li>
        </ul>
        <p className="text-sm text-[#444] mb-2">Se o Analytics está vazio:</p>
        <ol className="text-sm text-[#444] pl-5 space-y-1 mb-5">
          <li>
            Verifique em <strong>Publicação</strong> se o APK publicado contém o AdAstra integrado
          </li>
          <li>Aguarde até 24h para os primeiros dados aparecerem</li>
        </ol>

        <H3>Usando Analytics com outras abas</H3>
        <Table
          headers={['Situação', 'O que fazer']}
          rows={[
            ['Publicou atualização e quer medir impacto', <>Note a data em <strong>Publicação</strong>, compare antes/depois em <strong>Analytics</strong></>],
            ['Vê queda em instalações', <>Abra <strong>Debug</strong> para checar se há spike de crashes naquele período</>],
            ['Conversão muito baixa', <>Vá para <strong>Página Detalhes</strong> e revise descrição, ícone, screenshots</>],
            ['Muitos comentários negativos', <>Abra <strong>Avaliações</strong> para ler feedback dos usuários</>],
            ['Quer sugestões de melhoria', <>Abra <strong>Gênus AI</strong> — ela usa dados dos últimos 7 dias como contexto</>],
          ]}
        />

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Dicas */}
        <H2>Dicas para acompanhamento</H2>

        <H3>Acompanhamento semanal</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          Reserve tempo toda segunda-feira para revisar:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-5">
          <li>Houve crescimento ou queda?</li>
          <li>Qual foi o melhor dia da semana?</li>
          <li>As desinstalações aumentaram?</li>
        </ul>

        <H3>Antes de publicar atualização</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">Registre os números atuais:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>Instalações diárias médias</li>
          <li>Taxa de conversão</li>
          <li>Dispositivos ativos</li>
        </ul>
        <p className="text-sm text-[#444] mb-5">
          Após publicar, compare os números nos 3–5 dias seguintes.
        </p>

        <H3>Identificar padrões</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">Observe:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-5">
          <li>Fins de semana têm mais instalações que semana?</li>
          <li>Há picos após mencionar o app em redes sociais?</li>
          <li>Conversão varia por país/região?</li>
        </ul>

        <H3>Usar Gênus AI para insights</H3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">Quando ver queda anormal:</p>
        <ol className="text-sm text-[#444] pl-5 space-y-1 mb-6">
          <li>
            Abra <strong>Gênus AI</strong> no menu lateral
          </li>
          <li>
            Descreva: &quot;Instalações caíram 40% comparado à semana anterior. O que fiz errado?&quot;
          </li>
          <li>A IA oferecerá sugestões baseadas nos dados do seu app</li>
        </ol>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Limitações */}
        <H2>Limitações e observações</H2>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-10">
          <li><strong>Dados atrasam ~24h</strong>: métricas de hoje aparecem no relatório amanhã</li>
          <li><strong>Período mínimo é 7 dias</strong>: não há visualização de um dia isolado</li>
          <li>
            <strong>Analytics inicia no lançamento</strong>: não há dados antes do app ser publicado
          </li>
          <li>
            <strong>Dados são agregados</strong>: sem dados de usuários individuais (privacidade)
          </li>
        </ul>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link
            href="/docs/integrar-adastra"
            className="text-[#2c7df0] no-underline hover:underline"
          >
            ← Integrar o AdAstra
          </Link>
          <Link
            href="/docs/publicar-atualizacoes"
            className="text-[#2c7df0] no-underline hover:underline"
          >
            Publicar Atualizações →
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
