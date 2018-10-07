// names.find((a)=>{
//     a === 'doo' ? console.log(a):console.log('err');
// });

function newFind(arg, func) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === arg) {
            return func(true, i);
        }
    }
    return func(false, null);
}

function newFind1(func) {
    for (let i = 0; i < this.length; i++) {
        if(func(this[i])){
            return this[i];
        }  
        
    }
    return undefined;
}

const names = ['foo', 'boo', 'loo', 'goo', 'doo'];

names.newFind = newFind;
names.newFind1 = newFind1;

// names.newFind('boo', (a, i) => {
//     console.log(a, i);
// });

names.newFind1((arg) => {
    return (arg === 'boo');
});