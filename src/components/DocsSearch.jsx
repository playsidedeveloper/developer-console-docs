'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = [
  { id: 'all', label: 'Tudo' },
  { id: 'inicio', label: 'Primeiros Passos' },
  { id: 'publicacao', label: 'Publicação' },
  { id: 'monetizacao', label: 'Monetização' },
  { id: 'crescimento', label: 'Crescimento' },
  { id: 'qualidade', label: 'Qualidade' },
]

export default function DocsSearch({ docs }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = docs.filter((d) => {
    const matchesCategory = activeCategory === 'all' || d.category === activeCategory
    const matchesQuery =
      !query.trim() ||
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <div>
      {/* Search input */}
      <div className="max-w-md mb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af] w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar documentação..."
            className="w-full pl-9 pr-4 py-2.5 border border-[#dde3f0] rounded-lg text-sm text-[#1a1a2e] placeholder-[#9ca3af] focus:outline-none focus:border-[#2c7df0] focus:ring-1 focus:ring-[#2c7df0] bg-white"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#555] text-lg leading-none"
              aria-label="Limpar busca"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              activeCategory === cat.id
                ? 'bg-[#2c7df0] text-white border-[#2c7df0]'
                : 'bg-white text-[#555] border-[#dde3f0] hover:border-[#2c7df0] hover:text-[#2c7df0]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count when searching or filtering */}
      {(query.trim() || activeCategory !== 'all') && (
        <p className="text-sm text-[#6b7280] mb-4">
          {filtered.length === 0
            ? 'Nenhum resultado encontrado.'
            : `${filtered.length} documento${filtered.length !== 1 ? 's' : ''}${query.trim() ? ` para "${query}"` : ''}`}
        </p>
      )}

      {/* Docs grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="border border-[#dde3f0] rounded-lg p-5 no-underline hover:border-[#2c7df0] hover:shadow-sm transition-all bg-white flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-[#2c7df0] font-semibold text-sm leading-snug">
                  {doc.title}
                </h3>
                {doc.category && doc.category !== 'all' && (
                  <span className="shrink-0 text-[10px] font-medium text-[#9ca3af] bg-[#f3f4f6] rounded px-1.5 py-0.5 mt-0.5 whitespace-nowrap">
                    {CATEGORIES.find((c) => c.id === doc.category)?.label ?? ''}
                  </span>
                )}
              </div>
              <p className="text-[#555] text-sm leading-relaxed m-0">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-[#9ca3af] text-sm">
            Nenhum resultado.{' '}
            <button
              onClick={() => { setQuery(''); setActiveCategory('all') }}
              className="text-[#2c7df0] underline cursor-pointer bg-transparent border-none p-0"
            >
              Ver todos os docs
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
