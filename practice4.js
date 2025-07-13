"use strict";

// let btnSearch = document.querySelector('.btnSearch')
// btnSearch.addEventListener('click', () => {
//     if (window.navigator.clipboard) {
//         window.navigator.clipboard.readText().then((res) => console.log(res))
//     }
// })
// let ss = () => {
//     if (window.navigator.clipboard) {
//         let text = 'ahmadreza'
//         window.navigator.clipboard.writeText(copyText).then((res) => { console.log('متن کپی شد') }).catch((error) => console.log('ریدی'))
//     } else {
//         alert('ریدی')
//     }
// }
// btnSearch.addEventListener('click', ss)
// btnSearch.addEventListener('click', () => {
//     if (window.navigator) {

//         window.navigator.getBattery()
//             .then(res => {

//                 console.log(res)

//                 res.addEventListener("onlevelchange", () => {
//                     console.log('شارژ کاربر تغییر پیدا کرد')
//                 })

//                 res.addEventListener('chargingchange',()=>{
//                     console.log("دستگاه کاربر به شارژ زده شد یا جدا شد")
//                 })
//             })
//     }
// })

let btnSearch = document.querySelector('.btnSearch')
let browserStatus = document.querySelector('.browserStatus')
btnSearch.addEventListener('click', () => {
    let bro = window.navigator.appVersion
    if (/edg/i.test(bro)) {
        
        browserStatus.innerHTML = 'شما با مرورگر اج وارد شده اید'
        setTimeout(function () {
            browserStatus.style.display = 'none'
        }, 2000)
    } else if (/chrome/i.test(bro)) {

        browserStatus.innerHTML = 'شما با مرورگر گوگل کروم وارد شده اید'
        setTimeout(function () {
            browserStatus.style.display = 'none'
        }, 2000)
    }
})


////////////////////////////////////////

btnSearch.addEventListener('click', () => {

    if (window.navigator.clipboard) {
        window.navigator.clipboard.readText().then((res) => console.log('متن کپی شده',res))
    }

})

let ss = () => {

    if (window.navigator.clipboard) {

        let text = 'ahmadreza'
        window.navigator.clipboard.writeText(text).then((res) => { console.log('res:',res) }).catch((error) => console.log(error))
        alert('متن در کلیپ بود شما کپی شد')

    } else {
        alert('ریدی')
    }

}


btnSearch.addEventListener('click', ss)

///////////////////////////////////

let numbers = [2, 8, 10, 3, 6, 7, 9, 8, 10]


// numbers.reduce((pervValue, currentValue) => {

//     console.log("perValue:", pervValue)
//     console.log("currentValue:", currentValue)


//     return currentValue

// },"ahmadreza")



let rep = numbers.reduce((obj, currentValue) => {

    // console.log({ ...obj, [currentValue]: (obj[currentValue] || 0) + 1 })


    return { ...obj, [currentValue]: (obj[currentValue] || 0) + 1 }

}, [])


console.log(rep)


// let list = [

//     ['ali', "mohammad"],
//     ['ashkan', 'reza', 'hamid', 'babak'],
//     ['amin', 'qadir', 'sasan']

// ]

// let mergedUsers=list.reduce((prevList,currentList)=>{


//     // return prevList.concat(currentList)
//     return [...prevList,...currentList]
// })

// console.log(mergedUsers)


let users = [
    { id: 1, name: "Ali", score: 40 },
    { id: 2, name: "Ali", score: 60 },
    { id: 3, name: "Ali", score: 100 },
    { id: 4, name: "Ali", score: 84 },
    { id: 5, name: "Ali", score: 90 }

]

let maxScore = users.reduce((preScore, currentUser) => {


    if (preScore < currentUser.score) {
        return currentUser.score
    } else {
        return preScore
    }

}, 0)

// console.log(maxScore)


let minScore = users.reduce((preScore, currentUser) => {


    // console.log(preScore, currentUser.score)

    if (preScore < currentUser.score) {
        return preScore
    } else {
        return currentUser.score
    }


},10)

console.log(minScore)
/////////////////////////////////////////////////////////////////////////////////

let template = document.createElement('template')
template.innerHTML = `
 <link rel="stylesheet" href="../css/index.css">
<h2> ahmadreza ansari :))) </h2>`
class siteUser extends HTMLElement {
    constructor() {
        super()

        console.log('المنت کاستوم ساخته شد');

        this.innerHTML = `<h2>ahmadreza ansari   </h2> <hr/>`

        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}

window.customElements.define("site-user", siteUser);

///////////////////////////////////////////////////////////
const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: 'ahmadreza.an.dev@gmail.com'
      })
    }, 4000)
  })
}
const userCourses = (usernam) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([
      //   { id: 21, title: 'js expert', ptice: 'free' },
      //   { id: 34, title: "redux export", price: 'free' }
      // ])
      reject('مشکلی هست')
    }, 3000)
  })
}
const mainCourseInfo = (courseTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 34,
        title: 'Redux export',
        price: 'free',
      })
    }, 2000)
  })
}
async function runCod() {
  try {
    let userInfos = await userLogin('ahmadreza_ansari', '000');
    let userAllCOurses = await userCourses(userInfos.username);
    let mainInfos = await mainCourseInfo(userAllCOurses[1].title);
    console.log(mainInfos);
  }catch(err){
    console.log('error',err)
    alert('لطفا دوباره تلاش کنید')
  }
}
runCod()