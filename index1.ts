type s = string
type n = number
type snb = string | number | boolean
type sn = string | number
// import { test } from "./test.js"


// console.log(test(2,2))

let obj: { name: string, age: number } = {
    name: 'ahmad',
    age: 23
}

type Objfun = { user: s, age: n }
// export type Arryfun = [age1: n, age: n, age2: s]
type Arryfun = [age1: n, age: n, age2: s]


let arry: (sn)[] = [1, 'ali']

let objfun: (user: s, age: n) => Objfun = (user, age) => {

    return { user: 'ahmad', age: 23 };
};

let objfun1: (user: s | any, age: n) => { user: s, age: n } = (user, age) => {

    return { user: 'ahmad', age: 23 };
};

let arryfun: (age1: n | s, age: n, age2: s) => Arryfun = (age1, age, age2) => {

    return [10, 23, 'ali'];
};


let fun: (a: string, b: string) => void;

fun = (name: s, greeting: s) => {

    console.log(`${name}${greeting}`);

};

console.log(fun('ahmad', 'ans'))

let calc: (a: number, b: number, c: string) => number;

let calc1 = (numOne: number, numTwo: number, action: string) => {

    if (action === "add") {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }

}

let person: (obj: { name: string, age: number }) => void;

person = (obj) => {
    console.log(`${obj.name}and ${obj.age}`)
}

person({ name: 'ahmad', age: 23 })

let aElem = document.querySelector('a')!;

// if (aElem) {
//     console.log(aElem.href);
// };

console.log(aElem.href)


let formElem = document.querySelector('.form') as HTMLFormElement;

console.log(formElem.children)

const type = document.querySelector('#type') as HTMLSelectElement
const toForm = document.querySelector('#type') as HTMLInputElement
const inputStringToNumber = document.querySelector('#type') as HTMLInputElement

//inputStringToNumberAsNumber     تبدیل عدد استرینگی به نامبر

class Person {
    private client: string;
    readonly amount: string;

    constructor(client: string, amount: string) {
        this.client = client;
        this.amount = amount

    }
}


interface infoUser {
    name: string;
    age: number;
    speak(a: string): void;
}


// interface HasFormatter {
//     format(): string;
// }

// export class listTemplate {
//     constructor(private container: HTMLUListElement) {

//     };

//     render(item: HasFormatter, heading: string, pos: 'start' | "end") {
//         const li = document.createElement('li');
//         const h4 = document.createElement('h4');
//         const p = document.createElement('p');

//     };
// };


const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}

let docOne = addUID({ name: 'ahmad', age: 23 })

//console.log(docOne)

enum ResourseType { AUTHO, PERSON, FILM, BOOK };

interface Resourse<T> {
    uid: number;
    resourseName: ResourseType;
    data: T;
}

const docTow: Resourse<object> = {
    uid: 1,
    resourseName: ResourseType.PERSON,
    data: { name: 'akbar' }
}


const docThree: Resourse<object> = {
    uid: 2,
    resourseName: ResourseType.BOOK,
    data: { title: 'sag velgard' }
}

console.log(docOne, docTow, docThree)

let arr = ['akbar', 21, true]
arr[0]=23


///Tuples

let tup: [string, number, boolean] = ['ahmad', 23, true]
