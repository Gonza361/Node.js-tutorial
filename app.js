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






