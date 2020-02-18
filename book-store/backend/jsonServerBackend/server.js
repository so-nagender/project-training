const fs = require('fs');
require('dotenv').config();
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
const db = require('./db.json');
console.log(db);
 
server.use(middlewares);

server.use(jsonServer.bodyParser)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
  	// console.log(req)
    req.body.createdAt = Date.now();
    req.body.updatedAt = Date.now();
  }else if (req.method === 'PUT' || req.method === 'PATCH') {
  	req.body.updatedAt = Date.now();
  }
  // Continue to JSON Server router
  next()
});

server.get('/signup', (req, res) => {
  if(!req.body.name || !req.body.password) return res.sendStatus(401);
  
  // Checks if user already exists.
  let userexist = db.profile.find(o => o.name === req.body.name);
  if(userexist) return res.sendStatus(409);  
  
  // Registers a new user.
  db.profile.push(req.body);
  fs.writeFileSync('db.json', JSON.stringify(db));
  
  // Generate access token for a user.
  const accessToken =  jwt.sign(req.body.name, process.env.ACCESS_TOKEN_SECRET);
  res.json({accessToken: accessToken});
});

server.get('/login', (req, res) => {
  if(!req.body.name || !req.body.password) return res.sendStatus(403);
  
  // Checks if already exists.
  let user = db.profile.find(o => o.name === req.body.name);
  if (!user || !(user.password === req.body.password)) return res.json(403, {message: 'Invalid username/password'});
  
  // Generate access token for a user.
  const accessToken =  jwt.sign(req.body.name, process.env.ACCESS_TOKEN_SECRET);
  res.json({accessToken: accessToken});
});

// Authenticate and handles req handling.
function authenticateAndProcessReq(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if(token == null) return  res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if(err) return res.sendStatus(403);
		req.user = user;
		next();
	})
}

server.use((req, res, next) => {
	authenticateAndProcessReq(req, res, next); 
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});