import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    //const petName = request.query.petName;
    //const ownerName = request.query.ownerName;
    //if (!petName || !ownerName) throw new Error('Pet and owner names required');
    const id = Math.floor(Math.random()*1000);
    const page = "testing";
    const visit = new Date().toISOString();
    await sql`INSERT INTO (id, page, visit) visitors VALUES (${id}, ${page}, ${visit});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const visitors = await sql`SELECT * FROM visitors;`;
  return response.status(200).json({ visitors });
}