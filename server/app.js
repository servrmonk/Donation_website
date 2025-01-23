const express = require("express");
const dbConnection = require("./connection/dbconfig");
const cors = require("cors");
const messageRouter = require("./router/message.router")
const checkoutRouter = require('./router/checkout.router');

const app = express();

app.use(
  
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message",messageRouter)
app.use("/api/v1",checkoutRouter)

dbConnection();

module.exports = app;
