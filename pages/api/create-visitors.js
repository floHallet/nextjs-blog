import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE Visitors ( Id varchar(100), Page varchar(100), Visit date);`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}