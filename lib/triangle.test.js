const Triangle = require('./triangle');

describe('Triangle', () => {
    //test to verify if Triangle's text property is assigned correctly
    describe('Initialize text', () => {
        it('should set text to ABC', () => {
            const text = 'ABC';
            const triangle = new Triangle(text);

            expect(triangle.text).toBe(text);
        })
    })
    
    // Test to verify the render method returns correct user input
    describe('Render correct inputs for text, text color, and shape color', () => {
        it('should interpolate the passed text into the return svg string', () => {
            const triangle = new Triangle('ABC', 'white', 'red');
            const returnValue = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <polygon points="0 260, 150 0, 300 260" fill="red"/>
    <text x="150" y="150" font-size="48" text-anchor="middle" fill="white">ABC</text>
   </svg>`
            expect(triangle.render()).toBe(returnValue)
        })
    })
})