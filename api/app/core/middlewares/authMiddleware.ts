import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import env from '../env';

interface UserPayload {
  id: string;
  email: string;
}

declare module 'express-serve-static-core' {
  interface Request {
    user?: UserPayload;
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const sessionToken = req.cookies[env.AUTH_COOKIE_NAME];

  if (!sessionToken) {
    res.status(401).json({ error: 'Unauthorized' }).send();
  }

  const decoded = verify(sessionToken, env.JWT_SECRET);

  if (!decoded) {
    res.status(401).json({ error: 'Unauthorized' }).send();
  }

  req.user = decoded as UserPayload;
  next();
};

export default authMiddleware;
