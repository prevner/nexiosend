let express = require('express')
let app = express()
let bodyParser = require('body-parser')

var corsOptions = {
    origin: "http://localhost:8080"
  };

/*Middleware*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


  
  app.use(cors(corsOptions));

app.listen(8080)