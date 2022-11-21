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
    const [result,] = await connection.execute('SELECT * from v1')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.post("/new",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    //Execute prepared statement
    const [result,] = await connection.execute('INSERT INTO v1 (year, annualy, lowtemp, hightemp) VALUES (?, ?, ?, ?)',
    [req.body.year, req.body.annualy, req.body.lowtemp, req.body.hightemp]);
    res.status(200).json({id:result.insertId})
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.delete("/delete/:id",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    //Execute prepared statement
    await connection.execute('DELETE FROM v1 WHERE id = ?',[req.params.id])
    res.status(200).json({id:req.params.id})
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.listen(port)