import cookieParser from 'cookie-parser';
import express from 'express';
import env from './env';

const app = express();

app.use(express.json());
app.use(cookieParser(env.JWT_SECRET));

export default app;
