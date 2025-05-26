"use strict"
let infoUser = document.querySelector('.infoName')
let infoAge = document.querySelector('.infoAge')
let infoPass = document.querySelector('.infoPass')
let formUser = document.querySelector('.formUser')
const userTable = document.querySelector('.userTable')

// مقدار دهی شده به هیچ
let db = null
let objectStore = null

window.addEventListener('load', () => {/// ست کردن رویداد روی صفحه


    let indexeDB = indexedDB.open('ahmad', 32)///ساخت پایگاه داده indexedDB با ورژنش
    // indexedDB.deleteDatabase('ahmadrezaansari')/// با دادن اسم پایگاه داده مورد نظر در اینجا حذف میشه

    indexeDB.addEventListener('error', error => {/// اگر باز کردن با خطا مواجه شد اجرا شود
        console.warn("ERROR", error)
    })

    indexeDB.addEventListener('success', event => {//اگر بازکردن موفقیت امیز بود اجرا شود
        db = event.target.result
        getUsers()
        // console.log(event.target.result)
    })

    indexeDB.addEventListener('upgradeneeded', event => {   /// ست کردن رویدادی که  برای زمان ساخت یا ارتقا پایگاه داده کاربرد دارد

        db = event.target.result /// دسترسی به اشیا ابجکتی که در indexedDB ساخته شده

        if (!db.objectStoreNames.contains('ali')) { /// اگر object store با نام علی وجود نداشت کد بعد اجرا بشه

            db.createObjectStore('ali', {
                keyPath: 'userID'///  هر شی که ذخیره میشه باید فیلدی به اسم userID داشته باشه برای ذخیره در ابجکت
            })
        }
        // if (db.objectStoreNames.contains('ali')) {  /// در صورت وجود همچین ابجکتی کد بعدی اجرا بشه

        //     db.deleteObjectStore('akbar')
        // }
    })

})
formUser.addEventListener('submit', event => {
    event.preventDefault()/// جلوگیری از رفتار پیش فرض

    let newUser = { /// ساخت ابجکت
        userID: Math.floor(Math.random() * 99999),/// تولید یک عدد تصادفی بین صفر و یک بعد گرد کردن به سمت نزدیک ترین عدد صحیح پایین و ضرب در عدد مورد نظر
        name: infoUser.value,
        password: infoPass.value,
        age: infoAge.value
    }

    let tx = createTx('ali', 'readwrite')

    let store = tx.objectStore('ali')/// دسترسی به اشیا ابجکت ساخته شده با این نام
    let request = store.add(newUser)///// ذخیره داده کاربر جدید در object store 'ali'


    request.addEventListener('error', error => {/// ثبت خطا  در کنسول صورت رخداد خطا
        console.warn(" request ERROR", error)
    })
    request.addEventListener('success', event => { //  ثبت پیام موفقیت امیز بودن در کنسول در صورت اضافه شدن موفقیت امیز
        getUsers()
        console.log(event)
    })
    clearInput()
})
function clearInput() {
    infoUser.value = ''
    infoAge.value = ''
    infoPass.value = ''
}

function getUsers() {

    let tx = createTx('ali', 'readwrite')
    let store = tx.objectStore('ali')/// دسترسی به اشیا ابجکت ساخته شده با این نام
    let request = store.getAll()

    request.addEventListener('error', error => {/// ثبت خطا  در کنسول صورت رخداد خطا
        console.warn(" request ERROR", error)
    })

    request.addEventListener('success', event => { //  ثبت پیام موفقیت امیز بودن در کنسول در صورت اضافه شدن موفقیت امیز

        let allUsers = event.target.result///  عناصر ابجکت ساخته شده
        /// هدر جدول
        userTable.innerHTML = ` <tr> 
                     <th>ID</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Age</th>
                    <th>Actions</th>
                    </tr>`
        ////عناصر جدول
        userTable.innerHTML += allUsers.map(user => {

            return `<tr>
            <td>${user.userID}</td>
            <td>${user.name}</td>
            <td>${user.password}</td>
            <td>${user.age}</td>
            <td><a href='#' onclick="removeUser(${user.userID})">Remove</a></td>
            </tr>
            `

        }).join('')///حذف فاصله اضافی
    })
}

///برای کاهش تکرار کد
function createTx(storeName, mode) {

    let tx = db.transaction(storeName, mode) /// شروع تراکنش و مشخص کردن حالت ان تراکنش
    tx.addEventListener('error', error => {/// ثبت خطا  در کنسول صورت رخداد خطا

        console.warn(" request ERROR", error)
    })

    return tx

}


function removeUser(userID) {
    /// transaction نیاز به 
    let tx = createTx('ali', 'readwrite')

    /// چک کردن داشتن دسترسی یا خیر
    tx.addEventListener('complete', event => {

        console.log(event)
    })

    let store = tx.objectStore('ali')/// دسترسی به اشیا ابجکت ساخته شده با این نام
    let request = store.delete(userID)/// حذف شی از object در database

    //// استفاده مجدد از اینا برای فهمیدن درستی عملکرد
    request.addEventListener('error', error => {/// ثبت خطا  در کنسول صورت رخداد خطا

        console.warn(" request ERROR", error)
    })
    request.addEventListener('success', event => { //  ثبت پیام موفقیت امیز بودن در کنسول در صورت اضافه شدن موفقیت امیز
        getUsers()
        console.log(event)
    })
}