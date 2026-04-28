import Link from 'next/link'

export const metadata = {
  title: 'Testes Beta e Debug — Developer Console',
  description: 'Como usar faixas de teste (alfa/beta/pré-registro) e monitorar erros em produção no Developer Console.',
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
          <span className="text-[#1a1a2e]">Testes Beta e Debug</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">Testes Beta e Debug</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          Antes de lançar seu app para todos os usuários da Aurora Play, você pode distribuí-lo para grupos controlados
          de testadores e monitorar erros em tempo real. Este guia cobre as <strong>faixas de teste</strong>, a{' '}
          <strong>configuração da estratégia de lançamento</strong> e a <strong>tela de Debug</strong>.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Seção 1 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          1. Estratégia de Lançamento (Passo 3 do Checklist)
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Ao configurar um novo app (ou rascunho), o <strong>passo 3 do checklist</strong> define como ele será distribuído:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Escolha</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">O que acontece</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Não testar — publicar diretamente</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">APK vai direto para produção; app fica visível para todos os usuários.</td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Testar antes do lançamento</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">APK vai para uma faixa de teste; somente testadores aprovados têm acesso.</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Testar + Pré-registro</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Nenhum APK necessário nesta fase; app abre página de pré-registro na loja para coletar inscrições.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md text-sm text-[#333] mb-8">
          Esta escolha impacta diretamente o passo 4 (upload do APK). Se você escolher pré-registro, o passo 4 é ignorado.
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Seção 2 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          2. Faixas de Teste
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-5">
          As três faixas são criadas automaticamente quando o Dashboard é aberto pela primeira vez. Você as acessa pelo{' '}
          <strong>menu lateral → Testes</strong>.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Teste Fechado (Alfa)</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-5">
          <li><strong>Limite padrão:</strong> 20 testadores</li>
          <li>Ideal para testes internos com equipe ou grupo restrito</li>
          <li>Acesso por aprovação manual (configurável)</li>
          <li>Identificador: <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">{'{appId}'}-teste-fechado</code></li>
        </ul>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Teste Aberto (Beta)</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-5">
          <li><strong>Limite padrão:</strong> 100 testadores</li>
          <li>Para um grupo maior que pode se inscrever voluntariamente</li>
          <li>Pode ser aberto ou exigir aprovação manual (configurável)</li>
          <li>Identificador: <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">{'{appId}'}-teste-aberto</code></li>
        </ul>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Pré-registro</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-8">
          <li><strong>Limite padrão:</strong> 100 inscritos</li>
          <li>Coleta inscrições de usuários interessados <em>antes</em> do lançamento oficial</li>
          <li>Qualquer usuário pode se inscrever pela loja</li>
          <li><strong>Não distribui APK</strong> — é uma fila de espera</li>
          <li>Identificador: <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">{'{appId}'}-pre-registro</code></li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Seção 3 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          3. Configurando uma Faixa de Teste
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Acesse <strong>Lançamentos</strong> a partir de qualquer faixa pelo menu lateral e clique em{' '}
          <strong>Configurar</strong>. As opções disponíveis são:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Campo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Limite de Testadores</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Máximo de usuários na faixa (10, 20 ou 30 para teste fechado)</td>
              </tr>
              <tr className="bg-[#f7f9ff]">
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Status do Teste</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Ativo / Pausado / Encerrado</td>
              </tr>
              <tr>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>Aprovação Manual</strong></td>
                <td className="px-3 py-2.5 border-b border-[#dde3f0]">Se ativado, novos testadores ficam como "pendentes" até você aceitar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md text-sm text-[#333] mb-8">
          A configuração não está disponível para a faixa de <strong>Pré-registro</strong>.
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Seção 4 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          4. Gerenciando Testadores
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Acesse pelo botão <strong>Gerenciar Testadores</strong> em qualquer faixa de teste beta.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Teste Fechado / Teste Aberto</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-4">
          <li><strong>Adicionar por email:</strong> botão de adição → digitar email → confirmar. O testador entra direto com status <em>aprovado</em>, sem fila.</li>
          <li><strong>Aceitar pendentes:</strong> se a aprovação manual estiver ativa, testadores novos ficam como <em>pendentes</em>. Toque em "Aceitar" para liberá-los.</li>
          <li><strong>Copiar email:</strong> disponível para qualquer testador na lista.</li>
        </ul>
        <p className="text-sm text-[#444] leading-relaxed mb-2">Após ser aprovado, o testador vê na Aurora Play:</p>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md text-sm text-[#333] mb-5">
          "Você tem acesso antecipado a este app" — e o botão de download fica liberado.
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Pré-registro</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-5">
          <li>A lista mostra <strong>inscritos</strong>, não testadores com APK.</li>
          <li>Não é possível adicionar inscritos manualmente.</li>
          <li>Ação disponível: <strong>Copiar email</strong> do inscrito.</li>
        </ul>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Movendo um inscrito do pré-registro para uma faixa de teste</h3>
        <ol className="text-sm text-[#444] pl-5 space-y-1.5 mb-4">
          <li>Abra <strong>Gerenciar Testadores</strong> na faixa de Pré-registro</li>
          <li>Localize o inscrito e copie o email (menu do item)</li>
          <li>Volte para Lançamentos e acesse a faixa de Teste Fechado ou Aberto</li>
          <li>Use o botão de adicionar testador e cole o email</li>
          <li>Confirme — o email é adicionado como <em>aprovado</em> na faixa de destino</li>
        </ol>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md text-sm text-[#333] mb-8">
          O inscrito continua na lista de pré-registro. A adição na faixa de teste é independente.
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Seção 5 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          5. Debug — Monitorando Erros em Produção
        </h2>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">Como acessar</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-1.5 mb-4">
          <li>Menu lateral do Dashboard → <strong>Debug View</strong></li>
          <li>Ou clique em <strong>"ver mais"</strong> no bloco de erros do Dashboard principal</li>
        </ul>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] px-4 py-3 rounded-r-md text-sm text-[#333] mb-5">
          Disponível somente para apps com status ativo. Não disponível para apps removidos ou em rascunho.
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mb-2">O que você vê</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Campo</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2.5">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tipo do Erro', 'Categoria ou classe do erro'],
                ['Mensagem', 'Descrição legível do erro'],
                ['Stack Trace', 'Rastreamento de pilha para diagnóstico técnico'],
                ['Dispositivo', 'Modelo e versão Android onde ocorreu'],
                ['Versão do App', 'Versão do build que gerou o erro'],
                ['Data/Hora', 'Quando o erro aconteceu'],
                ['Ocorrências', 'Quantas vezes o mesmo erro foi reportado'],
              ].map(([campo, desc], i) => (
                <tr key={campo} className={i % 2 === 1 ? 'bg-[#f7f9ff]' : ''}>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0]"><strong>{campo}</strong></td>
                  <td className="px-3 py-2.5 border-b border-[#dde3f0]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#444] leading-relaxed mb-8">
          Clique em qualquer erro para ver o <strong>detalhe completo</strong> (stack trace, dispositivos afetados, histórico).
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Fluxo Resumido */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Fluxo Resumido: Do Rascunho ao Beta
        </h2>
        <pre className="bg-[#1e2235] text-[#e2e8f0] px-4 py-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-10 font-mono">{`Passo 3 do checklist
       |
       +-- Não testar ---------> Passo 4: APK para produção --> App público
       |
       +-- Testar (sem pré-reg) -> Passo 4: APK para faixa beta
       |                           -> Gerenciar testadores
       |                           -> Após validar: publicar para produção
       |
       +-- Pré-registro ---------> Página pública na loja coleta inscritos
                                   -> Quando pronto: mover inscritos p/ faixa de teste
                                   -> Fazer upload do APK -> publicar`}</pre>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/publicar-primeiro-app" className="text-[#2c7df0] no-underline hover:underline">
            ← Publicar seu Primeiro App
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
