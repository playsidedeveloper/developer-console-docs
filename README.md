# Developer Console Documentation

Official documentation website for Aurora Play Developer Console built with Next.js and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Home page
│   ├── layout.js              # Root layout
│   ├── globals.css            # Global styles
│   └── docs/
│       ├── page.js            # Documentation home
│       ├── quick-start/        # Quick start guide
│       ├── installation/       # Installation guide
│       ├── guides/            # Detailed guides
│       │   ├── publishing/
│       │   ├── monetization/
│       │   ├── analytics/
│       │   └── testing/
│       ├── api/               # API reference
│       │   ├── auth/
│       │   ├── apps/
│       │   └── analytics/
│       └── faq/               # Frequently asked questions
└── components/
    ├── Sidebar.js            # Documentation sidebar navigation
    ├── Header.js             # Top navigation bar
    └── DocsLayout.js         # Documentation layout wrapper
```

## 🎨 Features

- **Responsive Design**: Mobile-friendly layout with adaptive navigation
- **Sidebar Navigation**: Easy navigation through documentation sections
- **Code Highlighting**: Beautiful code blocks with syntax highlighting
- **Fast Performance**: Built with Next.js for optimal speed
- **Dark Mode Ready**: Easy to extend with dark mode support
- **SEO Optimized**: Proper metadata and structure for search engines

## 🔧 Configuration

### Adding New Documentation Pages

1. Create a new folder under `src/app/docs/`
2. Add a `page.js` file:

```javascript
import DocsLayout from '@/components/DocsLayout'

export const metadata = {
  title: 'Page Title - Developer Console Docs',
  description: 'Page description',
}

export default function PageName() {
  return (
    <DocsLayout>
      <div className="prose">
        <h1>Page Title</h1>
        {/* Your content here */}
      </div>
    </DocsLayout>
  )
}
```

### Updating Navigation

Edit `src/components/Sidebar.js` and add your page to the `navigation` array:

```javascript
const navigation = [
  {
    section: 'Your Section',
    items: [
      { name: 'Your Page', href: '/docs/your-page' },
    ],
  },
]
```

## 🎯 Tailwind CSS

The project uses Tailwind CSS for styling. Customize colors and styles in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',
      dark: '#1a1a1a',
      light: '#f9fafb',
    },
  },
}
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

#### Vercel Deployment
```bash
npm i -g vercel
vercel
```

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Aurora Play Console](https://console.aurora-play.com)

## 📝 Content Guidelines

- Keep explanations clear and concise
- Use code examples for technical content
- Include "Tips" and "Best Practices" boxes
- Link to related documentation
- Use proper heading hierarchy (h1 → h2 → h3)

## 🐛 Issues & Support

For issues or suggestions, please contact the development team.

## 📄 License

All documentation content is proprietary to Aurora Play.

---

**Last Updated**: April 2026
