const names = ['foo', 'boo', 'loo', 'goo', 'doo'];

// for (let i of names) {
//     console.log(i);
// }

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

function forEach(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let hello = function () {
    console.log('hello!');
}

hello();

let helloCopy = hello;

helloCopy()

function call(arg){
    arg();
}

call(hello);
call(helloCopy);