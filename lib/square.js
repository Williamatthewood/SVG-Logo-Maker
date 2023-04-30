const Shape = require("./shapes");

class Square extends Shape {
    constructor(text, textColor, fillColor){
        super(text, textColor, fillColor);
    }

    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
    <rect x="50" y="0" width="200" height="200" fill="${this.fillColor}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`
    }
}

module.exports = Square;