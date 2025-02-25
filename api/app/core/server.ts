import app from './app';
import env from './env';
import './routes';

const port = env.PORT;

const start = () => {
  app.listen(port, () => {
    console.info(`🚀 Server running on port: ${port}`);
  });
};

export default { start };
