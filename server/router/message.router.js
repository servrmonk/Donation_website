const express = require("express");
const { postMessage } = require("../controllers/messege.controller");
// import { postMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", postMessage);

module.exports = router
