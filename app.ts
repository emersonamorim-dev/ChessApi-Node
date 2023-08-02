import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import gameRoutes from './src/routes/gameRoutes';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/game', gameRoutes);

app.listen(3000, () => console.log('Server listening on port 3000'));
