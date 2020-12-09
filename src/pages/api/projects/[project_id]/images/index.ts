import sharp from 'sharp';
import { S3, DynamoDB } from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import { Fields, Files, File, IncomingForm } from 'formidable'
import { NextApiRequest, NextApiResponse } from 'next';
import { Image } from '@type/project';

const s3 = new S3({ region: 'eu-west-1' });
const dynamo = new DynamoDB.DocumentClient({ region: 'eu-west-1' });

export const config = {
  api: {
    bodyParser: false
  }
};

async function uploadImage(id: string, file: File) {
  const imageId = uuid();
  const image = sharp(file.path)
  const meta = await image.metadata();

  const payload: Image = {
    id: imageId,
    height: meta.height,
    name: file.name,
    url: `https://images.hackerstash.com/${id}/${imageId}`, // TODO
    width: meta.width
  };

  const params = {
    Bucket: 'images.hackerstash.com', // TODO
    Key: `${id}/${payload.id}`,
    Body: await image.toBuffer()
  };

  await s3.putObject(params).promise();
  return payload;
}

async function updateProject(id: string, images: Image[]) {
  const now = new Date().toISOString();

  const params = {
    TableName: 'projects',
    Key: { id },
    UpdateExpression: 'SET #images = list_append(#images, :list), #updatedAt = :updatedAt',
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
  return getProject(id);
}

async function getProject(id: string) {
  const params = {
    TableName: 'projects',
    Key: { id }
  };

  const { Item } = await dynamo.get(params).promise();
  return Item;
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const { project_id } = req.query;
  const form = new IncomingForm();

  form.multiples = true;

  form.parse(req, async (_error: Error, _fields: Fields, files: Files) => {
    const list = Object.values(files);
    const images = await Promise.all(list.map(file => uploadImage(project_id as string, file)));
    const project = await updateProject(project_id as string, images);

    return res.json(project);
  });
}


export default function router(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'POST':
      return post(req, res);
    default:
      return res.status(405).send(null);
  }
}
