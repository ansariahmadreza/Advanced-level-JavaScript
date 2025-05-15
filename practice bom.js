// let num1 = 2
// let num2 = 3
// console.log(num1+num2)
// console.error("Data is not definde")
// console.info("api response")
// console.warn('salam')
// console.assert(num1 > num2,"big")

// let user = {
//     id: 1,
//     username: 'amin',
//     pass: '12345',
//     age: 21
// }

// console.table(user)

// let products = [
//     {
//         id: 1,
//         name: 'laptop',
//         price: 12784},

//         {id: 2,
//         name: 'mobile',
//         price: 127741},

//         {id: 3,
//         name: 'phone',
//         price: 1271234},


//         {id: 4,
//         name: 'smart',
//         price: 12754},


//         {id: 5,
//         name: 'la',
//         price: 12456540}
// ]
// console.table(products)
// for(let i=0;i< 1000;i++){
//     ////
// }
// console.time('for loop')
// console.timeEnd()
// console.group()
// console.groupEnd()
// console.log('%csalam', 'color:red;')//// بعدا روش کار کن
// console.log(window.location);
// let divElem = document.querySelector('div')
// let scrollElem = document.querySelector('.scroll')
// window.document.addEventListener('scroll', function () {
//     let totalScroll = document.documentElement.scrollHeight - window.innerHeight //// ارتفاع کل منهای ارتفاع قسمت سفید رنگ
//     let result = (document.documentElement.scrollTop / totalScroll) * 100
//     scrollElem.style.width = result.toFixed(2) + "%"
//     // scrollElem.style.backgroundColor = result + "%"
//     console.log("درصد اسکرول شده از صفحه" + " " + result.toFixed(1))
// })
// console.log(screen.availHeight)
// console.log(screen.height)
// console.log(screen.availWidth)
// console.log(screen.width)
// console.log(history)
// console.log(history.back())
// console.log(history.forward())
// console.log(history.length)
// console.log(history.go())
// console.log(history.go(0))
// console.log(history.go(-1))
// console.log(location)
// console.log(location.protocol)
// console.log(location.hostname)
// console.log(location.pathname)
// console.log(location.search)
// console.log(location.hash)
// console.log(location.href)
// let btn = document.querySelector('.btn')
// btn.addEventListener('click', function () {
//    location.href = 'https://www.zoomit.ir/'
// })
// let resultSearch = location.search.slice(1).split('=')[1]
// let btn = document.querySelector('.btn')
// let h1Elem = document.querySelector('.onLine')
// btn.addEventListener('click', function () {
//     location.reload()
//     location.assign()
//     location.replace()
// })
// window.addEventListener('online',function(){
//     h1Elem.textContent='online'
//     h1Elem.classList.add('onLine')
// })
// window.addEventListener('offline',function(){
//     h1Elem.textContent='offline'
//     h1Elem.classList.add('offLine')
// })
// document.designMode = 'on'  /// برای اعمال در کنسول برای تغییر دستی در سایت
// document.body.contentEditable = true  // در صورت اعمال به یک div خاص فقط همان قابل تغییر است
// let divElem = document.querySelectorAll('div')
// // divElem.forEach(function (div) {
// //     div.addEventListener('click', function (event) {
// //         // event.stopPropagation()
// //         event.target.style.backgroundColor = 'blue'
// //         console.log(div)
// //     }, { once: true })
// // })


// const listItem = document.querySelectorAll('li')
// const inputElem = document.querySelector('.inputElem')
// const listBox = document.querySelector('.list')
// document.getElementsByTagName
// // listItem.forEach(function (item) {
// //     item.addEventListener("click", function (event) {
// //         event.target.remove()
// //     })
// // })
// listBox.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         console.log(event.target.tagName)
//         event.target.remove()
//     }
// })
// inputElem.addEventListener('keyup', function (event) {
//     if (event.key === "Enter") {
//         let newElemLi = document.createElement('li')
//         newElemLi.innerHTML = inputElem.value
//         listBox.append(newElemLi)
//         inputElem.value = ''
//     }
// })



/// تابع کال بک  و اسینک 
/// اسینک برنامه نویسی غیرهمزمان
// سینک همزمان
/// از این پایین مثالش هست



// function firstLog() {
//     console.log(1)
//     console.log(2)
// }

// function midllLog(callback) {
//     setTimeout(function () {

//         console.log(3)
//         console.log(4)
//         callback()
//     }, 3000)
// }



// function lastLog() {
//     console.log(5)
//     console.log(6)
// }




// firstLog()
// midllLog(lastLog)


// function firstFunc() {
//     console.log('ahmadreza')
// }

// function funcAge(callback2) {
//     setTimeout(function () {

//         console.log('23')
//         callback2()
//     }, 3000)
// }


// function FuncFam() {
//     console.log('ansari')
// }

// firstFunc()
// funcAge(FuncFam)




let books = [{ id: 1, name: 'golestan', price: 452000 },
{ id: 2, name: 'bostan', price: 745000 },
{ id: 3, name: 'shahname', price: 486400 }]


