import type { NextApiRequest, NextApiResponse } from 'next';
import type { Project } from '../../../../../../types/project';
import { S3, DynamoDB } from 'aws-sdk';

const s3 = new S3({ region: 'eu-west-1' });
const dynamo = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

async function deleteImage(projectId: string, imageId: string) {
  const params = {
    Bucket: 'images.hackerstash.com', // TODO
    Key: `${projectId}/${imageId}`
  };

  await s3.deleteObject(params).promise();
}

async function getProject(projectId: string): Promise<Project> {
  const params = {
    TableName: 'projects',
    Key: { id: projectId }
  };

  const { Item } = await dynamo.get(params).promise();
  return Item as Project;
}

async function updateProject(projectId: string, imageId: string) {
  const now = new Date().toISOString();

  const project = await getProject(projectId);
  const images = project.images.filter(image => image.id !== imageId);

  const params = {
    TableName: 'projects',
    Key: { id: projectId },
    UpdateExpression: 'SET #images = :list, #updatedAt = :updatedAt',
    ExpressionAttributeNames: {
      '#images': 'images',
      '#updatedAt': 'updatedAt'
    },
    ExpressionAttributeValues: {
      ':list': images,
      ':updatedAt': now
    }
  };

  await dynamo.update(params).promise();
  return Object.assign({}, project, { images });
}

async function remove(req: NextApiRequest, res: NextApiResponse) {
  const { project_id, image_id } = req.query;

  const [project] = await Promise.all([
    updateProject(project_id as string, image_id as string),
    deleteImage(project_id as string, image_id as string)
  ]);

  return res.json(project);
}

export default function router(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'DELETE':
      return remove(req, res);
    default:
      return res.status(405).send(null);
  }
}
