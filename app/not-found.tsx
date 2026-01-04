'use client';

import Link from 'next/link'
import { colors } from '../lib/colors'

export default function NotFound() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: colors.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  }

  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: 600,
  }

  const titleStyle: React.CSSProperties = {
    fontSize: 'clamp(48px, 8vw, 120px)',
    fontWeight: 300,
    color: colors.text,
    margin: '0 0 16px',
    letterSpacing: '-2px',
  }

  const subtitleStyle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 300,
    color: colors.text,
    margin: '0 0 16px',
    letterSpacing: '-0.5px',
  }

  const descStyle: React.CSSProperties = {
    fontSize: 16,
    color: colors.textSecondary,
    margin: '0 0 40px',
    lineHeight: 1.6,
  }

  const buttonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '12px 32px',
    background: colors.text,
    color: colors.background,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: '0.3px',
    transition: 'opacity 0.2s ease',
  }

  return (
    <>
      <main style={pageStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle}>404</h1>
          <h2 style={subtitleStyle}>Página não encontrada</h2>
          <p style={descStyle}>
            A página que você procura não existe ou foi removida.
          </p>
          <Link href="/" style={buttonStyle} className="btn404">
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      
      <style jsx>{`
        .btn404:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
