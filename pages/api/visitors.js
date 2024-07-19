import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    //const petName = request.query.petName;
    //const ownerName = request.query.ownerName;
    //if (!petName || !ownerName) throw new Error('Pet and owner names required');
    const id = Math.random()*1000;
    const page = "testing";
    await sql`INSERT INTO (id, page) visitors VALUES (${id}, ${page});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const visitors = await sql`SELECT * FROM visitors;`;
  return response.status(200).json({ visitors });
}