function addBooks(name, price, callback3) {
    
    let newBooks = {
        id: books.length + 1,
        name: name,
        price: price
    }

    setTimeout(function () {

        books.push(newBooks)
        callback3()
        
    }, 3000)


}

function logBooks() {
    console.log(books)
}

addBooks('golll', 'sadiahmad', logBooks) /// async در حال اجراس ارسال میکنیم تابع دیگرو به تابعی که یه کار زمان بر یا همان 
// logBooks()


//// composition تابع جوری هست هر جز رو با تابع جدا بسازیم بعد در یک تابع اصلی کنار هم بزاریم
const todoInputElem = document.querySelector('.todoInput')
const todoListElem = document.querySelector('.todoList')

function trim(val) {
    return val.trim()
}function toLowerCase(val) {
    return val.toLowerCase()
}function insertToLi(todoVal) {
    return "<li>" + todoVal + '</li>'
}
function addTodo(event) {
    if (event.key === 'Enter') {
        todoListElem.insertAdjacentHTML('beforeend', insertToLi(toLowerCase(trim(todoInputElem.value))))
        todoInputElem.value = ''
    }
}
todoInputElem.addEventListener('keydown', addTodo)


/// hos توابع بالا مرتبه 

function hofExp() {
    return function () {
        console.log('salam ahmadreza')
    }
}

// hofExp()()

let hofInner = hofExp()
hofInner()



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use strict"

// number = 12
// null = 120

// console.log(number)

// window.Document.undefined = 15 

let userName = {name:'amin',age:21}

delete userName

console.log(userName)


// function ss() {

//     "use strict"
//     ssa = 12

// }

// ss()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

arrow= function(){

    // arrow function
}

// const sum = (num1, num2) => {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// console.log(sum(8, 12))


// const pow = (num1, num2) => {
//     return num1 ** num2

// }


// const pow = (num1, num2) => num1 ** num2

// console.log(pow(8, 12))

// const logger = val => console.log(val)
// const loggere = () => console.log(val)


// logger('test text ')

// const generateUser = (id, name, age = 18) => ({ id: id, name: name, age: age })

// console.log(generateUser(1, 'ali'))



const arrow = () => 'ahmadreza'
console.log(arrow())



///spread syntax


// let numbers = [1, 2, 3, 4, 5]
// let copyNumbers = [...numbers]
// copyNumbers.push(10)
// console.log(numbers)
// console.log(copyNumbers)
// let num1 = [50, 51, 52, 53, 54]
// let num2 = [56, 57, 58, 59, 60]
// let allNum=[...num1,150,...num2]
// console.log(allNum)
// console.log(num1)
// console.log(num2)


//// object


let boj = { id: 1,
    name: 'ali',
     age: 20 }



let copyBoj = {...boj}

copyBoj.age = 100


console.log("boj",boj)
console.log("copy",copyBoj)




//rest operator

/// arg ورودی های اضافه رو جمع میکنه و a,b,c ورودی های اصلی
let sum = (a, b, c, ...arg) => {

    let sumAllArgs = 0

    // let arrayArgs = Array.from(arguments)

    arg.forEach(item => sumAllArgs += item)

    return sumAllArgs

}

console.log(sum(2, 1, 4, 5, 2, 10))


let sum1 = (...arg) => {

    let sumAllArgs = 0

    // let arrayArgs = Array.from(arguments)

    arg.forEach(item => sumAllArgs += item)

    return sumAllArgs

}

console.log(sum1(2, 1, 4, 5, 2, 10))





/// array dest

///اما اصطلاح array dest خودش یه عبارت رسمی یا استاندارد جاوااسکریپتی نیست؛ بیشتر تو توضیحات یا مثال‌ها به صورت خلاصه برای اشاره به آرایه مقصد (جایی که داده‌ها منتقل می‌شن) استفاده می‌شه.



// let arrow = [
//     { id: 1, name: 'ahmadreza', age: 20 },
//     { id: 2, name: 'hasan', age: 34 },
//     { id: 3, name: 'ali', age: 52 },
// ]

// let ss = arrow.find((item) => item.name === 'ali')


// console.log(ss)


// let userID = user[0]
// let userName = user[1]
// let userAge = user[2]




// console.log('userID', userID)
// console.log('userName', userName)
// console.log('userAge', userAge)


// let user = [1, 'ali', 12]
// let [userID, userName, userAge] = user
// const showNumbers = () => [1, 3, 4, 2, 7, 8]

// let [firstNum, , ,secondNum, thirdNum,] = showNumbers()

// console.log(showNumbers())

// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)



// let users = [1, 'ali', 32]



// console.log(idName)
// console.log(name)
// console.log(age)


let users = [
  { idName: 1, name: 'Ali', age: 22 },
  { idName: 2, name: 'Sara', age: 30 },
];


// let [idName, name, age] = users


/// استفاده زو روش ساختار شکنی با یک و چند ابجکت

for (let { idName, name, age } of users) {

    // console.log(`${idName}`, `${name}`, `${age}`)
    console.log(idName , name , age)
}
