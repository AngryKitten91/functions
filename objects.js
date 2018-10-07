let person = {
    name: 'John',
    secondName: 'Adams',
    helloName: function () {
        console.log(this.name);

    },
    helloFull() {
        console.log(`${this.name} ${this.secondName}`);
    }
};

// person.helloName();
// person.helloFull();


const names = ['foo', 'boo', 'loo', 'goo', 'doo'];

function forEach(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

names.forEach = forEach;

names.forEach((val) => {
    console.log(val);
});