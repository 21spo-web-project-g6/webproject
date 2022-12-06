// OHJE:    cd server, npm run devStart, install passport passport-http, install jsonwebtoken, install passport-jwt, install uuid, install body-parser, npm install bcryptjs

const express = require ('express')
const cors = require ('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy;
const jwt = require("jsonwebtoken");
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
var bcrypt = require('bcryptjs');


const app = express ()

app.use(bodyParser.json());

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.use((req, res, next) => {
  console.log('Demo middleware executing...');

  next();
})


const users = [
  {
    id: uuidv4(),
    username: 'demouser',
    password: '123456'
  },
  {
    id: uuidv4(),
    username: 'testuser',
    password: '987654'
  }
];

passport.use(new BasicStrategy(
  function(username, password, done) {
    console.log('username: ' + username);
    console.log('password: ' + password);

    // search matching username from our user storage
    const user = users.find(u => u.username === username);

    // if match is found, compare the passwords
    if(user != null) {
      // if passwords match, then proceed to route handler (the protected resource)
      if(bcrypt.compareSync(password, user.password)) {
        done(null, user)
      } else {
        done(null, false)
      }
    } else {
      // reject request
      done(null, false);

    }
  }
));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "MyVerySecretSigningKey"
}

passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {
  console.log('JWT is valid');
  console.log('payload is as follows');
  console.log(jwt_payload);

  done(null, jwt_payload);
}))

app.get('/hello-world', (req, res) => {
  res.send('Hello world!')
})

  /*
    REQUEST BODY
    {
      "username": "foo",
      "password": "123456",
      "email": "foo@bar.com"
    }

  */

app.post('/register', (req, res) => {
  console.log(req.body);

  // create hash of the password
  const salt = bcrypt.genSaltSync(6)
  const passwordHash = bcrypt.hashSync(req.body.password, salt);

  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    password: passwordHash,
    email: req.body.email
  }

  users.push(newUser);

  //console.log(users);

  res.send("OK");
})

app.get('/my-protected-resource', passport.authenticate('basic', { session: false }), (req, res) => {
  console.log('protected resource accessed');

  res.send('Hello protected world');
})

app.get('/some-other-protected-resource', passport.authenticate('basic', { session: false }), function(req, res) {
  res.send('Other protected resource accessed');
})

app.post('/jwtLogin', passport.authenticate('basic', { session: false }), (req, res) => {

  console.log(req)

  //generate JWT

  const payload = {
    user: {
      id: req.user.id,
      username: req.user.username
    }
  };

  const secretKey = "MyVerySecretSigningKey";

  const options = {
    expiresIn: '1d'
  }

  const generatedJWT = jwt.sign(payload, secretKey, options)

  //Send JWT as a response
  res.json({ jwt: generatedJWT })
})

app.get('/jwt-protected-resource', passport.authenticate('jwt', { session: false }), (req, res) => {
  
  //console.log(req.user)

  console.log('User ID from jwt is ' + req.user.user.id)
  
  res.send("Ok for user " + req.user.user.username);
})

/*app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})*/

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