import mongoose from 'mongoose';
import env from './env';

const connect = async () => {
  await mongoose.connect(env.DATABASE_URL).catch(error => {
    console.error('❌ Could not connect to database');
    throw new Error(error);
  });
  console.info('✅ Database connected');
};

export default { connect };
