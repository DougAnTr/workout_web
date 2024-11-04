import express from 'express';
import { container } from 'tsyringe';
import { AuthController } from '../../modules/auth/Auth.controler';

const router = express.Router();
const authController = container.resolve(AuthController);

router.post('/signup', authController.signup);

export default router;
