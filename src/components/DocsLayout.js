'use client'

import Sidebar from './Sidebar'
import Header from './Header'

export default function DocsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Header />
      <main className="lg:ml-64 mt-16 px-6 py-8 max-w-4xl">
        {children}
      </main>
    </div>
  )
}
