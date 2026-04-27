'use client'

import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-30">
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold">Documentation</h1>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="GitHub"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://console.aurora-play.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <span>Go to Console</span>
          <FiExternalLink size={16} />
        </a>
      </div>
    </header>
  )
}
