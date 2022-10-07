import Express from "express";
import { networkInterfaces } from 'os';

const nets = networkInterfaces();
const net = nets["en0"]?.find((v) => v.family == "IPv4");
const ipAddress = net.address

const app = Express()
const port = 8080

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index', {"name": "index"});
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about', {"name": "about"});
});

app.get('/form', function(req, res) {
    res.render('pages/form', {"title": "お問合せフォーム","output":""});
});
app.post('/form', function(req, res) {
    // console.log(req.body.username)
    console.log(req)
    console.log(req.body)
    res.render('pages/form', {"title": "お問合せフォーム","output":""});
});

app.listen(port);

console.log(`http://${ipAddress}:${port}`);
console.log(`http://localhost:${port}`);
// console.log('8080 is the magic port');