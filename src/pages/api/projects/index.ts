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
  //
  // const now = new Date();
  //
  // const project = {
  //   id: '234234234',
  //   title: 'Hello world',
  //   elements: [
  //     {
  //       id: 'sdfsdfd',
  //       element: 'text',
  //       rotate: 0,
  //       transform: [50, 50],
  //       props: {
  //         color: 'black',
  //         fontSize: 24,
  //         alignmentBaseline: 'hanging',
  //         dominantBaseline: 'hanging'
  //       },
  //       children: 'Hello world'
  //     },
  //     {
  //       id: '3423423',
  //       element: 'circle',
  //       rotate: 0,
  //       transform: [100, 100],
  //       props: {
  //         cx: 100,
  //         cy: 100,
  //         r: 100,
  //         fill: 'red',
  //         stroke: 'blue',
  //         strokeWidth: 5
  //       }
  //     },
  //     {
  //       id: '34534345',
  //       element: 'rect',
  //       rotate: 0,
  //       transform: [50, 400],
  //       props: {
  //         width: 300,
  //         height: 100,
  //         stroke: 'green',
  //         strokeDasharray: 5,
  //         fill: 'white'
  //       }
  //     }
  //   ],
  //   createdAt: now.toISOString(),
  //   updatedAt: now.toISOString()
  // };
  //
  // res.status(200).json(project);
}
