// OHJE:    cd server, npm run devStart

const express = require ('express')
const cors = require ('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express ()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/1",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v1monthly')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/2",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v1annually')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/3",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v2')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/4",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v3monthly')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/5",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v3annually')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/6",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v4de08')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/7",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v4de082')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/8",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v4dss')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/9",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v5')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/10",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v6')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/11",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v7')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/12",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v8')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/13",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v9sector')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/14",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v9subsector')
    if (!result) result=[] //If there is no data, return empty array
    res.status(200).json(result)
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.get("/15",async (req,res) => {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] = await connection.execute('SELECT * FROM v9subsector2')
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
    const [result,] = await connection.execute('INSERT INTO v1annually (year, annualy, lowtemp, hightemp) VALUES (?, ?, ?, ?)',
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
    await connection.execute('DELETE FROM v1annually WHERE id = ?',[req.params.id])
    res.status(200).json({id:req.params.id})
  } catch(err) {
    //Return status code 500 and a error message to client.
    res.status(500).json({error: err.message})
  }
})

app.listen(port)