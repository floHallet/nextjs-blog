import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    //const id = Math.floor(Math.random()*1000).toString();
    const forwarded = request.headers["x-forwarded-for"];
    const id = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    const page = "testing";
    const visit = new Date();
    await sql`INSERT INTO Visitors (Id, Page, Visit) VALUES (${id}, ${page}, ${visit});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  //const visitors = await sql`SELECT * FROM Visitors;`;
  return response.status(200).json('Success!');
}