//     /server    npm run devStart

const express = require ('express')
const cors = require ('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express ()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('select * from v1')
    
    if (!result) result=[]
    res.status(200).json(result)
  } catch(err) {
    //  res.status(200).send('Tietokanta toimii')
    res.status(500).json({error: err.message})
  }
})

app.listen(port)