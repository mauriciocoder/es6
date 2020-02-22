// goes to operator (decrease number until a certain value)
function foo(num) {
    while (num --> 0) {
        console.log(num)
    }
}
foo(10)


// single argument arrow function
var fruits = ['banana', 'apple', 'lemon']
console.log(fruits.filter(fruit => fruit === 'banana'))


// two arguments arrow function
var grades = [10, 8, 7]
console.log(grades.reduce((g1, g2) => g1 + g2, 0))


// object with arrow functions
var party = {carnival: () => console.log('it is carnival!!!'), birthday: () => console.log('happy birthday!!!')}
party.carnival()
party.birthday()


// ##### Function binding
// Functions defined by "function" keyword resolve 'this' to a new internal object, unless you bind this at function definition
// Functions defined by "arrow" resolves this from outer scope

// Functions defined by "function" keyword example
var foo = function () {
    console.log('this inside foo = ', this)
    console.log('this.value1 = ' + this.value1)
}

var objTest = {
    doOtherStuff: function(funk1) {
        this.value1 = 1
        funk1()
    }
}

console.log('### this binding function test')
this.value1 = 0
console.log('this outside foo = ', this)
console.log('direct call. This resolution is in the scope of the function')
foo()
console.log('second level of call.')
objTest.doOtherStuff(foo)
console.log('### this binding function test end')

// Functions defined by arrow example
console.log('### this binding arrow test')
const doStuff = () => {
    console.log('this.value = ', this.value)
}
this.value = 10
doStuff()
var objTest = {
    doOtherStuff: function(funk1) {
        this.value = 1
        funk1()
    },

    doOtherStuff2: (funk1) => {
        this.value = 2
        funk1()
    }
}
objTest.doOtherStuff(doStuff)
objTest.doOtherStuff2(doStuff)
console.log('### this binding arrow test end')

this.type = 'onix'
let car = {
    type: 'fiesta',
    getTypeRegular: function() {
        console.log('this from getTypeRegular = ', this)
        return this.type
    },
    getTypeRegular2: function() {
        console.log('this from getTypeRegular2 = ', this)
        return this.type
    }.bind(this),
    getTypeArrow: () => {
        console.log('this from getTypeArrow = ', this)
        return this.type
    }
}
console.log('car.getTypeRegular = ', car.getTypeRegular())
console.log('car.getTypeRegular2 = ', car.getTypeRegular2())
console.log('car.getTypeArrow = ', car.getTypeArrow())

/* Lesson:
1) Arrow functions resolve this based on file scope
2) Regular functions resolve this based on its own scope (object or class scope only), otherwise you should bind this
*/
