import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false
  }
};

async function post(_req: NextApiRequest, res: NextApiResponse) {
  return res.json([]);
}


export default function router(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'POST':
      return post(req, res);
    default:
      return res.status(405).send(null);
  }
}
