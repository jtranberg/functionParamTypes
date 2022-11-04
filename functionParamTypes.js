var encourageStudent = function (name) {
    return "Hey, ".concat(name, ", you are doing great!");
};
encourageStudent('you');
encourageStudent(85); // not a string and wont break code
function square(num) {
    return num * num; // type is any
}
square(3);
function greet(person) {
    return "hi ther, ".concat(person, "!");
}
greet('jay');
var doSomething = function (person, age, isFunny) { };
doSomething('chickenFace', 76, true);
