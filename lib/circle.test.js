const Circle = require('./circle');

describe('Circle', () => {
    //test to verify if Circle's text property is assigned correctly
    describe('Initialize text', () => {
        it('should set text to ABC', () => {
            const text = 'ABC';
            const circle = new Circle(text);

            expect(circle.text).toBe(text);
        })
    })
    
    // Test to verify the render method returns correct user input
    describe('Render correct inputs for text, text color, and shape color', () => {
        it('should interpolate the passed text into the return svg string', () => {
            const circle = new Circle('ABC', 'white', 'red');
            const returnValue = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
     <circle cx="150" cy="100" r="90" fill="red" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
   </svg>`
            expect(circle.render()).toBe(returnValue)
        })
    })
})