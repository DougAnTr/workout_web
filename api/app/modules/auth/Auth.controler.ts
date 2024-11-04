import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { container } from 'tsyringe';
import env from '../../core/env';
import { SignupService } from './services/Signup.service';

export class AuthController {
  async signup(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).json({ error: 'Request body is required' }).send();
    }

    const { data, error } = await container
      .resolve(SignupService)
      .execute(req.body);

    if (error) {
      res.status(400).json({ error }).send();
    }

    if (!data) {
      res.status(500).json({ error: 'Something went wrong' }).send();
      return;
    }

    const token = sign({ id: data._id, email: data.email }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    });

    res.cookie(env.AUTH_COOKIE_NAME, token, {
      httpOnly: env.AUTH_COOKIE_HTTP_ONLY,
      secure: env.AUTH_COOKIE_SECURE,
      sameSite: env.AUTH_COOKIE_SAME_SITE,
    });

    res.status(201).json({ data }).send();
  }
}
