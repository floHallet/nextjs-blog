import { kv } from '@vercel/kv';
 
export default async function handler(request, response) {
  const counter = await kv.get('counter:portfolio');
  await kv.incr('counter:portfolio');
  return response.status(200).send(counter);
}