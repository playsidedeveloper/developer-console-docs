'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DocsSearch({ docs }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? docs.filter(
        (d) =>
          d.title.toLowerCase().includes(query.toLowerCase()) ||
          d.description.toLowerCase().includes(query.toLowerCase())
      )
    : docs

  return (
    <div>
      {/* Search input */}
      <div className="max-w-md mb-8">
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

      {/* Results count when searching */}
      {query.trim() && (
        <p className="text-sm text-[#6b7280] mb-4">
          {filtered.length === 0
            ? 'Nenhum resultado encontrado.'
            : `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} para "${query}"`}
        </p>
      )}

      {/* Docs grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className="border border-[#dde3f0] rounded-lg p-5 no-underline hover:border-[#2c7df0] hover:shadow-sm transition-all bg-white"
            >
              <h3 className="text-[#2c7df0] font-semibold text-sm mb-2 leading-snug">
                {doc.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed m-0">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        query.trim() && (
          <div className="text-center py-12">
            <p className="text-[#9ca3af] text-sm">
              Tente buscar por outro termo ou{' '}
              <button
                onClick={() => setQuery('')}
                className="text-[#2c7df0] underline cursor-pointer bg-transparent border-none p-0"
              >
                ver todos os docs
              </button>
              .
            </p>
          </div>
        )
      )}
    </div>
  )
}
