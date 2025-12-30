import { colors } from '../lib/colors'

export default function Hero(){
  const sectionStyle: React.CSSProperties = { background: colors.background, minHeight: '100vh', display: 'flex', alignItems: 'flex-start', color: colors.text }
  const innerStyle: React.CSSProperties = { maxWidth: 1320, margin: '0 auto', paddingLeft: 48, paddingRight: 48 }
  const titleStyle: React.CSSProperties = {
    fontWeight: 300,
    fontSize: 'clamp(40px, 14vw, 100px)',
    lineHeight: 1,
    marginTop: 120,

    // metallic gradient text
    background: 'linear-gradient(90deg, #e6e8eb 0%, #c9c9c9 20%, #ffffff 50%, #b6b6b6 80%, #7f7f7f 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    textShadow: '0 1px 0 rgba(255,255,255,0.06)'
  }

  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>

        <h1 style={titleStyle}>
          Olá, me chamo Witor, sou desenvolvedor full stack. Veja meus projetos abaixo:
        </h1>

      </div>
    </section>
  )
}
