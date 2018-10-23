import {PathParams} from "express-serve-static-core";
import {Request, RequestHandler, Response} from "express";

interface ApiRoute {
  path: PathParams,
  handler: RequestHandler
}

export const getRoutes: ApiRoute[] = [
  {path: "/", handler: (req: Request, res: Response) => res.send({message: 'it works!'})},
  {path: "/foo/:bar", handler: (req: Request, res: Response) => res.send({message: req.params.bar})},
];

export const postRoutes: ApiRoute[] = [
  // none yet
];
