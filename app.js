import express from 'express';
import router from "./routes/route.js";
import morgan from 'morgan';
import cors from 'cors'; 
import compression from 'compression';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());
app.use(compression());
app.use(morgan('tiny'));

app.use('/', router);

app.listen(PORT, () => {
    // FIXME: add google logging
    console.log(`Server has been started at: ${PORT}`);
});