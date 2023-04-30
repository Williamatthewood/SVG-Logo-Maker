const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(text, textColor, fillColor){
        super(text, textColor, fillColor);
    }

    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
    <polygon points="0 260, 150 0, 300 260" fill="${this.fillColor}"/>
   
     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`
    }
}

module.exports = Triangle;