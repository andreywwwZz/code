import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token') || 'SHIBA';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0b0b0b',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          fontSize: 80,
          fontWeight: 800,
        }}
      >
        <div style={{ fontSize: 28, color: '#888' }}>
          Trade memecoins
        </div>

        <div style={{ marginTop: 20 }}>
          {token}
        </div>

        <div style={{ marginTop: 30, fontSize: 32, color: '#aaa' }}>
          copyflow.trade
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
