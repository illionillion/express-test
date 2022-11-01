import Express from "express";
import { networkInterfaces } from 'os';
import aboutRouter from "./routes/about.js";
import formRouter from "./routes/form.js";

const nets = networkInterfaces();
const net = nets["en0"]?.find((v) => v.family == "IPv4");
const ipAddress = net.address

const app = Express()
const port = 8080

// set the view engine to ejs
app.set('view engine', 'ejs');
// body-parser設定
app.use(Express.json());
app.use(Express.urlencoded({
    extended: true
}));
app.use('/about', aboutRouter)
app.use('/form', formRouter)


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index', {"name": "index Page"});
});

app.listen(port);

console.log(`http://${ipAddress}:${port}`);
console.log(`http://localhost:${port}`);
// console.log('8080 is the magic port');