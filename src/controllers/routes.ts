import express, { Request, Response, Router } from 'express';
import { routes as studentRoutes } from './student.controller';

export type handler = (req: Request, res: Response) => void;

interface IRoutes {
  http: string;
  path: string;
  handler: handler;
}

let routes: IRoutes[] = [
  {
    http: 'get',
    path: '/dictionary',
    handler: (req: Request, res: Response) => {
      res.send(`This is a dictionary method`);
    },
  },
  ...studentRoutes,
];

let router: Router = express.Router();

routes.forEach((route) => {
  (router as any)[route.http](route.path, route.handler);
});

export default router;
