"use strict"




let userName = 'ahmadreza'

console.log(userName.padStart(20, '-'))
console.log(userName.padEnd(20, '-'))



let phoneNumber = '09213034972'
let last4digit = phoneNumber.slice(-4)
let finalPhoneNumber = last4digit.padStart(phoneNumber.length, "*")

console.log(last4digit)
console.log(finalPhoneNumber)