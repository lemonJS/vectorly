import type { NextApiRequest, NextApiResponse } from 'next';
import type { Project } from '../../../types/project';
import { DynamoDB } from 'aws-sdk';
import { v4 as uuid } from 'uuid';

const dynamo = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

async function get(_req: NextApiRequest, res: NextApiResponse) {
  const params = {
    TableName: 'projects'
  };

  const { Items } = await dynamo.scan(params).promise();
  return res.json(Items);
}

async function post(_req: NextApiRequest, res: NextApiResponse) {
  const now = new Date().toISOString();

  const project: Project = {
    id: uuid(),
    title: 'Untitled Project',
    elements: [],
    images: [],
    createdAt: now,
    updatedAt: now
  };

  const params = {
    TableName: 'projects',
    Item: project
  };

  await dynamo.put(params).promise();

  return res.json(project);
}


export default function router(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'GET':
      return get(req, res);
    case 'POST':
      return post(req, res);
    default:
      return res.status(405).send(null);
  }
}
