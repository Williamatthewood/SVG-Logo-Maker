const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions = [
    'Enter the text for your logo. Make sure it is no longer than 3 characters',
    'What color should the text be? Enter a color or hexadecimal number.',
    'What shape should your logo be?',
    'What should the shape be? Enter a color or hexadecimal number.',
]

function init(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'textColor',
                message: questions[1],
            },
            {
                type: 'list',
                name: 'shape',
                message: questions[2],
                choices: [
                    "Circle",
                    "Triangle",
                    "Square"
                ]
            },
            {
                type: 'input',
                name: 'fillColor',
                message: questions[3],
            }
        ])
        .then((answers) => {
            generateLogo("./examples/logo.svg", answers);
        })
}

function generateLogo(filePath, data) {
    // destructure the responses
    let { text, textColor, shape, fillColor } = data;

    // verify the input is no longer than 3 characters
    if (text.length > 3){
        return console.log('Text for logo is too long. Please restart the application and make sure your logo text is 3 characters or less.');
    }
    // check the shape to determine which class to generate
    switch (shape) {
        case 'Circle':
            shape = new Circle(text, textColor, fillColor);
            break;
        case 'Triangle':
            shape = new Triangle(text, textColor, fillColor);
            break;
        case 'Square':
            shape = new Square(text, textColor, fillColor);
            break;
        default:
            console.log('No valid shape was provided');
            break;
    }
    // writeFile with the passed filePath and file name
    fs.writeFile(filePath, shape.render(), (err) => err ? console.error(err) : console.log('Generated logo.svg'));
}

init();