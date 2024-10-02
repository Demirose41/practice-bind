let employee = require("./employee");

const john = new employee("John Wick", "Dog Lover");
john.sayName();
john.sayOccupation();
setTimeout(function(){
    john.sayName();
}, 2000)
setTimeout(function(){
    john.sayOccupation();
}, 3000)
