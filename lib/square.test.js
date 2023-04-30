const Square = require('./square');

describe('Square', () => {
    //test to verify if Square's text property is assigned correctly
    describe('Initialize text', () => {
        it('should set text to ABC', () => {
            const text = 'ABC';
            const square = new Square(text);

            expect(square.text).toBe(text);
        })
    })
    
    // Test to verify the render method returns correct user input
    describe('Render correct inputs for text, text color, and shape color', () => {
        it('should interpolate the passed text into the return svg string', () => {
            const square = new Square('ABC', 'white', 'red');
            const returnValue = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">  
    <rect x="50" y="0" width="200" height="200" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
   </svg>`
            expect(square.render()).toBe(returnValue)
        })
    })
})