import Link from 'next/link'

export const metadata = {
  title: 'Publicar Atualizações — Developer Console',
  description: 'Como atualizar APK, metadados e enviar alterações para análise no Developer Console.',
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
          <span className="text-[#1a1a2e]">Publicar Atualizações</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">Guia: Publicar Atualizações no app</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          Este guia é para apps que já foram publicados (status <strong>ATIVO</strong>). O fluxo de atualização é diferente
          do checklist inicial — o menu lateral está desbloqueado e você escolhe o que atualizar.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* O que pode ser atualizado */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          O que pode ser atualizado
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">O que mudou</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Módulo a usar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Nova versão do APK</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Lançamentos → Nova Versão</td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Título, descrição, ícone ou screenshots</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Página Detalhes</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5">Ambos ao mesmo tempo</td>
                <td className="px-3 py-2.5">Faça os dois — são enviados juntos no próximo passo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Alterações ficam <strong>salvas localmente</strong> até você enviá-las via <strong>Publicação</strong>. Nada
          fica visível na loja antes disso.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Atualizar APK */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Atualizar o APK
        </h2>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">1. Acesse Lançamentos</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          No menu lateral do Dashboard, toque em <strong>Lançamentos</strong>. A tela exibe o histórico de versões já
          publicadas — versão, data e novidades de cada uma.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">2. Crie uma nova versão</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Toque em <strong>Nova Versão</strong>.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">3. Selecione o APK</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Escolha o arquivo APK do dispositivo. O sistema extrai automaticamente:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Informação</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Package name</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">
                  <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">com.seuapp.exemplo</code>
                </td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Nome da versão</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">2.1</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Código da versão</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">21</td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5">Tamanho</td>
                <td className="px-3 py-2.5">4,2 MB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md mb-4 text-sm text-[#333] leading-relaxed">
          <strong>Atenção:</strong> o packageName do APK deve ser o mesmo da versão anterior. Não é possível trocar o
          packageName de um app já publicado.
        </div>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">4. Preencha as Novidades</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          Descreva o que mudou nesta versão. Este campo é obrigatório e aparece na loja para os usuários.
          Exemplos de boas descrições:
        </p>
        <ul className="text-sm text-[#444] leading-relaxed mb-4 pl-5 list-disc space-y-1">
          <li>Correção de travamentos na tela de perfil</li>
          <li>Novo modo noturno e melhorias de performance</li>
          <li>Adicionado suporte a tablets e correções gerais</li>
        </ul>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">5. Confirme o envio</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          Toque em <strong>Confirmar</strong>. O progresso do upload é exibido em tempo real:
        </p>
        <pre className="bg-[#1e2235] text-[#e2e8f0] px-4 py-3 rounded-lg text-xs font-mono leading-relaxed overflow-x-auto mb-4">
          <code>Enviando APK 47%...</code>
        </pre>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Após o upload, a nova versão fica <strong>pendente</strong> — ela só vai para a loja após ser enviada via
          Publicação.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Atualizar metadados */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Atualizar metadados da loja
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Metadados são as informações visuais e textuais exibidas na página do app na Aurora Play.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">1. Acesse Página Detalhes</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          No menu lateral do Dashboard, toque em <strong>Página Detalhes</strong>.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">2. Edite os campos desejados</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Campo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">O que é</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ícone', 'Imagem principal do app'],
                ['Título', 'Nome exibido na loja'],
                ['Descrição', 'Texto completo descrevendo o app'],
                ['Desenvolvedor', 'Nome ou empresa responsável'],
                ['Screenshots', 'Imagens da loja (mínimo 3)'],
                ['Disponibilidade', 'Disponível ou Indisponível para novos downloads'],
              ].map(([campo, desc], i) => (
                <tr key={campo} className={i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">{campo}</td>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md mb-4 text-sm text-[#333] leading-relaxed">
          Na primeira vez que trocar o ícone, o console pode exibir um vídeo com as especificações de imagem da Aurora
          Play antes de liberar o seletor.
        </div>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">3. Salve</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Toque em <strong>Salvar</strong>. As imagens são enviadas ao servidor (leva alguns segundos). Ao concluir,
          você é redirecionado de volta ao Dashboard. As alterações ficam salvas como pendentes até você publicá-las.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Enviar para análise */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Enviar as alterações para análise
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Seja uma nova versão de APK, mudança de metadados ou ambos — tudo é enviado junto neste passo.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">1. Acesse Publicação</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          No menu lateral do Dashboard, toque em <strong>Publicação</strong>.
        </p>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">2. Revise as alterações pendentes</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-2">
          O console lista automaticamente o que está pendente, agrupado em dois blocos:
        </p>
        <p className="text-sm font-medium text-[#1a1a2e] mb-1">Página detalhes (exemplos):</p>
        <ul className="text-sm text-[#444] leading-relaxed mb-3 pl-5 list-disc space-y-1">
          <li>Título alterado</li>
          <li>Descrição alterada</li>
          <li>Screenshots alteradas</li>
        </ul>
        <p className="text-sm font-medium text-[#1a1a2e] mb-1">Produção (exemplos):</p>
        <ul className="text-sm text-[#444] leading-relaxed mb-4 pl-5 list-disc space-y-1">
          <li>Versão 2.1 (21) — Versão alterada</li>
          <li>Novidades alteradas</li>
        </ul>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md mb-4 text-sm text-[#333] leading-relaxed">
          Se o botão <strong>Publicar</strong> estiver desabilitado (cinza), não há nenhuma alteração pendente para enviar.
        </div>

        <h3 className="text-base font-semibold text-[#1a56db] mb-2">3. Publique</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Toque em <strong>Publicar</strong>. Um diálogo de confirmação pergunta:{' '}
          <em>Deseja enviar X alterações do seu app?</em> Confirme. O status muda para{' '}
          <strong>Atualização pendente</strong> e você é redirecionado para a lista de apps.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Após o envio */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Após o envio
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Status</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">O que fazer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">Atualização pendente</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">
                  Aguardar a análise. Você pode continuar editando o app enquanto espera — as novas edições ficam como
                  pendentes para o próximo envio.
                </td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">Atualização publicada</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">
                  Alterações visíveis na loja. Versão nova disponível para download pelos usuários.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-medium">Atualização recusada</td>
                <td className="px-3 py-2.5">
                  O motivo é exibido no <strong>Dashboard</strong>. Corrija o que foi apontado e envie novamente via
                  Publicação.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quando recusada */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          O que fazer quando uma atualização é recusada
        </h2>
        <ol className="text-sm text-[#444] leading-relaxed mb-2 pl-5 list-decimal space-y-2">
          <li>
            Abra o <strong>Dashboard</strong> do app — o motivo da recusa é exibido em destaque.
          </li>
          <li>
            Corrija o problema indicado:
            <ul className="mt-1 pl-5 list-disc space-y-1">
              <li>Se for metadados: acesse <strong>Página Detalhes</strong> e ajuste.</li>
              <li>Se for o APK: gere um novo APK corrigido e faça upload via <strong>Lançamentos → Nova Versão</strong>.</li>
            </ul>
          </li>
          <li>Acesse <strong>Publicação</strong> e envie novamente.</li>
        </ol>

        <hr className="border-[#e8e8e8] my-8" />

        {/* Regras do APK */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Regras importantes do APK
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Regra</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">PackageName fixo</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Não pode ser trocado após o primeiro upload</td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0] font-medium">VersionCode crescente</td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Deve ser sempre maior que a versão anterior</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 font-medium">Downgrade proibido</td>
                <td className="px-3 py-2.5">Não é possível voltar a uma versão de código menor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          <strong>Exemplo válido:</strong> versão atual é{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">2.0 (20)</code> → nova
          versão pode ser{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">2.1 (21)</code> ou{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">3.0 (30)</code>.{' '}
          <strong>Exemplo inválido:</strong> versão atual é{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">2.0 (20)</code> → nova
          versão{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">1.9 (19)</code> será
          rejeitada pelo sistema.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Boas práticas */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Boas práticas
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">Frequência de atualização</p>
            <p className="text-sm text-[#444] leading-relaxed">
              Publique pelo menos uma atualização a cada 15 dias se o app tiver o AdAstra integrado. O módulo exige
              atualização regular para manter o bônus de usuário fiel ativo.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">VersionCode</p>
            <p className="text-sm text-[#444] leading-relaxed">
              Use uma escala consistente. Exemplos:{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">10</code>,{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">11</code>,{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">12</code>… ou{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">100</code>,{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">110</code>,{' '}
              <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">120</code>… Evite
              saltos grandes sem necessidade.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">Novidades</p>
            <p className="text-sm text-[#444] leading-relaxed">
              Escreva para o usuário, não para o sistema. Descreva benefícios reais, não apenas &quot;bug fixes&quot;.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">Disponibilidade</p>
            <p className="text-sm text-[#444] leading-relaxed">
              Se precisar pausar downloads sem remover o app, vá em <strong>Página Detalhes</strong> e altere a
              disponibilidade para <strong>Indisponível</strong>. O app continua na loja mas novos usuários não
              conseguem instalar. Lembre de publicar essa alteração via Publicação.
            </p>
          </div>
        </div>

        {/* Nav prev/next */}
        <div className="flex justify-between items-center border-t border-[#e8e8e8] pt-6 mt-4">
          <Link
            href="/docs/testes-beta-e-debug"
            className="text-sm text-[#2c7df0] no-underline hover:underline flex items-center gap-1"
          >
            ← Testes Beta e Debug
          </Link>
          <Link
            href="/docs/monitorar-analytics-metricas"
            className="text-sm text-[#2c7df0] no-underline hover:underline flex items-center gap-1"
          >
            Monitorar Analytics e Métricas →
          </Link>
        </div>
      </main>
    </div>
  )
}
