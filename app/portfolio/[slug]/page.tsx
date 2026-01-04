'use client';

import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { colors } from '../../../lib/colors'
import { PROJECTS_DETAIL } from '../../../lib/projects-data'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { notFound } from 'next/navigation'
import { use } from 'react'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = PROJECTS_DETAIL.find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const wrapperStyle: React.CSSProperties = { 
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh', 
    background: colors.background 
  }
  
  const containerStyle: React.CSSProperties = { 
    flex: 1, 
    maxWidth: 1200, 
    margin: '0 auto', 
    padding: '160px 48px 180px' 
  }

  const headerStyle: React.CSSProperties = {
    marginBottom: 80,
  }

  const titleStyle: React.CSSProperties = { 
    color: colors.text, 
    fontSize: 'clamp(32px, 5vw, 56px)', 
    fontWeight: 300, 
    margin: '0 0 16px',
    letterSpacing: '-1px',
    lineHeight: 1.2,
  }

  const metaStyle: React.CSSProperties = {
    display: 'flex',
    gap: 32,
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 32,
  }

  const descStyle: React.CSSProperties = {
    fontSize: 18,
    color: colors.textSecondary,
    lineHeight: 1.7,
    margin: 0,
  }

  const imageWrapperStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    marginBottom: 80,
    overflow: 'hidden',
    background: colors.card,
  }

  const sectionStyle: React.CSSProperties = {
    marginBottom: 64,
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 300,
    color: colors.text,
    marginBottom: 24,
    letterSpacing: '-0.5px',
  }

  const textStyle: React.CSSProperties = {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 1.8,
    marginBottom: 24,
  }

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  }

  const listItemStyle: React.CSSProperties = {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 1.8,
    marginBottom: 16,
    paddingLeft: 24,
    position: 'relative',
  }

  const tagContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  }

  const tagStyle: React.CSSProperties = {
    padding: '8px 16px',
    background: colors.card,
    border: `1px solid ${colors.border}`,
    fontSize: 14,
    color: colors.text,
    borderRadius: 4,
  }

  const ctaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 40,
    padding: '12px 32px',
    background: colors.text,
    color: colors.background,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: '0.3px',
    transition: 'opacity 0.2s ease',
  }

  const backLinkStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 40,
    color: colors.textSecondary,
    textDecoration: 'none',
    fontSize: 14,
    transition: 'opacity 0.2s ease',
  }

  const backLinkHoverClass = 'backLinkHover'
  const ctaHoverClass = 'projectCtaHover'

  return (
    <>
      <div style={wrapperStyle}>
        <Header />

        <main style={containerStyle} className="projectMain">
          <Link href="/portfolio" style={backLinkStyle} className="backLink">
            <HiArrowLeft size={16} />
            Voltar para portfólio
          </Link>

          <header style={headerStyle}>
            <h1 style={titleStyle}>{project.title}</h1>
            
            <div style={metaStyle} className="projectMeta">
              <span><strong>Cliente:</strong> {project.client}</span>
              <span><strong>Ano:</strong> {project.year}</span>
            </div>

            <p style={descStyle}>{project.description}</p>
          </header>

          <div style={imageWrapperStyle}>
            <Image 
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              quality={95}
            />
          </div>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>O Desafio</h2>
            <p style={textStyle}>{project.problem}</p>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>A Solução</h2>
            <p style={textStyle}>{project.solution}</p>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Desafios Técnicos</h2>
            <ul style={listStyle}>
              {project.challenges.map((challenge, i) => (
                <li key={i} style={listItemStyle}>
                  <span style={{ position: 'absolute', left: 0 }}>•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Resultados</h2>
            <ul style={listStyle}>
              {project.results.map((result, i) => (
                <li key={i} style={listItemStyle}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={ctaStyle}
            className="projectCta"
          >
            Visitar site
            <HiArrowRight size={16} />
          </a>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .backLink:hover {
          opacity: 0.6;
        }

        .projectCta:hover {
          opacity: 0.7;
        }

        @media (max-width: 767px) {
          .projectMain {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 120px !important;
          }
          .projectMeta {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </>
  )
}
