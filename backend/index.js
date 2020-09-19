const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var fs = require("fs")
var bodyParser = require('body-parser')
app.use(cors(),bodyParser.json())

app.post('/api/address',  (req, res) => {
    const path = process.cwd()
    const data = req.body
    const fileData = JSON.stringify(data)
    console.log(fileData)
    fs.appendFile(`${path}\address.txt`, fileData, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    res.send({message:"saved successfully"}).status(200)
 
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})