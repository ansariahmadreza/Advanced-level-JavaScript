"use strict";


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

