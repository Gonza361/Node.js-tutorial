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
const readline = require('readline');
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
});

//Working with the File System Module



