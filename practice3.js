
const userMaker = (firstName, lastName, age) => {

    let newUser = {
        firstName,
        lastName,
        age
    }
    return newUser
}

let userAhmadreza = userMaker('ahmadreza', 'ansari', 23)


console.log(userAhmadreza)


// let userSymbol = Symbol.for('user Id')


// let userObject = {
//     id: '1',
//     name: 'ahmadreza',
//     age: 22,
//     [userSymbol]: 'jdfgn'
// }

// console.log(userObject[Symbol.for('user Id')])


// for (let item in userObject) {
//     console.log(item)
// }


let score = 18

let userStatus = score > 0 && score <= 5 ? "D"
    : score > 5 && score <= 10 ? "C"
        : score > 10 && score <= 15 ? "B"
            : score > 15 && score <= 20 ? "A"
                : "Not Valid"


console.log(userStatus)

//////////////////Promise///////////////////
let books = [
    { id: 1, name: 'ahmadreza', lastName: 'ansari' },
    { id: 2, name: 'ali', lastName: 'akbari' },
    { id: 3, name: 'reza', lastName: 'azade' }
]

function addBook(name, lastName) {

    let newBook = {
        id: books.length + 1,
        name,
        lastName
    }

    return new Promise((resolve, reject) => {

        setTimeout(function () {
            if (books.push(newBook)) {
                resolve('اطلاعات کاربران')
            } else {
                reject('وارد سایت نشدی')
            }
        })
    }, 3000)
}


addBook('sara', 'asra')

    .then((success) => {
        console.log(success)
    })

    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("پیامی که همراه هردو کار میکنه")
    })

////////////////////////////////////////////////////////////////////////////////////////////////
let promies = new Promise((resolve, reject) => {

    const loginFlag = false

    setTimeout(() => {
        console.log('loginCheck')
        if (loginFlag) {
            resolve('اطلاعات کاربران')
        } else {
            reject(new Error('نتونستی وارد بشی'))
        }

    }, 3000)
})


promies
    .then((success) => {
        console.log(success)
    })
    .catch((err) => {
        console.log('ERROR:', err)
    })
    .finally(() => {
        console.log("پیامی که همراه هردو کار میکنه")
    })


let wordPromise = new Promise((resolve, reject) => {

    let text = 'ahmadreza'

    if (text) {
        resolve(text)
    } else {
        reject(new Error('Text is empty!!!'))
    }
})
// wordPromise
//     .then(response => {
//         console.log(response)
//         return response.split('')
//     })

//     .then(response2=>{
//         console.log(response2)
//         return response2.reverse()
//     })
//     .then(response3=>{
//         console.log(response3)
//         return response3.join('')
//     })
//     .then(response4=>{
//         console.log(response4)
//     })
//     .catch(err=>console.log(err))



wordPromise
    .then(response => response.split(''))
    .then(response2 => response2.reverse())
    .then(response3 => response3.join(''))
    .then(response4 => console.log(response4))
    .catch(err => console.log(err))



////////////////////پرامیس تودرتو//////////////////////////////////

let fetchData = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Fetching Data Complete");
            resolve({ id: 1, messeage: 'salam man ahmadam' });
        }, 2000);
    })
}


const parsData = (data) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id:${data.id} and with:${data.messeage}`;
            resolve({ parsed: parsedOutput });
        }, 2000)

    })

}

const showData = (response) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log('show Data:', response.parsed);
            resolve(response);

        }, 2000);

    })
}

fetchData()
    .then(parsData)
    .then(showData)
///////////////////////////////////////////////////////



const loadExternalFile = cdn => {

    return new Promise((resolve, reject) => {

        const linkTag = document.createElement('link')
        linkTag.rel = 'stylesheet'
        linkTag.href = cdn
        linkTag.onload = () => { resolve('File Loaded') }
        linkTag.onerror = () => { reject(new Error('File Not Loaded :(((')) }
        document.head.append(linkTag)

    })

}

loadExternalFile('../../css/index.css')
    .then(response => {
        console.log(response);

        document.body.insertAdjacentHTML('afterbegin', `<h1 class="message">${response}</h1>`)
    })
    .catch(err => {

        console.log(err)
    })




document.querySelector('.btn').addEventListener('click', () => {

    let elemP = document.querySelector('p')

    fetch("https://randomuser.me/api/", {
        ///defult=get
        method: 'GET'
    }).then((res) => {

        if (res.status === 200) {
            return res.json()
        }
        return new Error('ریدی')
    })
        .then((Data) => {

            let result = Data.results[0]
            console.log(result)
            elemP.append(result)
        })
        .catch((err) => {
            console.log(err)
        })
}) 


/////////////////////////////////

let url = 'https://jsonplaceholder.typicode.com/todos/1'

let userId = prompt('userId:')

fetch(`${url}${userId}`)
  .then(res => res.json())
  .then(main => console.log(main))



//////////////////////////////////////////////class  شی گرایی////////////////////////////////////



"use strict";

class Person {

    constructor(userName, userAge) {

        this.Name = userName
        this.Age = userAge

    }

    startdev(){
        console.log(`برنامه نویس  ${this.Name} کارش رو استارت زد`)
    }


    static removeUser(){
        return 'شخص مورد نظر از شرکت حذف شد'
    }


    // startdev = () => {
    //     console.log(`برنامه نویس  ${this.Name} کارش رو استارت زد`)
    // }

    // getAge() {
    //     return this.Age
    // }
}

// let userAmir = new Person("amir", 20)
// let userAli = new Person("ali", 12)
// let userAkbar = new Person("اکبر", 26)



console.log(Person.removeUser())


// console.log(userAkbar)
// console.log(userAli)
// console.log(userAmir)

// userAkbar.startdev()


// class Prefessor extends Person {

//     constructor(userName,userAge,personlesson, yearsOfjob) {

//         super(userName, userAge)

//         this.personlesson = personlesson
//         this.yearsOfjob = yearsOfjob
//     }
//     static startdev() {
//         // console.log(super.getAge)
//         console.log(`استاد${this.userName}کارش رو استارت زد`)
//     }

// }

// let PrefessorAli = new Prefessor('ahmadreza',24,"C++","ostad")

// console.log(PrefessorAli)

