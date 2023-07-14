import React from 'https://esm.sh/react@18.2.0';
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts';

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);

  // primary info
  const title = searchParams.get('title') as string | null;
  const description = searchParams.get('desc') as string | null;

  const OGImageComponent = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          color: 'white',
          height: '100vh',
          width: '100%',
          background:
            'radial-gradient(circle at 600px 1250px, rgb(80, 81, 79), rgb(18, 18, 16), rgb(37, 37, 33))',
          padding: '32px',
        }}
      >
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '32px',
          }}
        >
          <img
            style={{ borderRadius: '100%' }}
            src="https://avatars.githubusercontent.com/u/7844994?v=4"
            width="92px"
            height="92px"
          />
          <p style={{margin: '0px 16px 0px 16px'}}>Mykal Machon</p>
        </header>
        <main style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{
              fontSize: '72px',
              textOverflow: 'ellipsis',
              fontWeight: 'bold',
            }}
          >
            {title ? title : "Mykal Machon's Digital Garden"}
          </h1>
          <p
            style={{
              fontSize: '48px',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description ? description : 'A collection of my thoughts and ideas.'}
          </p>
        </main>
      </div>
    )
  }

  return await new ImageResponse(
    (
      <OGImageComponent />
    )
  );
}
