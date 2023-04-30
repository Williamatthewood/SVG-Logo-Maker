const Circle = require('./circle');

describe('Circle', () => {
    // Test to verify the render method returns correct user input
    describe('Render correct inputs for text, text color, and shape color', () => {
        it('should interpolate the passed text into the return svg string', () => {
            const circle = new Circle('ABC', 'white', 'red');

            expect(circle.render()).toBe(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
       
         <circle cx="150" cy="100" r="90" fill="red" />
       
         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
       
       </svg>`)
        })
    })
})