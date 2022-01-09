//Node.js tutorial
//Working with modules
console.log("Hello World");
const tutorial = require('./tutorial.js');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject);

//The events module and eventemitter class
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial',(num1, num2) => {
    console.log(num1 + num2);
});
eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');
pedro.on('name',() => {
    console.log('my name is ' + pedro.name)
});
pedro.emit('name');
christina.on('name',() => {
    console.log('my name is ' + christina.name)
});
christina.emit('name');

//Working with the Readline Module
/*const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;
rl.question(`What is ${num1} + ${num2}? \n`, (userInput) => {
    if(userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt('Incorrect, try again \n');
        rl.prompt();
        rl.on('line',(userInput) => {
            if(userInput.trim() == answer) {
                rl.close();
            }
            else {
                rl.setPrompt(`Your answer of ${userInput} is incorrect try again \n`);
                rl.prompt();
            }
        });
    }
});
rl.on('close', () => {
    console.log('Correcto!');
});*/

//Working with the File System Module
//const fs = require('fs');
//Create file
/*fs.writeFile('example.txt',"This is and example",(err) => {
    if(err)
        console.log(err);
    else {
        console.log('File succecfully created');
        fs.readFile('example.txt','utf8',(err,file)=>{
            if(err) 
                console.log(err);
            else
                console.log(file);
        });
    }
});*/

/*fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Succecfully renamed the file');
});*/

/*fs.appendFile('example2.txt','Data appended',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully appended data to file');
});*/

/*fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('Successfully deleted the file');
});*/


//File system Module pt2
//const fs = require('fs');
/*fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        fs.writeFile('./tutorial/example.txt','123',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Successfully created file');
        });
        console.log('Folder successfully created');
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Successfully deleted the folder');
        });
});*/ //Make directory or folder

/*fs.unlink('./tutorial/example.txt',(err)=>{
    if(err)
        console.log(err);
    else 
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else    
                console.log('Deleted folder');
        });
        console.log('Successfully deleted the file');
});*/

/*fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else
        console.log(files);
        for(let file of files){
            fs.unlink('./example/' + file,(err)=>{
                if(err)
                    console.log(err);
                else 
                    console.log('Successfully deleted file');
            });
        }  
});*/


//Working with readable and writeable streams
/*const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
        console.log(chunk)
        writeStream.write(chunk);
});*/

//Why you should use streams, it will use a buffer in memory to read it, if the file
//is larger than the memory available at the moment of reading it, it will explode.
/*const fs = require('fs');
fs.readFile('./largefile.txt',(err,file)=>{
    if(err)
        console.log(err);
    else
        console.log(file);
});
const readStream = fs.createReadStream('./largefile.txt','utf8');
readStream.on('data',(chunk)=>{
        console.log(chunk)
});*/

//Pipes and Pipe chaining
/*const fs = require('fs');
const zlib = require('zlib'); //Compression
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt.gz');
readStream.pipe(gzip).pipe(writeStream);
//Unzip
const gzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz','utf8');
const writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);
*/


//Creating a Http server using the http module
/*const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write('Hello World from node.js'); //Response from the webserver
        res.end(); //Sending the response
    }
    else {
        res.write('using some other domain');
        res.end();
    }
}); 
server.listen('3000');//What port is gonna listen for the request, localhost:3000, on browser
*/

//Serving static files with Http and File system modules
/*const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type' : 'text/html'}); //application/json or image/png
    readStream.pipe(res);
}).listen(3000);*/


//Create package.json using npm init (holds metadata from the project, name, version etc...)
//use 'npm init' on terminal

//Installing packages using nom, node package manager, reusable code that we can include in our own application, folder with one or mode modules within it
//https://www.npmjs.com/ for example npm install lodash on terminal or npm uninstall lodash
/*const _ = require('lodash');
let example = _.fill([1,2,3,4,5], "banana", 1, 4);
console.log(example);*/


//Semantic versioning / allows us to know what changes has been made in each version
//"version": "^1.0.0", major (breaking change, not compatible with the code of the previous versions), minor (new functionality, non breaking change update), patch (bug fixes)
// ^ you don't want major updates
// ~ you only want patch updates   
// If none of before then you will stick at the actual version


//Getting started with express (public available package within nodejs) web framework
// npm init (creating json file) --yes(for skipping the configuration)
// npm install express
//Working with express get requests
//Serving static files with express

/*const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(__dirname,'static'))); //using middleware, setting an alias for the static folder, we don't want other people to know the real name of the folder
app.get('/',(req,res) => {
    res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);*/


/*app.get('/example',(req,res) => {
    res.send('hitting example route');
});
//http://localhost:3000/example/pedro/24?tutorial=paramstutorial&sort=byage
app.get('/example/:name/:age',(req,res) => {
    console.log(req.params); //you should use route parameters when you must have that data
    console.log(req.query); //you should use query parameters for optional parameters
    res.send(req.params.name + " : " + req.params.age);
});*/


//Http post request w/ express and body parser module











