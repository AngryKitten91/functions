const names = ['foo', 'boo', 'loo', 'goo', 'doo'];


function forEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

function toUpper(i){
    console.log(i.toUpperCase());
}

forEach(names, console.log);
forEach(names, toUpper);
