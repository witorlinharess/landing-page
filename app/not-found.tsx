import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="page-root not-found-root">
      <div className="card">
        <h1>404 | Página não encontrada</h1>
        <p className="projects-sub">A página que você procura não existe ou foi removida.</p>
        <div className="project-actions">
          <Link href="/" className="btn" aria-label="Voltar para a página inicial">Voltar para a página inicial</Link>
        </div>
      </div>
    </main>
  )
}
