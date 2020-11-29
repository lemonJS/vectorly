import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDB } from 'aws-sdk';

const client = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

async function getProject(id) {
  const params = {
    TableName: 'projects',
    Key: { id }
  };

  const { Item } = await client.get(params).promise();
  return Item;
}

async function updateProject(id, update) {
  const params = {
    TableName: 'projects',
    Key: { id },
    UpdateExpression: 'set ',
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {}
  };

  for (const [key, value] of Object.entries(update)) {
    params.UpdateExpression += `#${key} = :${key}, `;
    params.ExpressionAttributeNames[`#${key}`] = key;
    params.ExpressionAttributeValues[`:${key}`] = value;
  }

  params.UpdateExpression = params.UpdateExpression.replace(/, $/, '');
  await client.update(params).promise();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!['GET', 'PUT'].includes(req.method)) {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (req.method === 'PUT') {
    const payload = {
      title: req.body.title,
      elements: req.body.elements,
      updatedAt: new Date().toISOString()
    }
    await updateProject(id, payload);
  }

  const project = await getProject(id);

  return project
    ? res.status(200).json(project)
    : res.status(404).json({ error: 'Project not found' });
}
