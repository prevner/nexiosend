let express = require('express')
let app = express()
let bodyParser = require('body-parser');
let Projet = require('./models/projet');

/* var corsOptions = {
    origin: "http://localhost:8080"
  }; */

/*Middleware*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())  
/* app.use(cors(corsOptions)); */

app.get('/allprojects',(req,res)=>{
  
   
   Projet.getAll(function(projet){
      res.send({ProjectList:projet})
   })
})

 app.post('/validation/:numproj',(req,res)=>{
    console.log(req.params.numproj)
      Projet.validation(req.params.numproj,function(){
          res.status(200)
     })
  
})

/* app.get('/nexiosend/all',(req,res)=>{
  
}) */

app.listen(8080)