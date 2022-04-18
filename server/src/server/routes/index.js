const express = require('express');
const cors=require('cors');
const brandRouter=require("./brandRouter");
const deviceRouter=require("./deviceRouter");
const typeRouter=require("./typeRouter");
const userRouter=require("./userRouter");
const basketRouter = require('./basketRouter')
const fileUpload=require('express-fileupload');
const { errorHandler} = require('../middlewares');
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'..','static')))
app.use(fileUpload({}));

app.use("/user",userRouter)
app.use("/type",typeRouter)
app.use("/brand",brandRouter)
app.use("/device",deviceRouter)
app.use('/basket',basketRouter)

app.use((req, res) => res.status(404)
  .send({error: `Page not found ${req.path}`}));
app.use(errorHandler);

module.exports = app;


