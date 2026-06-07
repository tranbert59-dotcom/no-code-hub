import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bertrand Cabanes — Product Builder · NO-CODE-HUB'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Halo décoratif */}
        <div style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.08)',
          filter: 'blur(80px)',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex',
          background: 'rgba(30, 58, 138, 0.4)',
          color: '#60a5fa',
          padding: '8px 24px',
          borderRadius: 999,
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 28,
        }}>
          Product Builder · NO-CODE-HUB
        </div>

        {/* Nom */}
        <div style={{
          color: '#ffffff',
          fontSize: 80,
          fontWeight: 800,
          marginBottom: 16,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          Bertrand Cabanes
        </div>

        {/* Tagline */}
        <div style={{
          color: '#93c5fd',
          fontSize: 26,
          fontWeight: 500,
          marginBottom: 48,
          textAlign: 'center',
          maxWidth: 780,
          lineHeight: 1.4,
        }}>
          De l&apos;ERP AS400 à l&apos;IA — je construis des outils qui tournent en production.
        </div>

        {/* Stack badges */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'Claude AI'].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(30, 41, 59, 0.9)',
                border: '1px solid rgba(71, 85, 105, 0.7)',
                color: '#94a3b8',
                padding: '10px 20px',
                borderRadius: 10,
                fontSize: 18,
                fontFamily: 'monospace',
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL en bas */}
        <div style={{
          position: 'absolute',
          bottom: 36,
          color: '#334155',
          fontSize: 20,
          letterSpacing: '0.05em',
        }}>
          no-code-hub.fr
        </div>
      </div>
    ),
    { ...size }
  )
}
