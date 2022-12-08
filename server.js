// import { express } from "express";
import express from "express"
import testRoute from './routes/test.js'
import FileUpload from "express-fileupload";

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(FileUpload())
app.use(testRoute);



app.listen(3000, () => {
  console.log(`Server started on port`);
});
