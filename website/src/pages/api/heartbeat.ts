export const GET = async () => {
  return new Response(JSON.stringify({ message: `API is okay` }), { status: 200 })
}