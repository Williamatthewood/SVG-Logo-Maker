const inquirer = require('inquirer');
const fs = require('fs');

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
                name: 'logoCharacters',
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
                name: 'shapeColor',
                message: questions[3],
            }
        ])
        .then((answers) => {
            console.log(answers);
            // generateLogo("./examples/logo.svg", answers);
        })
}

function generateLogo(filePath, data) {
    //code needs to:
    // destructure the responses
    // check the shape to determine which class to generate
    // verify the input is no longer than 3 characters
    //      Maybe use max-length package?
    // writeFile with the passed filePath and file name

    console.log('Generated logo.svg');
}

init();