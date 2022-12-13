import express from "express"
import UserRoute from './routes/UserRoute.js'
import RolesRoute from './routes/RolesRoute.js'
import FileUpload from "express-fileupload";

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(FileUpload())

app.use(RolesRoute) //Role Route
app.use(UserRoute) //User Route



app.listen(3000, () => {
  console.log(`Server started on port`);
});
