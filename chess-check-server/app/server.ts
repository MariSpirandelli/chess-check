import express = require('express');
import cors = require("cors");

const knightRoute = require('./src/routes/knightRoute');


const app: express.Application = express();
const API_URL = "http://localhost:4200";

//get router
var router = express.Router();

//options for cors midddleware
const options:cors.CorsOptions = {
  allowedHeaders: ["Access-Control-Allow-Origin","Access-Control-Allow-Headers","Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "*"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: API_URL,
  preflightContinue: false
};

//use cors middleware
router.use(cors(options));

//enable pre-flight
router.options("*", cors(options));

app.use('/api/knight', cors(options), knightRoute);

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(3000, () => {
    console.log('Server started!');
  });

  