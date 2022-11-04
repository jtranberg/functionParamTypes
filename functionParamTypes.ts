const encourageStudent = (name: string) => {
    return `Hey, ${name}, you are doing great!`;
}
encourageStudent('you');

encourageStudent(85);   // not a string and wont break code

function square(num ) {
    return num * num;               // type is any
}
square(3);

function greet(person: string){
    return `hi there, ${person}!`;
}
greet('jay') 

const doSomething = (person: string, age: number, isFunny:boolean) => {};
doSomething('chickenFace',76,true)

function greet(person: string = "stranger"){
    return `hi ther, ${person}!`;
}
greet()                 //default value..strager..addes if not param on greet
greet("tony")