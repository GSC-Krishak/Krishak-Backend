import express from 'express';
import routes from "./routes/route.js";

const app = express();
const PORT = 3000;

routes.use(express.json());

//TODO: Add morgan middleware
app.use('/',routes);


app.listen(PORT, ()=>{
    //FIXME: add google logging
    console.log(`Server has been started at http://localhost:${PORT}`)
})