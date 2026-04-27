import Link from 'next/link'

export const metadata = {
  title: 'Publicar seu Primeiro App — Developer Console',
  description: 'Caminho completo do zero até a publicação do app na Aurora Play, do cadastro ao envio para análise.',
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
          <span className="text-[#1a1a2e]">Publicar seu Primeiro App</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">Guia: Publicar seu Primeiro App</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          Este guia cobre o caminho completo do zero até a publicação do app na Aurora Play,
          desde a criação do projeto até o envio para análise.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Pré-requisito */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Pré-requisito
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Tenha uma conta de desenvolvedor ativa na Aurora Play e acesse o <strong>Developer Console</strong> com sua conta Google vinculada.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 0 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 0 — Criar o app
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Na tela inicial (lista de apps), crie um novo projeto:
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li>Preencha o <strong>título</strong> do app (nome exibido na loja)</li>
          <li>Selecione o <strong>tipo</strong>: Aplicativo ou Jogo</li>
          <li>Selecione o <strong>modelo</strong>: Gratuito ou Pago — se pago, informe o <strong>preço</strong> em R$</li>
          <li>Aceite as <strong>diretrizes da Aurora Play</strong></li>
          <li>Confirme — o app é criado com status <strong>rascunho</strong></li>
        </ol>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Você será redirecionado para a lista de apps. Abra o app recém-criado para acessar o Dashboard.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Checklist */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          O checklist de 5 passos
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          No Dashboard do app em rascunho você verá o <strong>checklist de configuração</strong>. Os 5 passos devem ser feitos na ordem — cada um é desbloqueado após o anterior ser concluído.
        </p>
        <div className="border-l-4 border-[#fd7e14] bg-[#fff8f0] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            O menu lateral está bloqueado durante todo o rascunho. Use exclusivamente os passos do checklist para navegar.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 1 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 1 — Página Detalhes
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Configure as informações visuais do app na loja:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Campo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ícone', 'Imagem do app. Na primeira vez, assista ao vídeo de especificações antes de selecionar'],
                ['Título', 'Nome exibido na loja'],
                ['Descrição', 'Texto completo descrevendo o app'],
                ['Desenvolvedor', 'Nome do desenvolvedor ou empresa'],
                ['Screenshots', 'Mínimo de 3 imagens obrigatórias'],
                ['Disponibilidade', 'Disponível ou Indisponível'],
              ].map(([campo, detalhe], i) => (
                <tr key={campo}>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#333] font-medium ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{campo}</td>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#555] ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{detalhe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Ao salvar, as imagens são enviadas ao servidor (processo leva alguns segundos). Após concluir, você retorna ao Dashboard e o passo 1 é marcado como completo.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 2 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 2 — Conteúdo
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Defina a classificação e categoria do app. Escolha a categoria mais adequada ao tipo (ex.: Educação, Casual, Produtividade).
        </p>
        <h3 className="text-sm font-semibold text-[#333] mb-2">Classificação indicativa</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Opção</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Faixa de idade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Classificação livre', 'Todas as idades'],
                ['Classificação 10 anos', 'A partir de 10 anos'],
                ['Classificação 12 anos', 'A partir de 12 anos'],
                ['Classificação 14 anos', 'A partir de 14 anos'],
                ['Classificação 16 anos', 'A partir de 16 anos'],
                ['Classificação 18 anos', 'Apenas adultos'],
              ].map(([opcao, faixa], i) => (
                <tr key={opcao}>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#333] ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{opcao}</td>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#555] ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{faixa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 3 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 3 — Estratégia de lançamento (Testes)
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Este é o <strong>portão de decisão</strong> — a escolha feita aqui define o comportamento do passo 4. Existem três caminhos:
        </p>

        <div className="space-y-4 mb-4">
          <div className="border border-[#dde3f0] rounded-lg p-4">
            <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2">Caminho A: Publicação direta</h3>
            <ul className="text-sm text-[#444] pl-4 space-y-1">
              <li>Marque a opção de <strong>não testar</strong></li>
              <li>No passo 4, o APK será enviado diretamente para produção</li>
            </ul>
          </div>
          <div className="border border-[#dde3f0] rounded-lg p-4">
            <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2">Caminho B: Pré-lançamento beta</h3>
            <ul className="text-sm text-[#444] pl-4 space-y-1">
              <li>Marque a opção de <strong>testar</strong> e deixe o pré-registro <strong>desmarcado</strong></li>
              <li>No passo 4, o APK vai para uma faixa de teste</li>
              <li>Após o upload, você terá acesso ao gerenciamento de testadores</li>
            </ul>
          </div>
          <div className="border border-[#dde3f0] rounded-lg p-4">
            <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2">Caminho C: Pré-registro</h3>
            <ul className="text-sm text-[#444] pl-4 space-y-1">
              <li>Marque <strong>testar</strong> e também o <strong>pré-registro</strong></li>
              <li>O passo 4 (APK) será <strong>ignorado</strong> — usuários se inscrevem pela página pública sem receber o APK</li>
              <li>Vá diretamente para o passo 5</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1e2235] rounded-lg px-5 py-4 mb-8 font-mono text-xs text-[#e2e8f0] leading-relaxed whitespace-pre">
{`Quer testar?
│
├── NÃO → Passo 4: APK para produção
│
└── SIM
      ├── Sem pré-registro → Passo 4: APK para faixa de teste
      └── Com pré-registro → Pular passo 4`}
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 4 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 4 — Upload do APK
        </h2>
        <div className="border-l-4 border-[#fd7e14] bg-[#fff8f0] rounded-r-lg px-4 py-3 mb-4">
          <p className="text-sm text-[#444] m-0">
            Se escolheu pré-registro no passo 3, <strong>pule este passo</strong> — ele não aparecerá no checklist.
          </p>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Acesse clicando no passo 4 do checklist, depois toque em <strong>Nova Versão</strong>.
        </p>
        <h3 className="text-sm font-semibold text-[#333] mb-2">O sistema extrai automaticamente do APK:</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-3">
          <li>Nome do pacote (packageName)</li>
          <li>Versão do app (ex: 2.1) e código da versão (ex: 21)</li>
          <li>Tamanho do arquivo</li>
        </ul>
        <h3 className="text-sm font-semibold text-[#333] mb-2">Regras importantes:</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1 mb-8">
          <li>O packageName do APK deve ser o mesmo cadastrado no projeto (não é possível trocar)</li>
          <li>O código de versão deve ser maior que o atual (não é possível fazer downgrade)</li>
          <li>Preencha o campo <strong>Novidades</strong> descrevendo o que há de novo nesta versão (obrigatório)</li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Passo 5 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Passo 5 — Publicação
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Esta é a tela de revisão final. O console lista automaticamente todas as alterações pendentes em dois blocos:
          <strong> Página detalhes</strong> e <strong>Produção</strong>.
        </p>
        <ol className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li>Revise o resumo das alterações</li>
          <li>Clique em <strong>Publicar</strong></li>
          <li>Confirme no diálogo que aparece</li>
        </ol>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Após confirmar, o status muda para <strong>Atualização pendente</strong> e você é redirecionado para a lista de apps.
          O <strong>menu lateral é desbloqueado</strong> após a aprovação pela equipe Aurora Play.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* O que acontece após */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          O que acontece após o envio
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Situação</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">O que fazer</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Atualização pendente', 'Aguardar análise. Você pode continuar editando o app enquanto espera'],
                ['Atualização publicada', 'App disponível na loja. Menu lateral desbloqueado para gerenciamento completo'],
                ['Atualização recusada', 'O motivo será exibido no Dashboard. Corrija e envie novamente pelo menu lateral > Publicação'],
              ].map(([situacao, acao], i) => (
                <tr key={situacao}>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#333] font-medium ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{situacao}</td>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#555] ${i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}`}>{acao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Próximos passos */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Próximos passos após a publicação
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Com o app publicado, você terá acesso a todos os módulos pelo menu lateral:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-10">
          <li><strong>Analytics</strong> — acompanhe instalações, dispositivos ativos e conversão</li>
          <li><strong>Avaliações</strong> — veja e responda comentários dos usuários</li>
          <li><strong>Finanças</strong> — monitore ganhos do AdAstra (requer integração do módulo AdAstra no app)</li>
          <li><strong>Debug</strong> — monitore erros e crashes em produção</li>
          <li><strong>Gênus AI</strong> — consulte a IA com dados do app para estratégias e melhorias</li>
        </ul>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">
            ← Ver toda a documentação
          </Link>
          <Link href="/docs/publicar-atualizacoes" className="text-[#2c7df0] no-underline hover:underline">
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
