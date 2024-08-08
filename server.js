const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => res.send({msg:'Hello World!'}))
app.get('/edit', (req, res) => res.send({msg:'Edit api!'}))
app.listen(3000, () => console.log('Server ready'))


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