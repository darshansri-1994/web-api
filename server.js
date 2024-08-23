const express = require('express')
const app = express()
const cors = require('cors')
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors())
app.get('/', (req, res) => res.send({msg:'Hello World!'}))
app.get('/edit', (req, res) => res.send({msg:'Edit api!'}))
const db = require('./config/db.config.js');
db.sequelize.sync({ force: false }).then(() => {
    console.log('Drop and Resync with { force: true }');
  });

const Person = db.perosns;
app.get('/persons', (req, res) => {
    Person.findAll({},{id:0})
      .then(persons => {
          res.status(200).send({
            status: "success",
            message: "success",
            data: persons
          })
      })
      .catch(err => {
        res.send(err)
      })


})

app.listen(3000, () => console.log('Server ready'));


  login = (req, res) => {


    console.log(" inside login method")

  }

/// dependencies install -> npm install
/// build the code -> npm run build 
// move the build file to EC2
// created web server (apache2) in EC2
// move the build file to apache server
// configure the apache by updating build file path
// restart the apache server


// move node api code tp git
// create ec2 instance
// move node api code to ec2
// install nodejs (app server)
// install dependencies of node api -> npm install
// start server -> npm start


