// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === 'Alex') {
//         return 'Hello, Alex'
//     }else if(input === 'Pat') {
//         return 'Hello, Pat'
//     }else {
//         return "Hello, Jane"
//     }
// }

function sayHello(input){
    if (typeof input === 'string'){
        return 'Hello, ' + input
    }
}

console.log(sayHello());