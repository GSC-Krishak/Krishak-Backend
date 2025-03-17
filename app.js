import express from 'express';
import router from "./routes/route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

//TODO: Add morgan middleware
app.use('/',router);


app.listen(PORT, ()=>{
    //FIXME: add google logging
    console.log(`Server has been started at http://localhost:${PORT}`)
})