var sum = function (a, b) {
    return a + b;
};
var answer = sum(6, 5);
console.log(answer);
// boolean
var isCool = true;
// number
var age = 56;
//string
var eyeColor = 'brown';
// Array
var pets = ['cat', 'dog', 'pig'];
// Object
var wizard = {
    a: 'John'
};
// Tuple
var basket;
basket = ['basketball', 5];
// Enum 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any - !!!!!!! Be Careful
var whatever = 'aaaaaaaaaaahhhhhhhhhhhhhh!!!!';
whatever = 5;
whatever = Size;
// void
var sing = function () {
    console.log('ffff');
};
// never
var error = function () {
    throw Error('ooops');
};
var fightRobotArny = function (robots) {
    console.log('FIGHT!');
};
