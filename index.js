const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions = [
    'Enter up to 3 characters for your logo.',
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
    //code needs to:
    // destructure the responses
    let { text, textColor, shape, fillColor } = data;

    // check the shape to determine which class to generate
    switch (shape) {
        case 'Circle':
            shape = new Circle(text, textColor, fillColor);
            break;
        case 'Triangle':
            console.log('Triangle was chosen');
            break;
        case 'Square':
            console.log('Square was chosen');
            break;
        default:
            console.log('No valid shape was provided');
            break;
    }
    // verify the input is no longer than 3 characters
    //      Maybe use max-length package?
    // writeFile with the passed filePath and file name
    fs.writeFile(filePath, shape.render(), (err) => err ? console.error(err) : console.log('Generated logo.svg'));
}

init();