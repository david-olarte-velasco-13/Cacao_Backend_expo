import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';
import registroRoutes from './routes/registro.routes';


const app = express()

app.set('port', config.PORT || 4000);

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: false}));


app.use(registroRoutes);

export default app;