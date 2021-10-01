import * as service from './../services/student.service';
import { Request, Response } from 'express';

export type handler = (req: Request, res: Response) => void;

interface IRoutes {
  http: string;
  path: string;
  handler: handler;
}

const collection = service.studentDocument;

const studentGetHandler = async (req: Request, res: Response) => {
  const data = await service.getAll(collection);
  res.send({ success: true, data });
};

const studentSaveHandler = async (req: Request, res: Response) => {
  console.log(req.body);
  const savedStudent = await service.save(collection, req.body);
  res.send(savedStudent);
};

export let routes: IRoutes[] = [
  {
    http: 'get',
    path: '/student',
    handler: studentGetHandler,
  },
  {
    http: 'post',
    path: '/student',
    handler: studentSaveHandler,
  },
];
