import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = new Date();

  const project = {
    id: '234234234',
    title: 'Hello world',
    elements: [
      {
        id: 'sdfsdfd',
        element: 'text',
        transform: [50, 50],
        props: {
          color: 'black',
          fontSize: 24,
          alignmentBaseline: 'hanging',
          dominantBaseline: 'hanging'
        },
        children: 'Hello world'
      },
      {
        id: '3423423',
        element: 'circle',
        transform: [100, 100],
        props: {
          cx: 100,
          cy: 100,
          r: 100,
          fill: 'red',
          stroke: 'blue',
          strokeWidth: 5
        }
      },
      {
        id: '34534345',
        element: 'rect',
        transform: [50, 400],
        props: {
          width: 300,
          height: 100,
          stroke: 'green',
          strokeDasharray: 5,
          fill: 'white'
        }
      }
    ],
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  };

  res.status(200).json(project);
}
