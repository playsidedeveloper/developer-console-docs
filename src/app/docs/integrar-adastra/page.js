import Link from 'next/link'

export const metadata = {
  title: 'Integrar o AdAstra — Developer Console',
  description: 'Passo a passo para integrar o módulo AdAstra de monetização no seu app.',
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
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-2 text-sm text-[#9ca3af] flex items-center gap-2">
        <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">Documentação</Link>
        <span>/</span>
        <span className="text-[#555]">Integrar o AdAstra</span>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 pb-16 pt-4">
        <h1 className="text-2xl font-bold text-[#1a1a2e] mb-1">Guia: Integrar o AdAstra no seu App</h1>
        <p className="text-[#666] text-base mb-6">
          O módulo de monetização da Aurora Play — cada abertura do app gera receita para o desenvolvedor.
        </p>

        {/* Intro */}
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-8">
          <p className="text-[#444] text-sm mb-0 leading-relaxed">
            O AdAstra é o módulo de monetização da Aurora Play. Após a integração, cada vez que um dispositivo
            abre o app o sistema registra o evento e credita um valor ao desenvolvedor — sem precisar de anúncios
            externos, assinaturas ou compras in-app.
          </p>
        </div>

        {/* Pré-requisitos */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Pré-requisitos
        </h2>
        <ul className="text-sm text-[#444] leading-relaxed mb-6 pl-5 space-y-1.5 list-disc">
          <li>App publicado (status <strong className="text-[#1a1a2e]">ATIVO</strong>) no Developer Console Aurora Play</li>
          <li><strong className="text-[#1a1a2e]">App ID</strong> do seu app (disponível em Configurações &gt; Package Name / ID do app)</li>
          <li>Projeto Android aberto no <strong className="text-[#1a1a2e]">Sketchware</strong></li>
          <li>Módulo AdAstra instalado via <strong className="text-[#1a1a2e]">Play Sketch</strong></li>
        </ul>

        {/* Passo 1 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Passo 1 — Obter o App ID
        </h2>
        <ol className="text-sm text-[#444] leading-relaxed mb-4 pl-5 space-y-1.5 list-decimal">
          <li>Abra o Developer Console e entre no app desejado</li>
          <li>Acesse o menu lateral &gt; <strong className="text-[#1a1a2e]">Configurações</strong></li>
          <li>Localize o campo <strong className="text-[#1a1a2e]">App ID</strong> — este é o valor que você vai usar no código</li>
        </ol>
        <div className="bg-[#f0f5ff] border-l-4 border-[#2c7df0] rounded-r-lg p-4 mb-6">
          <p className="text-[#444] text-sm mb-0 leading-relaxed">
            Guarde esse valor. Ele é único por app e não muda após o primeiro APK.
          </p>
        </div>

        {/* Passo 2 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Passo 2 — Instalar o módulo via Play Sketch
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O AdAstra é distribuído pelo <strong className="text-[#1a1a2e]">Play Sketch</strong>, que copia os arquivos{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">.java</code> do módulo
          diretamente para a pasta{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">data/files</code> do
          projeto Sketchware.
        </p>
        <ol className="text-sm text-[#444] leading-relaxed mb-4 pl-5 space-y-1.5 list-decimal">
          <li>Abra o Play Sketch</li>
          <li>Localize o módulo <strong className="text-[#1a1a2e]">AdAstra</strong></li>
          <li>Instale-o no projeto desejado</li>
        </ol>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Após a instalação, estas classes estarão disponíveis no código:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Classe</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Responsabilidade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AdAstra', 'Verificação de update e exibição de anúncios'],
                ['CrashReport', 'Envio de logs de erro ao Developer Console'],
                ['Cache', 'Controle interno de cache (uso interno)'],
                ['CheckUpdate', 'Comunicação com a API de versões (uso interno)'],
                ['ShowAds', 'Exibição do intersticial de anúncio (uso interno)'],
                ['ShowUpdate', 'Exibição do dialog de atualização (uso interno)'],
                ['UpdateDownloader', 'Download do APK de atualização (uso interno)'],
                ['UrlManager', 'Gerenciamento de endpoints (uso interno)'],
              ].map(([cls, desc], i) => (
                <tr key={cls}>
                  <td className={`px-3 py-2 font-mono text-[#1a56db] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{cls}</td>
                  <td className={`px-3 py-2 text-[#444] text-sm ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Passo 3 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Passo 3 — Integrar na Activity principal
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Toda a lógica deve ser adicionada na <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">Activity</code> que abre quando o
          usuário inicia o app — geralmente <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">HomeActivity</code> ou{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">MainActivity</code>.
        </p>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">3.1 Declarar a instância</h3>
        <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-4 font-mono">
          {`private AdAstra adAstra;`}
        </pre>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">3.2 Registrar o listener de download (recomendado)</h3>
        <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-4 font-mono">
          {`adAstra = new AdAstra(this);

adAstra.setOnDownloadCompletedListener(new AdAstra.OnDownloadCompletedListener() {
    @Override
    public void onDownloadCompleted(String apkFilePath) {
        // O APK foi baixado — o módulo abre o instalador automaticamente
    }
});`}
        </pre>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">3.3 Verificar atualização e exibir anúncio</h3>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Chame dentro do <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">onCreate</code>, após o{' '}
          <code className="bg-[#f0f5ff] text-[#1a56db] px-1.5 py-0.5 rounded text-xs font-mono">setContentView</code>:
        </p>
        <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-4 font-mono">
          {`adAstra.checkUpdateApp("SEU-APP-ID", new AdAstra.UpdateAvailableCallback() {
    @Override
    public void onUpdateCheckResult(boolean isUpdateAvailable, String message) {
        if (isUpdateAvailable) {
            adAstra.showUpdate();   // exibe o dialog de atualização
        } else {
            adAstra.showAds();      // exibe anúncio da rede Aurora Play
        }
    }

    @Override
    public void onError(String errorMessage) {
        // erro de rede — trate silenciosamente
    }
});`}
        </pre>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">3.4 Reportar crashes (recomendado)</h3>
        <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-6 font-mono">
          {`new CrashReport(this).sendIfHasCrash(new CrashReport.CrashCallback() {
    @Override
    public void onSuccess(String message) { }

    @Override
    public void onError(String errorMessage) { }
});`}
        </pre>

        {/* Passo 4 — Código completo */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Passo 4 — Código completo de referência
        </h2>
        <pre className="bg-[#1e2235] text-[#e2e8f0] p-4 rounded-lg overflow-x-auto text-xs leading-relaxed mb-6 font-mono">
          {`public class HomeActivity extends AppCompatActivity {

    private AdAstra adAstra;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        adAstra = new AdAstra(this);

        adAstra.setOnDownloadCompletedListener(new AdAstra.OnDownloadCompletedListener() {
            @Override
            public void onDownloadCompleted(String apkFilePath) {
                // APK baixado — o módulo gerencia a instalação
            }
        });

        adAstra.checkUpdateApp("SEU-APP-ID", new AdAstra.UpdateAvailableCallback() {
            @Override
            public void onUpdateCheckResult(boolean isUpdateAvailable, String message) {
                if (isUpdateAvailable) {
                    adAstra.showUpdate();
                } else {
                    adAstra.showAds();
                }
            }

            @Override
            public void onError(String errorMessage) { }
        });

        new CrashReport(this).sendIfHasCrash(new CrashReport.CrashCallback() {
            @Override
            public void onSuccess(String message) { }

            @Override
            public void onError(String errorMessage) { }
        });
    }
}`}
        </pre>

        {/* Passo 5 */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Passo 5 — Publicar o APK com o AdAstra
        </h2>
        <ol className="text-sm text-[#444] leading-relaxed mb-6 pl-5 space-y-1.5 list-decimal">
          <li>Gere o APK no Sketchware</li>
          <li>No Developer Console, acesse <strong className="text-[#1a1a2e]">Lançamentos</strong> &gt; <strong className="text-[#1a1a2e]">Nova Versão</strong></li>
          <li>Faça upload do APK com o AdAstra integrado</li>
          <li>Preencha o campo <strong className="text-[#1a1a2e]">Novidades</strong></li>
          <li>Envie via <strong className="text-[#1a1a2e]">Publicação</strong> para análise</li>
        </ol>

        {/* Como os ganhos funcionam */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Como os ganhos funcionam
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          O AdAstra registra um evento a cada dispositivo único que abre o app:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Tipo de usuário</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Ganho por dispositivo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Novo usuário', 'R$ 0,03'],
                ['Usuário fiel (atualizou o app ao menos 1x)', 'R$ 0,045 (+50%)'],
              ].map(([tipo, ganho], i) => (
                <tr key={tipo}>
                  <td className={`px-3 py-2 text-[#444] text-sm ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{tipo}</td>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-sm ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{ganho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#fff8e6] border-l-4 border-[#f0a500] rounded-r-lg p-4 mb-6">
          <span className="inline-block bg-[#f0a500] text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Requisito</span>
          <p className="text-[#444] text-sm mt-1 mb-0 leading-relaxed">
            O app precisa ter ao menos <strong>1 atualização a cada 15 dias</strong> para manter o AdAstra ativo.
            Sem isso, a monetização é pausada automaticamente.
          </p>
        </div>

        {/* Referência da API */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Referência rápida da API
        </h2>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">
          Classe <code className="bg-[#f0f5ff] px-1.5 py-0.5 rounded text-xs font-mono">AdAstra</code>
        </h3>
        <div className="overflow-x-auto mb-5">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Método</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Parâmetros</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['AdAstra(Context)', 'Activity atual', 'Instancia o módulo'],
                ['checkUpdateApp(appId, callback)', 'App ID (String), callback', 'Verifica se há nova versão disponível'],
                ['showUpdate()', '—', 'Exibe o dialog de atualização para o usuário'],
                ['showAds()', '—', 'Exibe um anúncio intersticial da rede Aurora Play'],
                ['downloadUpdate()', '—', 'Inicia o download manual da atualização'],
                ['setOnDownloadCompletedListener(listener)', 'Listener', 'Notifica quando o download terminar'],
              ].map(([method, params, desc], i) => (
                <tr key={method}>
                  <td className={`px-3 py-2 font-mono text-[#1a56db] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{method}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{params}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-sm font-semibold text-[#1a56db] mt-5 mb-2">
          Classe <code className="bg-[#f0f5ff] px-1.5 py-0.5 rounded text-xs font-mono">CrashReport</code>
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Método</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Parâmetros</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['CrashReport(Context)', 'Activity atual', 'Instancia o reporter'],
                ['sendIfHasCrash(callback)', 'Callback', 'Envia o crash log pendente, se houver'],
              ].map(([method, params, desc], i) => (
                <tr key={method}>
                  <td className={`px-3 py-2 font-mono text-[#1a56db] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{method}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{params}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Problemas comuns */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b-2 border-[#e8e8e8] pb-1.5 mb-4 mt-8">
          Problemas comuns
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Sintoma</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Causa provável</th>
                <th className="bg-[#2c7df0] text-white text-left px-3 py-2">Solução</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Anúncio não aparece', 'App ID incorreto', 'Verifique o App ID em Configurações no console'],
                ['Dialog de update não aparece', 'APK com versionCode igual ou menor', 'Incremente o versionCode no próximo upload'],
                ['Dados não aparecem no Dashboard', 'APK sem AdAstra foi aprovado por último', 'Faça upload de nova versão com o módulo e publique'],
                ['Ganhos pausados', 'App sem atualização há mais de 15 dias', 'Publique uma nova versão do APK'],
                ['Ganhos pausados', 'Saldo da rede negativo', 'Situação temporária — aguarde reposição da rede'],
              ].map(([sintoma, causa, solucao], i) => (
                <tr key={i}>
                  <td className={`px-3 py-2 font-semibold text-[#1a1a2e] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{sintoma}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{causa}</td>
                  <td className={`px-3 py-2 text-[#444] text-xs ${i % 2 === 1 ? 'bg-[#f5f7fb]' : ''}`}>{solucao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/developer-console-visao-geral" className="text-[#2c7df0] no-underline hover:underline">
            ← Developer Console — Visão Geral
          </Link>
          <Link href="/docs/monitorar-analytics-metricas" className="text-[#2c7df0] no-underline hover:underline">
            Monitorar Analytics →
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
