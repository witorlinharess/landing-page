import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import { colors } from '../lib/colors'

export default function Index() {
  const pageStyle: React.CSSProperties = { minHeight: '100vh', background: colors.background, color: colors.text }
  const mainStyle: React.CSSProperties = { paddingTop: 120, paddingBottom: 140 } // leave space for fixed header and footer

  return (
    <div style={pageStyle}>
      <Header />

      <main style={mainStyle}>
        <Hero />
        {/* short footer below the hero */}
        <Footer />
      </main>
    </div>
  )
}
