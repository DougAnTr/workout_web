import app from '../app';
import auth from './auth';
import users from './users';

app.use('/auth', auth);
app.use('/users', users);
