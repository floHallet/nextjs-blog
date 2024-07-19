import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE Visitors ( Visit_Date timestamp, Page varchar(255), Ip varchar(50) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}