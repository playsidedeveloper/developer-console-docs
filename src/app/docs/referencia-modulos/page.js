import Link from 'next/link'

export const metadata = {
  title: 'Referência de Módulos — Developer Console',
  description: 'Guia rápido de todos os módulos disponíveis no Developer Console da Aurora Play.',
}

function Navbar() {
  return (
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
  )
}

function Breadcrumb({ current }) {
  return (
    <div className="bg-[#f7f9ff] border-b border-[#dde3f0] px-6 py-3">
      <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-[#6b7280]">
        <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">
          Documentação
        </Link>
        <span>/</span>
        <span className="text-[#1a1a2e]">{current}</span>
      </div>
    </div>
  )
}

function H2({ children }) {
  return (
    <h2 className="text-lg font-semibold text-[#2c7df0] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
      {children}
    </h2>
  )
}

function Note({ children, variant = 'blue' }) {
  const cls =
    variant === 'orange'
      ? 'bg-[#fff8f0] border-[#fd7e14]'
      : variant === 'yellow'
      ? 'bg-[#fff8e6] border-[#f0a500]'
      : 'bg-[#f0f5ff] border-[#2c7df0]'
  return (
    <div className={`${cls} border-l-4 rounded-r-lg px-4 py-3 mb-4`}>
      <p className="text-sm text-[#444] m-0 leading-relaxed">{children}</p>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-5">
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

function Badge({ children }) {
  return (
    <span className="inline-block bg-[#2c7df0] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
      {children}
    </span>
  )
}

function Avail({ children }) {
  return (
    <p className="text-xs text-[#6b7280] mt-3 mb-0">
      <strong>Disponibilidade:</strong> {children}
    </p>
  )
}

function Code({ children }) {
  return (
    <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">
      {children}
    </code>
  )
}

function Pre({ children }) {
  return (
    <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed font-mono mb-4">
      {children}
    </pre>
  )
}

export default function Page() {
  return (
    <div
      className="min-h-screen bg-white text-[#1a1a2e]"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <Navbar />
      <Breadcrumb current="Referência de Módulos" />

      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">Referência de Módulos</h1>
        <p className="text-[#555] text-base mb-6 leading-relaxed">
          Guia rápido com o que cada módulo faz, como acessá-lo e quando está disponível.
        </p>

        <Note>
          <strong>Nota:</strong> a maioria dos módulos fica bloqueada enquanto o app está em{' '}
          <strong>rascunho</strong> ou <strong>removido</strong>. Eles são desbloqueados após a primeira
          publicação aprovada.
        </Note>

        <hr className="border-[#e8e8e8] mb-2" />

        {/* Dashboard */}
        <H2>Dashboard</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Tela central do app. Concentra métricas resumidas, status, acesso rápido a avaliações e erros,
          e links para todos os módulos via menu lateral.
        </p>
        <p className="text-sm font-medium text-[#333] mb-1">
          Métricas exibidas <span className="font-normal text-[#6b7280]">(requerem AdAstra integrado):</span>
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>Gráfico de instalações dos últimos 7 dias</li>
          <li>Total de instalações acumuladas</li>
          <li>Dispositivos ativos (últimos 7 dias)</li>
          <li>Desinstalações e atualizações realizadas</li>
        </ul>
        <p className="text-sm font-medium text-[#333] mb-1">Ações da toolbar:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li><strong>Compartilhar</strong>: compartilha o link do app na Aurora Play</li>
          <li><strong>Ver no Aurora Play</strong>: abre a página do app na loja</li>
        </ul>
        <Note>
          Sem o AdAstra integrado, o Dashboard exibe:{' '}
          <em>&quot;Instale o AdAstra para começar a gerar receita com seu aplicativo&quot;</em>.
        </Note>
        <Avail>sempre (para rascunho, exibe checklist; para removido, exibe apenas o status).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Página Detalhes */}
        <H2>Página Detalhes</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Edição das informações visuais e textuais exibidas na loja — ícone, título, descrição, nome
          do desenvolvedor e screenshots.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Página Detalhes</strong>
        </p>
        <Table
          headers={['Campo', 'Detalhe']}
          rows={[
            ['Ícone', 'Imagem principal. Na primeira vez, exige assistir a um vídeo de especificações antes de liberar o seletor.'],
            ['Título', 'Nome exibido na loja'],
            ['Descrição', 'Texto descritivo completo'],
            ['Desenvolvedor', 'Nome ou empresa responsável'],
            ['Screenshots', 'Mínimo de 3 imagens obrigatórias'],
            ['Disponibilidade', 'Disponível ou Indisponível na loja'],
          ]}
        />
        <Note variant="orange">
          Alterações feitas aqui ficam pendentes até serem enviadas via módulo de{' '}
          <strong>Publicação</strong>.
        </Note>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Publicação */}
        <H2>Publicação</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Tela de revisão e envio de todas as alterações pendentes do app para análise da equipe Aurora Play.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Publicação</strong>
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-1.5 mb-3">
          <li>O console lista automaticamente as alterações salvas (metadados e/ou nova versão)</li>
          <li>O desenvolvedor revisa o resumo</li>
          <li>Clica em <strong>Publicar</strong> e confirma</li>
          <li>Status muda para <strong>Atualização pendente</strong></li>
        </ol>
        <p className="text-sm text-[#444] mb-2">
          O botão <strong>Publicar</strong> fica desabilitado quando não há alterações pendentes.
        </p>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Lançamentos */}
        <H2>Lançamentos</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Histórico de versões publicadas e ponto de upload de novas versões do APK. Funciona em dois modos:
          Produção e Beta.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Lançamentos</strong>
        </p>
        <Table
          headers={['Campo do APK', 'Detalhe']}
          rows={[
            ['Arquivo APK', 'Selecionado do dispositivo'],
            ['Novidades', 'Descrição das mudanças desta versão (obrigatório)'],
            ['packageName / versionName / versionCode', 'Extraídos automaticamente pelo sistema'],
          ]}
        />
        <p className="text-sm font-medium text-[#333] mb-1">Regras:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>O <Code>packageName</Code> não pode ser trocado após o primeiro upload</li>
          <li>O <Code>versionCode</Code> deve ser sempre maior que o anterior (sem downgrade)</li>
        </ul>
        <Avail>somente para apps publicados (ATIVO). Não disponível para a faixa de pré-registro.</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Testes */}
        <H2>Testes</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Gerenciamento das faixas de teste e dos testadores do app. As 3 faixas são criadas
          automaticamente quando o Dashboard é aberto pela primeira vez.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Testes</strong>
        </p>
        <Table
          headers={['Faixa', 'Limite padrão', 'Descrição']}
          rows={[
            ['Teste Fechado (Alfa)', '20 testadores', 'Grupo pequeno de testadores por convite'],
            ['Teste Aberto (Beta)', '100 testadores', 'Grupo maior de voluntários'],
            ['Pré-registro', '100 inscritos', 'Coleta inscrições antes do lançamento — sem APK'],
          ]}
        />
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Analytics */}
        <H2>Analytics</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Métricas detalhadas do app com dados de instalações, engajamento, origem dos usuários e conversão.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Analytics</strong> (ou clicando no bloco de métricas no Dashboard)
        </p>
        <Table
          headers={['Métrica', 'Descrição']}
          rows={[
            ['Instalações', 'Total no período'],
            ['Dispositivos ativos', 'Abriram o app ao menos 1x nos últimos 7 dias'],
            ['Desinstalações', 'Sem atividade há mais de 7 dias'],
            ['Atualizações', 'Atualizações de versão realizadas'],
            ['Visualizações', 'Visitas à página do app na loja'],
            ['Conversão', '% de visualizações que resultaram em instalação'],
          ]}
        />
        <p className="text-sm text-[#444] mb-2">
          <strong>Breakdowns adicionais:</strong> por país e por canal de aquisição (orgânico, busca, indicação).
          Período padrão: <strong>últimos 7 dias</strong>.
        </p>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Avaliações */}
        <H2>Avaliações</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Listagem de todas as avaliações enviadas por usuários do app na loja, com opção de resposta.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Avaliações</strong>
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>Nome do usuário, nota (1–5 estrelas), comentário e data</li>
          <li>Resposta do desenvolvedor (se já respondeu)</li>
          <li>Preview das avaliações mais recentes aparece no Dashboard</li>
        </ul>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Produtos In-App */}
        <H2>Produtos In-App</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Gerenciamento de produtos de compra dentro do app. Principalmente usado por apps pagos ou com
          compras in-app.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Produtos</strong>
        </p>
        <Table
          headers={['Campo', 'Descrição']}
          rows={[
            ['ID do Produto', 'Identificador único'],
            ['Nome', 'Título exibido ao usuário'],
            ['Descrição', 'Detalhes do produto'],
            ['Preço', 'Valor cobrado'],
            ['Conteúdo', 'URL do APK ou conteúdo digital entregue ao comprar'],
          ]}
        />
        <Note>
          Em apps pagos, ao fazer upload de uma nova versão, o campo de conteúdo do produto é atualizado
          automaticamente com a URL do novo APK.
        </Note>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Debug */}
        <H2>Debug</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Log de erros e crashes reportados pelo app em produção.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Debug View</strong>
        </p>
        <Table
          headers={['Campo', 'Descrição']}
          rows={[
            ['Tipo do Erro', 'Categoria ou classe do problema'],
            ['Mensagem', 'Descrição do erro'],
            ['Stack Trace', 'Rastreamento técnico'],
            ['Dispositivo', 'Modelo e versão do Android'],
            ['Versão do App', 'Em qual versão o erro ocorreu'],
            ['Data/Hora', 'Quando aconteceu'],
            ['Ocorrências', 'Frequência do problema'],
          ]}
        />
        <p className="text-sm text-[#444] mb-2">
          Os erros mais recentes aparecem em preview no Dashboard.
        </p>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Inbox */}
        <H2>Inbox</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Central de mensagens com notificações da plataforma Aurora Play e feedbacks de usuários.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Inbox</strong>
        </p>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Gênus AI */}
        <H2>Gênus AI</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Assistente de inteligência artificial integrada ao console, com contexto dos dados do app.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Gênus AI</strong>
        </p>
        <p className="text-sm text-[#444] mb-2">
          Ao abrir o chat, os dados de performance dos últimos 7 dias são enviados como contexto. A Gênus AI
          pode ajudar com:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>SEO e visibilidade na loja</li>
          <li>Estratégias de monetização</li>
          <li>Crescimento e retenção de usuários</li>
          <li>Planejamento de atualizações</li>
          <li>Geração de código e ideias de projetos</li>
        </ul>
        <Avail>sempre, independente do status do app.</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Finanças */}
        <H2>Finanças</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Módulo de gerenciamento financeiro. Centraliza ganhos do AdAstra, histórico de pagamentos e
          saldo para saque.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Finanças</strong>
        </p>
        <Note>
          Os dados só são exibidos se o desenvolvedor tiver integrado o módulo AdAstra no app.
        </Note>
        <Table
          headers={['Tipo de usuário', 'Ganho por dispositivo']}
          rows={[
            ['Novo usuário', 'R$ 0,03'],
            ['Usuário fiel (já atualizou o app)', 'R$ 0,045 (+50% de bônus)'],
          ]}
        />
        <Table
          headers={['Indicador', 'Descrição']}
          rows={[
            ['Ganhos Disponíveis', 'Aprovados e prontos para saque (após atingir o limite mínimo)'],
            ['CPM Médio', 'Ganho médio por mil instalações'],
            ['Ganhos Estimados', 'Pendentes de aprovação'],
            ['Saldo da Rede', 'Fundo total dos anunciantes — se negativo, ganhos são pausados'],
            ['Limite para Saque', 'Valor mínimo para mover os ganhos disponíveis para o saldo da conta'],
          ]}
        />
        <p className="text-sm font-medium text-[#333] mb-1">Fluxo dos ganhos:</p>
        <Pre>{'Ganhos Estimados → (aprovação) → Ganhos Disponíveis → (limite atingido) → Saldo da Conta → Pagamento'}</Pre>
        <p className="text-sm font-medium text-[#333] mb-1">Monetização pausada quando:</p>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>Saldo da rede negativo</li>
          <li>App sem atualizações por mais de 15 dias</li>
          <li>Conta do desenvolvedor bloqueada</li>
        </ul>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        <hr className="border-[#e8e8e8] mb-2 mt-5" />

        {/* Configurações */}
        <H2>Configurações</H2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Configurações gerais do app publicado.
        </p>
        <p className="text-sm text-[#444] mb-3">
          <strong>Acesso:</strong> Menu lateral → <strong>Configurações</strong>
        </p>
        <Table
          headers={['Configuração', 'Detalhe']}
          rows={[
            ['Nome do App', 'Editável'],
            ['Package Name', 'Somente leitura após o primeiro APK — não pode ser alterado'],
            ['Token FCM', 'Identificador de notificações push, somente leitura'],
            ['Disponível na loja', 'Liga/desliga a visibilidade do app para usuários na Aurora Play'],
            ['Receber notificações', 'Ativa ou desativa alertas do console para o desenvolvedor'],
            ['Remover App', 'Remove o app da loja (requer confirmação — ação irreversível pelo console)'],
          ]}
        />
        <Note variant="yellow">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mr-1">
            Atenção
          </span>
          ao remover o app, o status muda para <Code>REMOVIDO</Code> e as funcionalidades do Dashboard
          ficam bloqueadas. Não é possível reativar pelo console.
        </Note>
        <Avail>somente para apps publicados (ATIVO).</Avail>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 mt-10 flex justify-between text-sm">
          <Link href="/docs/testes-beta-e-debug" className="text-[#2c7df0] no-underline hover:underline">
            ← Testes Beta e Debug
          </Link>
          <Link href="/docs/monetizacao-adastra" className="text-[#2c7df0] no-underline hover:underline">
            Monetização com AdAstra →
          </Link>
        </div>
      </main>

      <footer className="bg-[#1e2235] text-[#6b7280] text-center py-5 text-sm">
        © 2026 Aurora Play ·{' '}
        <Link href="/docs" className="text-[#9ca3af] no-underline hover:text-white">
          Documentação
        </Link>
      </footer>
    </div>
  )
}
