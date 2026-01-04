import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | Witor Linhares',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
