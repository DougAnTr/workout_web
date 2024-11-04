import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router;
