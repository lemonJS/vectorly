import type { NextApiRequest, NextApiResponse } from 'next';
import { DynamoDB } from 'aws-sdk';
import { pick } from 'lodash';

const dynamo = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

async function get(req: NextApiRequest, res: NextApiResponse) {
  const params = {
    TableName: 'projects',
    Key: { id: req.query.project_id }
  };

  const { Item } = await dynamo.get(params).promise();

  return Item
    ? res.json(Item)
    : res.status(404).json({ 'error': 'Project not found' });
}

async function update(req: NextApiRequest, res: NextApiResponse) {
  const payload = {
    ...pick(req.body, ['title', 'elements']),
    updatedAt: new Date().toISOString()
  };

  const params = {
    TableName: 'projects',
    Key: { id: req.query.project_id },
    UpdateExpression: 'set ',
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {}
  };

  for (const [key, value] of Object.entries(payload)) {
    params.UpdateExpression += `#${key} = :${key}, `;
    params.ExpressionAttributeNames[`#${key}`] = key;
    params.ExpressionAttributeValues[`:${key}`] = value;
  }

  params.UpdateExpression = params.UpdateExpression.replace(/, $/, '');
  await dynamo.update(params).promise();

  return get(req, res);
}


export default function router(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'GET':
      return get(req, res);
    case 'PUT':
      return update(req, res);
    default:
      return res.status(405).send(null);
  }
}
