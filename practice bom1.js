// const users = [
//   { id: 1, name: 'Ali' },
//   { id: 2, name: 'Sara' },
//   { id: 3, name: 'Reza' },
//   'hasan'

// ];
// let result = users.findIndex(item => item.name === 'Sara')
// let result1 = users.indexOf('sara')

// console.log(result)
// console.log(result1)


let type = 'fake'
let text = `lorem Ipsum is ${type} =>${2 ** 4}=>${Math.pow(2, 4)}`

console.log(text)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let userName = 'ahmadreza'


let liElems = document.getElementsByTagName('li')

for (let li of liElems) {

  li.addEventListener('click', e => e.target.remove()) 
}
let users={
  id:1,
  name:'ahmadreza',
  age:23
}

for(let item in users){
  console.log(`${users[item]}`)
}

let arrayUsers = [{ id: 1, name: 'ahmadreza', age: 23 },
{ id: 2, name: 'ahmad', age: 15 },
{ id: 3, name: 'ali', age: 45 },

]

// console.log(name)
// console.log(age)


const getUser = userID => {
  let mainUser = arrayUsers.find(item => item.id == userID)

  return mainUser
}

// let { id, name: username, age } = getUser(1)
// console.log(id)
// console.log(username)
// console.log(age)


//////////////////////////////////////

const userIdInput = document.querySelector('#user-id')

userIdInput.addEventListener('keydown', event => {
  let { keyCode, target: input } = event

  if (keyCode === 13) {
    let { name, age } = getUser(input.value)

    console.log(name)
    console.log(age)


  }
})



// let arrayUsers = [{ id: 1, name: 'ahmadreza', age: 23 },
// { id: 2, name: 'ahmad', age: 15 },
// { id: 3, name: 'ali', age: 45 },

// ]

// console.log(name)
// console.log(age)


// const getUser = userID => {
//   let mainUser = arrayUsers.find(item => item.id == userID)

//   return mainUser
// }

// let { id, name: username, age } = getUser(1)
// console.log(id)
// console.log(username)
// console.log(age)


//////////////////////////////////////

// const userIdInput = document.querySelector('#user-id')

// userIdInput.addEventListener('keydown', event => {
//   let { keyCode, target: input } = event

//   console.log(keyCode)

//   if (keyCode === 13) {
//     let { name, age } = getUser(input.value)

//     console.log(name)
//     console.log(age)


//   }
// })



///file  1

function salam() {
    alert('به نام خدا من احمدرضا انصاری هستم')
}

export { salam }



////file  2

import { salam as salam2 } from "./Hide.js";

const btn = document.querySelector('.btn')


btn.addEventListener('click',salam2)

// import { salam as salam2 } from "./Hide.js";
// import ahmadreza from "./Hide.js"
import * as func from "./Hide.js";
////////////////////////////////////////////////////////////
export { salam,ss }
// export default salam






/////////////////////////////indexedDB//////////////////////////


let db = null
let objectStore = null

window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('ahmadreza', 7)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err)
        console.log(err)
    })

    DBOpenReq.addEventListener('success', (e) => {
        console.log('Success', e.target.result)
    })

    DBOpenReq.addEventListener('upgradeneeded', (event) => {

        db = event.target.result

        console.log('Old V:', event.oldVersion)
        // console.log('upgrade', event)
        console.log('New V:', event.newVersion)

        console.log(db)


        if (!db.objectStoreNames.contains('users')) {
            objectStore = db.createObjectStore('users')
        }

        objectStore = db.createObjectStore('courses')
        

        // if (db.objectStoreNames.contains('courses')) {
        //     db.deleteObjectStore('courses')
        // }

    })
})



///////regex//////////////
// window.addEventListener('keydown', event => {
//     if (/[^a-z]/.test(event.key)) {
//         console.log('salam')
//     }

//     // let ss = "abc123"
//     // let ss = "abc4"
//     let ss = /abc2xyz\.[ahmadreza]+/
//     let regex1 = /[^a]/
//     let regex2 = /(aa)(bb)+/

//     ///+ یعنی هرچند تا که باشه

//     let emailRegex = /.+@.+.com/

//     let arryemail = prompt('pleaze inter email:')


//     console.log(emailRegex.test(arryemail))


//     console.log(ss)

//     if (/abc[123]/.test(ss)) {
//         console.log('hiiii')
//     } else {
//         console.log('not found')
//     }
// })




/////////////this//////////////////////////////



// function show() {
//     console.log(this);
// }

// show()



// const obj = {
//     name: "Ali",
//     greet: function() {
//         console.log(this.name);
//     }
// };

// obj.greet();  // خروجی: Ali


function removeListitem(el) {

    el.remove()

    // console.log(el)

}


function sumNumbers() {

    let sum = 0

    for (let arg of arguments) {

        sum += arg
    }

    console.log('this in func:', this)
    return sum


}
// console.log('sum:', sumNumbers(2, 5, 3))



// let user = {
//     id: 1,
//     name: 'amin',
//     age: 23,

//     walk: function () {
//         console.log('user Walked')
//     },

//     showThis: function () {
//         console.log(this)
//     },

//     setName: function (newName) {
//         this.name = newName
//     },

//       setAge: function (newAge) {
//         this.age = newAge
//     }
// }
// user.setName('ali')
// user.setAge(250)

// user.showThis()



let user = {
    id: 1,
    userName: 'Amin',
    age: 22,

    walk: function () {
        console.log(this.userName + ' walked')

    },

    aboutUser: function () {
        setTimeout( ()=> {

            console.log(this.userName + " Is " + this.age + " years old ")

        }, 3000)

    }
}


let user2 = {
    id: 2,
    userName: 'Ali',
    age: 50,

    // walk: function () {
    //     console.log(this.userName + ' walked')
    // }
}

//user.aboutUser.call(user2)
user.aboutUser()

function showUser(score, city) {
    console.log(this.userName + 'Is' + this.age + 'Years Old :) => Score', score + " City: " + city)
}

// showUser.call(user,20,"Tabriz")
// showUser.call(user2,14,"Tehran")

// showUser.apply(user,[20,"Tabriz"])
// showUser.apply(user2,[14,"Tehran"])

// showUser.bind(user, 20, "Tabriz")()

// let bindfuc = showUser.bind(user2, 14, "Tehran")
// bindfuc()
