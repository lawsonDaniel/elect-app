import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unijos Elect/Elect',
  description: 'University of jos electrical electronics engineering ineractive web app ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body className={inter.className}>
       
        {children}
        </body>
    </html>
  )
}
