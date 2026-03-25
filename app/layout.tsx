import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "SMART-OS — Le système d'exploitation de votre réussite",
  description: "SMART-OS conçoit des outils, pages web et automatisations 100% sur-mesure pour les entreprises B2B. Pas de template. Uniquement des solutions pensées pour vos vrais besoins.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
