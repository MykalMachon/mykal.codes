import type { APIContext } from 'astro';

export const GET = async ({ site }: APIContext) => {
  return new Response(JSON.stringify({ "message": `hello world from ${site}` }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*', // enable other clients to grab the data
    }
  });
}