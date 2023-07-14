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
            'radial-gradient(circle at 50% -100%,#7e8282,#50514f,#252521)',
          padding: '2em',
        }}
      >
        <header
          style={{
            display: 'flex',
            gap: '1em',
            alignItems: 'center',
            fontSize: '2em',
          }}
        >
          <img
            style={{ borderRadius: '100%' }}
            src="https://avatars.githubusercontent.com/u/7844994?v=4"
            width="64px"
            height="64px"
          />
          <p>Mykal Machon</p>
          <p>https://mykal.codes/</p>
        </header>
        <main style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{
              fontSize: '4.5em',
              textOverflow: 'ellipsis',
              fontWeight: 'bold',
            }}
          >
            {title ? title : "Mykal Machon's Digital Garden"}
          </h1>
          <p
            style={{
              fontSize: '3em',
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
