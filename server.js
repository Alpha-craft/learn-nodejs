// import { express } from "express";
import express from "express"
import testRoute from './routes/test.js'

const app = express()


app.use(express.json());
app.use(testRoute);



app.listen(3000, () => {
  console.log(`Server started on port`);
});
