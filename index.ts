"use strict";


let num = 12
let arry: (number | string | boolean)[] = [1, "a", false]


let obj: { name: string, id: number } = {
    id: 1,
    name: 'ali'
}

type User2 = { name: string; age: number }
type Arry2 = number[]
export type Arry4 = (string | number)[]


function sum(a: number, b: number): number {
    return a + b
}


function app() {


    sum(2, 2)

    let name = "str";
    let counter: number = 1;
    let flag: boolean = false;

    let arry = [1, "2", false];
    let arry2: Arry2 = [1, 2, 3, 4, 5];
    let arry3: string[] = ['s', 'f'];
    let arry4: Arry4 = [1, "f"];

    let user = {
        name: "ali",
        age: 24,
        color: 'white',
    };


    let user2: User2 = {

        name: 'ali',
        age: 24
    }
}


