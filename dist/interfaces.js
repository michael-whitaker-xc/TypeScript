"use strict";
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    getOlder() {
        this.age = this.age + 1;
        return this.age;
    }
    greet(phrase) {
        console.log(`${phrase}${this.name}; I am ${this.age} years old.`);
    }
}
let michael = new Person("Michael", 36);
michael.getOlder();
michael.greet("Hello, my name is, ");
console.log(michael);
let addthis;
addthis = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interfaces.js.map