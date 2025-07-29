let obj: { name: string, age: number } = {
    name: 'ahmad',
    age: 23
}

type Objfun = { user: string, age: number }
export type Arryfun = [age1: number, age: number, age2: string]


let arry: (number | string)[] = [1, 'ali']
let objfun: (user: string, age: number) => Objfun = (user, age) => {

    return { user: 'ahmad', age: 23 };
};

let objfun1: (user: string | any, age: number) => { user: string, age: number } = (user, age) => {

    return { user: 'ahmad', age: 23 };
};

let arryfun: (age1: number | string, age: number, age2: string) => Arryfun = (age1, age, age2) => {

    return [10, 23, 'ali'];
};


