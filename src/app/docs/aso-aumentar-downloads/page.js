import Link from 'next/link'

export const metadata = {
  title: 'ASO — Como Aumentar os Downloads — Developer Console',
  description: 'Técnicas de App Store Optimization para melhorar visibilidade, título, ícone, screenshots, categoria e rating na Aurora Play.',
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
          <span className="text-[#1a1a2e]">ASO — Aumentar Downloads</span>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#2c7df0] mb-2">ASO — Como Aumentar os Downloads do seu App</h1>
        <p className="text-[#555] text-base mb-8 leading-relaxed">
          ASO (App Store Optimization) é o conjunto de técnicas para melhorar a visibilidade e a taxa de conversão
          do seu app na Aurora Play. Um bom ASO significa mais usuários encontrando — e instalando — o seu app
          sem você gastar nada com anúncios.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 1. Título */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          1. Título do App
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          O título é o elemento de maior peso na busca. Use-o estrategicamente:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li><strong>Seja claro e direto:</strong> o usuário precisa entender o que o app faz em menos de 2 segundos.</li>
          <li><strong>Inclua a palavra-chave principal:</strong> se o seu app é uma calculadora, considere algo como "Calculadora Pro — Rápida e Simples".</li>
          <li><strong>Evite caracteres especiais ou emojis no título</strong> — podem cortar mal em diferentes tamanhos de tela.</li>
          <li><strong>Limite:</strong> mantenha abaixo de 30 caracteres para garantir exibição completa na listagem.</li>
        </ul>
        <div className="border-l-4 border-[#28a745] bg-[#f0fff4] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            <strong>Dica:</strong> Teste o título pensando em como o usuário digitaria na busca. "editor de foto grátis" é mais buscado que "PhotoApp Ultimate".
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 2. Ícone */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          2. Ícone
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          O ícone é o primeiro elemento visual que o usuário vê. Ele influencia diretamente se alguém vai clicar no seu app ou passar adiante.
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-8">
          <li><strong>Use fundo sólido ou gradiente simples</strong> — evite fotos ou fundos complexos.</li>
          <li><strong>O símbolo principal deve ser legível em 48×48px</strong> — teste em tamanhos pequenos.</li>
          <li><strong>Evite texto no ícone</strong> — fica ilegível em tamanhos pequenos.</li>
          <li><strong>Alta resolução:</strong> envie no mínimo 512×512px.</li>
          <li><strong>Diferenciação:</strong> compare com os ícones dos concorrentes na mesma categoria e crie algo que se destaque.</li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 3. Descrição */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          3. Descrição
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          A descrição aparece na página do app e influencia tanto a busca quanto a decisão de instalar.
        </p>
        <h3 className="text-sm font-semibold text-[#333] mb-2">Estrutura recomendada</h3>
        <ol className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li><strong>Primeira frase (gancho):</strong> descreva o benefício principal em uma linha. Ex.: "Controle suas finanças de forma simples e visual."</li>
          <li><strong>Funcionalidades principais:</strong> liste de 4 a 6 recursos com bullets curtos.</li>
          <li><strong>Público-alvo:</strong> mencione para quem o app foi feito.</li>
          <li><strong>Chamada para ação:</strong> finalize com um convite — "Baixe grátis e comece agora."</li>
        </ol>
        <div className="border-l-4 border-[#28a745] bg-[#f0fff4] rounded-r-lg px-4 py-3 mb-3">
          <p className="text-sm text-[#444] m-0">
            <strong>Dica:</strong> Use palavras-chave naturalmente ao longo do texto — não apenas no título. A busca também indexa a descrição.
          </p>
        </div>
        <div className="border-l-4 border-[#fd7e14] bg-[#fff8f0] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            <strong>Atenção:</strong> Não prometa funcionalidades que o app não tem. Descrições enganosas aumentam a taxa de desinstalação e pioram o rating.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 4. Screenshots */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          4. Screenshots
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          As screenshots são o "trailer" do seu app. Usuários decidem instalar ou não depois de ver as imagens.
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-8">
          <li><strong>Mostre as telas mais importantes</strong> — não a tela de login ou splash screen.</li>
          <li><strong>Adicione legenda em cada screenshot</strong> explicando o que a funcionalidade faz.</li>
          <li><strong>Ordem:</strong> comece pela tela mais impactante (geralmente a principal funcionalidade).</li>
          <li><strong>Qualidade:</strong> use capturas reais do app, sem cortes ou baixa resolução.</li>
          <li><strong>Quantidade ideal:</strong> 4 a 6 screenshots cobrem bem sem sobrecarregar.</li>
        </ul>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 5. Categoria */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          5. Categoria Certa
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-4">
          Escolher a categoria errada reduz sua visibilidade para quem realmente quer seu app. Regras práticas:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#f0f5ff] text-[#2c7df0] text-left px-3 py-2 border-b-2 border-[#d0e0ff]">Tipo de App</th>
                <th className="bg-[#f0f5ff] text-[#2c7df0] text-left px-3 py-2 border-b-2 border-[#d0e0ff]">Categoria Recomendada</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Reprodutor de música local', 'Música e Áudio'],
                ['Agenda ou to-do list', 'Produtividade'],
                ['Editor de imagens', 'Fotografia'],
                ['App de receitas', 'Comer e beber'],
                ['Contador de passos', 'Saúde e fitness'],
                ['VPN ou bloqueador de anúncios', 'Ferramenta'],
                ['Chat ou mensagens', 'Comunicação'],
              ].map(([tipo, cat], i) => (
                <tr key={tipo}>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#333] ${i % 2 === 1 ? 'bg-[#f9fafb]' : ''}`}>{tipo}</td>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#555] ${i % 2 === 1 ? 'bg-[#f9fafb]' : ''}`}>{cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            <strong>Regra de ouro:</strong> escolha a categoria onde o usuário-alvo do seu app vai procurar — não necessariamente onde seu app seria mais único.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 6. Avaliações */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          6. Avaliações e Respostas
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          O rating médio e o número de avaliações impactam diretamente a posição nas buscas e a confiança do usuário.
        </p>
        <h3 className="text-sm font-semibold text-[#333] mb-2">Como melhorar o rating</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li><strong>Peça avaliação no momento certo:</strong> solicite ao usuário depois de uma ação positiva (completar uma tarefa, usar um recurso pela 3ª vez).</li>
          <li><strong>Não peça avaliação logo no primeiro uso</strong> — o usuário ainda não conhece o app.</li>
          <li><strong>Corrija bugs rapidamente:</strong> avaliações negativas muitas vezes são sobre crashes ou lentidão.</li>
        </ul>
        <h3 className="text-sm font-semibold text-[#333] mb-2">Respondendo avaliações</h3>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li>Responda avaliações negativas com empatia e informe se o problema foi corrigido.</li>
          <li>Agradeça avaliações positivas — isso mostra que o desenvolvedor está ativo.</li>
          <li>Evite respostas genéricas como "obrigado pelo feedback" sem dar contexto.</li>
        </ul>
        <div className="border-l-4 border-[#28a745] bg-[#f0fff4] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            <strong>Dica:</strong> Uma resposta bem elaborada a uma avaliação 1 estrela pode convencer outros usuários que você se importa com a qualidade do app.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* 7. Manter atualizado */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          7. Manter o App Atualizado
        </h2>
        <p className="text-sm text-[#444] leading-relaxed mb-3">
          Apps com atualizações frequentes tendem a ter melhor posicionamento e maior confiança dos usuários:
        </p>
        <ul className="text-sm text-[#444] pl-5 space-y-2 mb-4">
          <li><strong>Atualize ao menos a cada 30 dias</strong> — mesmo que seja uma correção pequena.</li>
          <li><strong>Descreva o changelog no campo de atualização:</strong> "Versão 2.1 — corrigido bug de login, melhorias de velocidade na tela inicial."</li>
          <li><strong>Mantenha as screenshots atualizadas</strong> quando a interface mudar.</li>
        </ul>
        <div className="border-l-4 border-[#2c7df0] bg-[#f0f5ff] rounded-r-lg px-4 py-3 mb-8">
          <p className="text-sm text-[#444] m-0">
            <strong>Lembre-se:</strong> no AdAstra, manter o app atualizado a cada 15 dias é requisito para manter os ganhos com anúncios ativos.
            Combinar ASO com monetização maximiza o retorno do app.
          </p>
        </div>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* Checklist */}
        <h2 className="text-lg font-semibold text-[#1a1a2e] border-b border-[#e8e8e8] pb-2 mb-4">
          Checklist ASO Rápido
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-[#f0f5ff] text-[#2c7df0] text-left px-3 py-2 border-b-2 border-[#d0e0ff]">Item</th>
                <th className="bg-[#f0f5ff] text-[#2c7df0] text-left px-3 py-2 border-b-2 border-[#d0e0ff]">Status Ideal</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Título claro com palavra-chave principal', 'Até 30 caracteres, sem emojis'],
                ['Ícone legível em tamanho pequeno', '512×512px, sem texto'],
                ['Descrição com gancho, features e CTA', 'Palavras-chave naturais ao longo do texto'],
                ['4 a 6 screenshots com legenda', 'Tela mais impactante primeiro'],
                ['Categoria correta para o público-alvo', 'Onde o usuário procuraria'],
                ['Rating médio acima de 4.0', 'Responder avaliações negativas'],
                ['Atualização ao menos a cada 30 dias', 'Changelog descritivo'],
              ].map(([item, status], i) => (
                <tr key={item}>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#333] ${i % 2 === 1 ? 'bg-[#f9fafb]' : ''}`}>{item}</td>
                  <td className={`px-3 py-2 border-b border-[#eee] text-[#555] ${i % 2 === 1 ? 'bg-[#f9fafb]' : ''}`}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#dde3f0] pt-6 flex justify-between text-sm">
          <Link href="/docs/criterios-review-aprovacao" className="text-[#2c7df0] no-underline hover:underline">
            ← Critérios de Review e Aprovação
          </Link>
          <Link href="/docs" className="text-[#2c7df0] no-underline hover:underline">
            Ver toda a documentação →
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
