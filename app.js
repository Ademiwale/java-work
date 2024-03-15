// let a = 50
// let b = 20
// let c = 10

// function addition() {
//     console.log(a * b / c)
// }
// addition()

// document.getElementById("text")

// function isboiled(temp) {
//     temp = 100
// if(temp == 100){
//     console.log("water is boiling")
// } else if(temp < 100){
//     console.log("water is yet to boil")
// } else("its not on fire")
// }
// isboiled()

// for ( let i =1; i < 100; i++) {
//     console.log(i)
// }
// let cars = ["bmw", "ford", "audi"];
// for(let i =0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// gloal scope and local scope

// var a = 5;
// function normalnum() {
//     let a =10
// }
// console.log(10)

// const person ={
//     firstname: "john",
//     lastname: "doe",
//     age: "50",
//     eyeccolour: "blue",
//     fullname: function() {
//         return this.firstname + " " + this.lastname
//     }
//     console.log(person.fullname)
// }

// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
// let errmsg = document.getElementById('err');

// btn.oneclick = function(){
//     if(input.value === ''){
//         errmsg.innerHTML = "Error!!! please input a value"
//     }
// }

let input = document.getElementById('input');
let btn = document.getElementById('btn');
let errMsg = document.getElementById('err');

btn.onclick = function() {
    if (input.value === ''){
        errMsg.innerHTML = "Error!!! please input a value"
    }
}

const person = {
    firstname: "john",
    lastname: "Doe",
    age: "50",
    eyecolour: "blue"
}
console.log(person)

let num1 = 10;
let num2 = 20;
let num3 = 50;

function addvalue () {
    console.log(num1 + num2 + num3)
}

addvalue ()