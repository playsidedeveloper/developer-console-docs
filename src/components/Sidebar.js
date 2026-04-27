'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi'

const navigation = [
  {
    section: 'Getting Started',
    items: [
      { name: 'Documentation Home', href: '/docs' },
      { name: 'Console Overview', href: '/docs/overview' },
      { name: 'Publish First App', href: '/docs/quick-start' },
    ],
  },
  {
    section: 'Guides',
    items: [
      { name: 'Publish Updates', href: '/docs/guides/updates' },
      { name: 'Monetize with AdAstra', href: '/docs/guides/adastra' },
    ],
  },
  {
    section: 'Reference',
    items: [
      { name: 'Modules Reference', href: '/docs/api/modules' },
    ],
  },
  {
    section: 'Resources',
    items: [
      { name: 'FAQ', href: '/docs/faq' },
      { name: 'Support', href: '/docs/support' },
    ],
  },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              DC
            </div>
            <span className="font-bold text-lg">Dev Console</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6">
          {navigation.map((section) => (
            <div key={section.section}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.section}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <FiChevronRight size={16} className="text-gray-400" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
