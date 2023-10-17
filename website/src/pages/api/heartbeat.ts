export async function get() {
  return new Response(JSON.stringify({ message: `API is okay` }), { status: 200 })
}