const express = require('express');
const cors = require('cors')


const app = express();


var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))



app.listen(8000, () => {
    console.log('Server started!');
  });