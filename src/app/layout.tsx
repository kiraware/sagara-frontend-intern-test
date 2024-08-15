import { inter } from '@/app/ui/fonts'
import '@/app/ui/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sagara Tech',
  description: 'Frontend Intern Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
