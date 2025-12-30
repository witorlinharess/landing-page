import Header from '../../components/Header'
import Projects from '../../components/Projects'
import { colors } from '../../lib/colors'

export const metadata = {
  title: 'Projetos – Witor Linhares',
}

export default function ProjetosPage(){
  const pageStyle: React.CSSProperties = { minHeight: '70vh', background: colors.background, color: colors.text }
  const mainStyle: React.CSSProperties = { paddingTop: 140, paddingBottom: 60 }

  return (
    <div style={pageStyle}>
      <Header />

      <main style={mainStyle}>
        <Projects count={3} />
      </main>
    </div>
  )
}
