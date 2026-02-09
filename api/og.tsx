// @ts-nocheck
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = (searchParams.get('token') || 'TOKEN').toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0b0b0b, #1a1a1a)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontFamily: 'Arial',
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.6 }}>copyflow.trade</div>

        <div style={{ fontSize: 96, fontWeight: 900, marginTop: 20 }}>
          {token}
        </div>

        <div style={{ fontSize: 48, color: '#facc15', marginTop: 10 }}>
          Trade memecoins
        </div>

        <div style={{ fontSize: 32, marginTop: 40 }}>
          Live on Solana • 100x
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}