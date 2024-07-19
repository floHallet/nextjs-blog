import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  try {
    //Get IP Address
    const forwarded = request.headers["x-forwarded-for"];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    //Get Page
    const page = request.query.page || "testing";
    //Get actual time
    const visit_date = new Date().toISOString();

    await sql`INSERT INTO Visitors (Visit_Date, Page, Ip) VALUES (${visit_date}, ${page}, ${ip});`;
  } catch (error) {
    return response.status(500).json({ error });
  }

  //const visitors = await sql`SELECT * FROM Visitors;`;
  return response.status(200).json('Visitor added with success!');
}