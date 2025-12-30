import { FaLinkedin, FaInstagram, FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { SiCloudflare, SiGoogle } from 'react-icons/si'
import { FaCheckCircle } from 'react-icons/fa'
import { colors } from '../lib/colors'

export default function Footer(){
  const footerStyle: React.CSSProperties = { background: colors.background, color: colors.text, padding: '20px 0' }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  const topRow: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }

  const leftCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 }
  const titleStyle: React.CSSProperties = { fontSize: 14, color: colors.textSecondary }
  // stack social icons vertically
  const iconsRow: React.CSSProperties = { display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center' }

  const iconBox = (bg: string | undefined): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 10,
    background: colors.purple,
    color: colors.white,
    textDecoration: 'none',
    transition: 'transform 120ms ease, box-shadow 160ms ease'
  })

  const rightCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }
  const verifiedRow: React.CSSProperties = { display: 'flex', gap: 10, alignItems: 'center', color: colors.textSecondary }
  const bottomRow: React.CSSProperties = { borderTop: `1px solid ${colors.line}`, marginTop: 18, paddingTop: 16, textAlign: 'center', color: colors.textSecondary, fontSize: 13 }

  return (
    <footer style={footerStyle} aria-label="Footer">
      <div style={innerStyle}>
        <div style={topRow}>
          <div style={leftCol}>
            <div style={titleStyle}>Conecte-se comigo</div>
            <div style={iconsRow}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={iconBox(colors.background)}>
                <FaLinkedin size={18} />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconBox(colors.background)}>
                <FaInstagram size={18} />
              </a>

              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={iconBox(colors.background)}>
                <FaGithub size={18} />
              </a>

              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord" style={iconBox(colors.background)}>
                <FaDiscord size={18} />
              </a>

              <a href="mailto:witorlinhares@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" style={iconBox(colors.background)}>
                <FaEnvelope size={18} />
              </a>



            </div>
          </div>

          <div style={rightCol}>
            <div style={verifiedRow}>
              <div>Protegido por <SiCloudflare size={18} style={{ marginLeft: 4, color: colors.textSecondary }} aria-hidden /></div>
            </div>

          </div>
        </div>

        <div style={bottomRow}>© {new Date().getFullYear()} Witor Linhares. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}