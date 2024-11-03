import app from './app';
import env from './env';
import './routes';

const port = 4000;
const port = env.PORT;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
