import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { DynamoDB } from 'aws-sdk';

const client = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const now = new Date().toISOString();

  const project = {
    id: uuid(),
    title: 'Untitled Project',
    elements: [],
    createdAt: now,
    updatedAt: now
  };

  const params = {
    TableName: 'projects',
    Item: project
  };

  await client.put(params).promise();

  return res.status(200).json(project);
}
