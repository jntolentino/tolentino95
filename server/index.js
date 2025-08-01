import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Your API routes here
// e.g. app.use('/api/projects', projectRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));
