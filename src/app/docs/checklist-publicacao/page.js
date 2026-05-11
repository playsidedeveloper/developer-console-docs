import Link from 'next/link'

export const metadata = {
  title: 'Checklist de Publicação — Developer Console',
  description: 'Lista completa do que verificar antes de publicar ou atualizar seu app na Aurora Play.',
}

function Navbar() {
  return (
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
  )
}

function CheckItem({ children, note }) {
  return (
    <li className="flex items-start gap-3 py-2.5 border-b border-[#f0f0f0] last:border-b-0">
      <span className="mt-0.5 shrink-0 w-5 h-5 rounded border-2 border-[#d1d5db] bg-white inline-block" />
      <div>
        <span className="text-sm text-[#1a1a2e] leading-relaxed">{children}</span>
        {note && (
          <p className="text-xs text-[#6b7280] mt-0.5 leading-relaxed">{note}</p>
        )}
      </div>
    </li>
  )
}

function Section({ title, badge, children }) {
  const badgeColor =
    badge === 'Obrigatório'
      ? 'bg-[#fee2e2] text-[#b91c1c]'
      : badge === 'Recomendado'
      ? 'bg-[#fef9c3] text-[#854d0e]'
      : 'bg-[#dcfce7] text-[#166534]'

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-base font-semibold text-[#111]">{title}</h2>
        {badge && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <ul className="bg-white border border-[#e5e7eb] rounded-xl px-4 list-none m-0 p-0 pl-4">
        {children}
      </ul>
    </div>
  )
}

export default function Page() {
  return (
    <div
      className="min-h-screen bg-white text-[#1a1a2e]"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e7eb] px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-[#6b7280]">
          <Link href="/docs" className="text-[#2563eb] no-underline hover:underline">
            Documentação
          </Link>
          <span>/</span>
          <span className="text-[#1a1a2e]">Checklist de Publicação</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <h1 className="text-3xl font-bold text-[#111] mb-2">Checklist de Publicação</h1>
        <p className="text-[#555] text-base mb-2 leading-relaxed">
          Use esta lista antes de submeter seu app pela primeira vez ou enviar uma atualização.
          Cada item marcado reduz a chance de rejeição e acelera o review.
        </p>
        <p className="text-xs text-[#9ca3af] mb-8">
          Itens <span className="font-semibold text-[#b91c1c]">Obrigatórios</span> bloqueiam aprovação se estiverem incorretos.{' '}
          <span className="font-semibold text-[#854d0e]">Recomendados</span> melhoram conversão e avaliação.
        </p>

        <hr className="border-[#e8e8e8] mb-8" />

        {/* APK */}
        <Section title="APK" badge="Obrigatório">
          <CheckItem note="O app deve abrir e funcionar sem depender de servidor externo não disponível.">
            O app instala e abre sem erros em dispositivo ou emulador Android.
          </CheckItem>
          <CheckItem note="Telas principais, fluxo de cadastro/login e função central do app.">
            Todas as funcionalidades essenciais estão acessíveis e funcionando.
          </CheckItem>
          <CheckItem note="O packageName não pode ser alterado após o primeiro upload.">
            O <code className="bg-[#f5f5f5] text-[#111] px-1 rounded text-xs">packageName</code> está correto e definitivo.
          </CheckItem>
          <CheckItem note="Nunca é permitido fazer downgrade de versão.">
            O <code className="bg-[#f5f5f5] text-[#111] px-1 rounded text-xs">versionCode</code> é maior que o da versão anterior (em caso de atualização).
          </CheckItem>
          <CheckItem>
            O campo <strong>Novidades</strong> está preenchido com as mudanças desta versão.
          </CheckItem>
        </Section>

        {/* Metadados */}
        <Section title="Metadados" badge="Obrigatório">
          <CheckItem note="O título aparece na listagem da loja. Seja claro e descritivo.">
            Título condiz com a função real do app (sem nome genérico ou enganoso).
          </CheckItem>
          <CheckItem note="A equipe verifica se a descrição representa fielmente o app.">
            Descrição clara, sem exageros e sem palavras-chave repetidas artificialmente.
          </CheckItem>
          <CheckItem note="PNG ou JPG, tamanho adequado, sem bordas extras ou texto sobreposto.">
            Ícone de alta qualidade e representativo do app.
          </CheckItem>
          <CheckItem note="Mínimo de 3 screenshots são obrigatórios para publicação.">
            Pelo menos 3 screenshots adicionadas no módulo Página Detalhes.
          </CheckItem>
          <CheckItem>
            Nome do desenvolvedor está correto (seu nome ou nome da empresa).
          </CheckItem>
        </Section>

        {/* Screenshots */}
        <Section title="Screenshots" badge="Recomendado">
          <CheckItem note="Screenshots reais do app, não mockups ou arte conceitual.">
            Screenshots mostram o app em uso, com interface real e legível.
          </CheckItem>
          <CheckItem>
            Entre 4 e 8 screenshots cobrindo as principais telas do app.
          </CheckItem>
          <CheckItem note="Proporção 9:16 funciona melhor para a maioria dos dispositivos.">
            Screenshots em orientação vertical (portrait), resolução mínima 720×1280 px.
          </CheckItem>
          <CheckItem>
            A primeira screenshot representa a funcionalidade mais importante do app.
          </CheckItem>
        </Section>

        {/* Conformidade */}
        <Section title="Conformidade" badge="Obrigatório">
          <CheckItem>
            O app não contém conteúdo adulto, violento ou discriminatório sem aviso de faixa etária.
          </CheckItem>
          <CheckItem note="Permissões devem ser justificadas pelo uso real do app.">
            As permissões solicitadas são estritamente necessárias para as funcionalidades do app.
          </CheckItem>
          <CheckItem>
            O app não coleta dados do usuário sem consentimento explícito ou aviso na descrição.
          </CheckItem>
          <CheckItem>
            Não há propagandas enganosas, redirecionamentos automáticos ou downloads não autorizados.
          </CheckItem>
        </Section>

        {/* Monetização com AdAstra */}
        <Section title="Monetização com AdAstra" badge="Opcional">
          <CheckItem note={<>Siga o guia <Link href="/docs/integrar-adastra" className="text-[#2563eb] hover:underline">Integrar o AdAstra</Link> para o passo a passo completo.</>}>
            O SDK AdAstra foi adicionado ao projeto e inicializado corretamente.
          </CheckItem>
          <CheckItem>
            O app está atualizado — monetização é pausada após 15 dias sem atualização.
          </CheckItem>
          <CheckItem note="CPM completo requer que o usuário já tenha atualizado o app ao menos uma vez.">
            Entendido o fluxo de ganhos: Estimados → Disponíveis → Saldo → Pagamento.
          </CheckItem>
        </Section>

        {/* ASO */}
        <Section title="Visibilidade na Loja (ASO)" badge="Recomendado">
          <CheckItem note={<>Veja o guia <Link href="/docs/aso-aumentar-downloads" className="text-[#2563eb] hover:underline">ASO — Aumentar Downloads</Link> para técnicas detalhadas.</>}>
            Título e descrição incluem palavras-chave relevantes para o nicho do app.
          </CheckItem>
          <CheckItem>
            A descrição tem pelo menos 150 palavras explicando benefícios e funcionalidades.
          </CheckItem>
          <CheckItem>
            O ícone se destaca em fundo branco e fundo escuro (verifique em ambos os contextos).
          </CheckItem>
        </Section>

        {/* Dica final */}
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-xl px-5 py-4 mt-2 mb-8">
          <p className="text-sm text-[#0c4a6e] leading-relaxed m-0">
            <strong>Dica:</strong> apps rejeitados podem ser corrigidos e reenviados. Leia o motivo da rejeição com atenção —
            ele indica exatamente o que precisa mudar. Consulte os{' '}
            <Link href="/docs/criterios-review-aprovacao" className="text-[#2563eb] hover:underline">
              Critérios de Review
            </Link>{' '}
            para entender o processo completo.
          </p>
        </div>

        {/* Nav entre docs */}
        <div className="border-t border-[#e5e7eb] pt-6 mt-10 flex justify-between text-sm">
          <Link href="/docs/criterios-review-aprovacao" className="text-[#2563eb] no-underline hover:underline">
            ← Critérios de Review
          </Link>
          <Link href="/docs/publicar-primeiro-app" className="text-[#2563eb] no-underline hover:underline">
            Publicar Primeiro App →
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
