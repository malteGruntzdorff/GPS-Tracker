const express = require('express');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Create connection to database
const db = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	database : 'gps-tracker'
});

var user = {
	id : '',
	email: '',
	pw: '',
	username: ''

};

// Connect to database
db.connect((err) =>{
	if(err){
		throw err;
	}
	console.log('MySql Connected');	
});

app.listen('3000', () => {
	console.log('Server started on port 3000');
});

// set up BodyParser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());


//creates a new group
app.get('/addgroup', (req, res) =>{
	let groupdata = {title: 'suessigruppe'};
	let sql = 'INSERT INTO groups SET ?';
	let query = db.query(sql, groupdata, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('New group addet');
	});
});

//creates a new standort // noch herausfinden wie man datumsdaten übertragen kann
app.get('/addstandort', (req, res) =>{
	let aktuell = new Date(2018,0,1,0,0,2,4721).toLocaleString();
	let standortdata = {latitude: 99999, longitude: 00000, userid: 1, date: aktuell.value};
	let sql = 'INSERT INTO standort SET ?';
	let query = db.query(sql, standortdata, (err, result) => {
		if(err) throw err; 
		console.log(result);
		res.send('new standort addet');
	});
});
//select all user
app.get('/getuser', (req, res) => {
	let sql = 'SELECT * FROM user';
	let query = db.query(sql, (err, results) => {
		if(err) throw err;
		console.log(results);
		res.send('user ausgewählt');
	});
});
//update grouptitle
app.get('/updategroup/:id', (req, res) => {
	let newTitle = 'Updated grouptitle';
	let sql = `UPDATE groups SET title = '${newTitle}' WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(newTitle);
	});
});
//delete user
app.get('/deleteuser/:id', (req, res) => {
	let sql = `DELETE FROM user WHERE id = ${req.params.id}`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(`delete user ${req.params.id}`);
	});
});
//loginrequest if 200 log in 
app.post('/login', (req, res) =>{
	let user_password=req.body.password;
	let user_email= req.body.email;
	console.log("User email ="  + user_email + ", password is " + user_password);
	//importent dont forget the "" cause its a string
	let sql = `SELECT * FROM user WHERE email = "${user_email}" `;
	let query = db.query(sql, (err, result) => {
		if(err){ throw err;}
		else{
			if(result[0] == undefined){
				console.log("hallo test ist result gleich undefined?");
				res.status(400);
				res.send("fehler");
			}
			else{
				console.log(result);
				//wichtig, hier kann man die daten aus einem result erhalten
				var pw = result[0].pw
				console.log(pw);
				if(user_password === pw){
					res.status(200);
					console.log("password was correct, sent 200");
					console.log(`${result[0].id}`);
					res.send("zurück");
				}
				else{
					res.status(500);
				res.send("zurück");
				}
			}
		}		
	});
});
//create new user (register)
app.put('/addUser', (req, res) => {
	let user_name= req.body.name;
	let user_email= req.body.email;
	let user_password= req.body.password;
	console.log("User name = " + user_name + "User email ="  + user_email + ", password is " + user_password);
	let userdata ={ email: user_email, pw: user_password, username: user_name}
	let sql = 'INSERT INTO user SET ?';
	let query = db.query(sql, userdata, (err, result)=> {
		if(err) throw err;
		console.log(result);
		res.send( userdata +'addet');
	});
});
//select specific user
app.get('/getUserID/:email/:pw', (req, res) => {
	console.log("hallo in getUserID");
	let sql = `SELECT * FROM user WHERE email = "${req.params.email}" AND pw= "${req.params.pw}"`; //hier wählt man die id von oben aus
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log("die id ist: " + result[0].id);
		res.send('ein user ausgewählt');
	});
});