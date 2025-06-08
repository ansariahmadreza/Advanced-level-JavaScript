// "use strict"



const order1 = {
    id: 101,
    customer: "Ali",
    amount: 250,
    printDetails: function (extraNote) {
        console.log(`Order ${this.id} for ${this.customer} - $${this.amount} ${extraNote}`);
    }
};

const order2 = {
    id: 102,
    customer: "Sara",
    amount: 400
};

const order3 = {
    id: 103,
    customer: "Reza",
    amount: 150
};

const orders = [order1, order2, order3];


// for (let sum of orders) {
//     order1.printDetails.apply(sum, ['hi'])
// }



const result = orders.reduce((acc, item) => {


    // console.log(acc)
    // console.log(item.amount)

    return acc + item.amount

},0)

 console.log(result)




// let bindOrd3 = order1.printDetails.bind(order2,'salam');

// bindOrd3()






/////////////////////////Constructor functions///////////////////////////////////////////////




function Person(personID, personUserName, personAge, personJob) {

    this.id = personID
    this.userName = personUserName
    this.age = personAge
    this.job = personJob

}


// let userAli = new Person(1, "Ali", 19, "Digital Markting")
let userAmin = new Person(2, "Ali", 22, "Js Dev")




console.log(userAli)
console.log(userAmin)





const inputValue = document.querySelector('.input')


inputValue.addEventListener('keyup', () => {



    if (/\w/g.test(inputValue.value)) {
        console.log(inputValue.value)
    } else {
        console.log('مقدار وارد  شده معتبر نیست')
    }

    inputValue.value = ''
})





function User(username, userAge, userJob) {

    this.name = username
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }
    this.getAge = function () {
        return this.age
    }
    this.getJob = function () {
        return this.job
    }

    /////////////////////////////////////////////////////

    this.setName = function () {
        this.name = newName
    }
    this.setAge = function (newAge) {
        this.age = newAge
    }

    this.setJob = function () {
        this.job = newJob
    }
}

let userAli = new User('Ali', 19, 'Android Developer')

userAli.setAge(24)

console.log(userAli.getAge())



// let port = 10
// let testport = null

// let DeveloperingPort = (testport || port) ?? 3000


// console.log(DeveloperingPort)


// let user = {
//     id: 1,
//     userName: 'Amin',
//     age: 12,

//     address: {
//         country: "Iran"
//     }
// }

// let userStreet = user.address.city ? user.address.city.street : undefined

// let userStreet = user.address.city?.street



// let userStreet = user?.address?.country


// console.log(userStreet)

// console.log(Object.entries(user))

///////////////////////////////////////////////SET////////////////////////////////////////////////////////

// let numbers = [1, 23, 4, 5, 2, 4, 5, 7, 8, 9, 10, 12, 13, 23]
// let setNum = new Set(numbers)
// let userName = 'ahmadreza'
// let setUser = new Set(userName)
// setUser.add('ansari')
// console.log(setUser)
// console.log(setUser.has('d'))
// setUser.clear()
// let arrayUser = [...setUser]
// console.log(arrayUser)


////////////////////////////////////////////MAP/////////////////////////////////////////////////////////////////
let user = {
    id: 1,
    name: 'ali',
    lastName: 'ahmadi',
    age: 22
}
// console.log('objectUser:', user)
let mapUser = new Map(Object.entries(user))/// تبدیل ابجکت به مپ
// console.log("MAP:", mapUser)
let objectUser = Object.fromEntries(mapUser)/// تبدیل مپ به ابجکت
// console.log(objectUser)
// mapUser.forEach((value, key) => {
//     console.log(`${key},${value}`)
// })
mapUser.set('id', 1)
mapUser.set('firstName', 'ahmadreza')
mapUser.set('lastName', "ansari")
mapUser.set('age', 22)
mapUser.delete('age')
// console.log(mapUser)
// console.log(mapUser.get('firstName'))
mapUser.clear()
/////////////////////////////////////////////////
// let fakeDate = { name: 'ali' }
let myWeakSet = new WeakSet()

// myWeakSet.add(fakeDate)

console.log(myWeakSet)


function FakeDate() {
    this.name = {
        name: 'ali'
    }
}

window.FakeDate = new FakeDate()


let fakeDateMap = { id: 1, name: 'ahmadreza' }
let myWeakMap = new WeakMap()

myWeakMap.set(fakeDateMap)

console.log(myWeakMap)


//////////////////////////////////////////proxy(object)//////////////////////////////////////////////////////////////////////////////


let user2 = {
    id: 1,
    name: 'ahmadreza',
    lastName: 'ansari',
    age: 23,
    email: 'ahmadreza.an.dev@gmail.com',
    type: 'user'
}


let user3 = new Proxy(user, {

    get: function (target, property) {

        // console.log('Target', target)
        // console.log('Property:', property)

        // return target[property] ? target[property] : 'مقدار معتبر نیست'
        // return property in target ? target[property] : 'مقدار معتبر نیست'
    },


    set: function (target, property, value) {
        // console.log("Target:", target)
        // console.log('Property:', property)
        // console.log('value:', value)



        if (property === 'type' && ['user', 'admin', 'author', 'Teacher'].includes(value.toLowerCase())) {
            // return target[property] = value
        } else {
            throw new Error("This Value Is Not Valid :(((")
        }

        target[property] = value
    },

})




///////////////////proxy(func)///////////////////////

function add(num1, num3) {
    let sum = num1 + num3

    return sum
}

let proxyAdd = new Proxy(add, {

    apply: function (target,thisArg,arg) {
        return target(...arg)
    }
})
console.log(proxyAdd)