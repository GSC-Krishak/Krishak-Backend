import express from 'express';
import router from "./routes/route.js";
import morgan from 'morgan';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('tiny'))

app.use('/',router);


app.listen(PORT, ()=>{
    //FIXME: add google logging
    console.log(`Server has been started at http://localhost:${PORT}`)
})