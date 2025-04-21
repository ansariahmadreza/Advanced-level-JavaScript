/// باکس محصولات 
let arryItemProduct = [{ id: 1, src: '../images/1.webp', price: '$12' },
{ id: 2, src: '../images/2.webp', price: '$50' },
{ id: 3, src: '../images/3.webp', price: '$42' },
{ id: 4, src: '../images/4.webp', price: '$7.54' }]
/// عناصر فراخونده شده از dom
const boxshop = document.querySelector('.box-shop') /// باکس محصولات موجود
const total = document.querySelector('.total')/// total price
const boxheader = document.querySelector('.box-products')/// باکس محصولات خریداری شده
const priceSpan = document.querySelector('.price')/// قیمت کل
const removeAll = document.querySelector('#remove-all')
/// ارایه برای محصولات انتخاب شده
let SelectedProducts = []

let totalPrice = 0
/// برای کم کردن بار مرورگر
let fragElemBoxShop = document.createDocumentFragment()
let fragElemBoxHeader = document.createDocumentFragment()

/// اجرای forEach برای ایجاد محصولات در باکس محصولات    
arryItemProduct.forEach(function (item) {

    /// ایجاد عناصر جدید برای هر محصول  
    let newElemImg = document.createElement('img')
    let newElemDiv = document.createElement('div')
    let newElemDivCont = document.createElement('div')
    let newElemSpan = document.createElement('span')
    let newElembutton = document.createElement('button')

    /// اضافه کردن کلاس و ویژگی به عناصر جدید   
    newElembutton.classList.add('btn')
    newElemDivCont.classList.add('shop-item')
    newElemImg.src = item.src
    newElembutton.innerText = 'Add to cart'
    newElemSpan.innerText = item.price
    newElemDiv.append(newElemSpan, newElembutton)
    newElemDivCont.append(newElemImg, newElemDiv)
    // boxshop.append(newElemDivCont)

    fragElemBoxShop.append(newElemDivCont)

    ///ایجاد event برای دکمه اضافه کردن به سبد خرید 
    newElembutton.addEventListener('click', function () {
        addToCart(item)
    })
})
boxshop.append(fragElemBoxShop)

function addToCart(item) {
    // ایجاد عناصر جدید برای هر محصول انتخاب شده    
    let newTd1 = document.createElement('td')
    let newTd2 = document.createElement('td')
    let newTd3 = document.createElement('td')
    let newTr = document.createElement('tr')
    let newInput = document.createElement('input')
    newInput.type = 'number'///تعیین نوع ورودی
    newInput.min = '1'///تعیین حداقل ورودی
    newInput.value = '1'/// تعیین مقدار ورودی
    newInput.max = '9'//تعیین حداکثر مقدار ورودی
    let newImg = document.createElement('img')
    let newSpan = document.createElement('span')
    let newBtn = document.createElement('button')

    if (!document.querySelector(`#product-${item.id}`)) {////// بررسی اینکه آیا محصول قبلا انتخاب شده است یا خیر

        let Products = { id: item.id, src: item.src, price: item.price }//// ایجاد شی جدید برای محصول انتخاب شده    
        SelectedProducts.push(Products)////// اضافه کردن محصول انتخاب شده به ارایه محصولات انتخاب شده

        newImg.src = Products.src// ایجاد تصویر محصول انتخاب شده
        newImg.classList.add('img')//// اضافه کردن کلاس به تصویر محصول انتخاب شده
        newSpan.append(Products.price)//// ایجاد قیمت محصول انتخاب شده
        newBtn.textContent = 'REMOVE'//// ایجاد دکمه حذف محصول انتخاب شده   
        newBtn.classList.add('btn', 'remove')//// اضافه کردن کلاس به دکمه حذف محصول انتخاب شده
        newTd1.classList.add('td')//// اضافه کردن کلاس به td محصول انتخاب شده
        newTd2.classList.add('td')//// اضافه کردن کلاس به td محصول انتخاب شده
        newTd3.classList.add('td')///// اضافه کردن کلاس به td محصول انتخاب شده

        newTd1.append(newImg)//// اضافه کردن عکس به المنت
        newTd2.append(newSpan)///اضافه کردن قیمت المنت
        newTd3.append(newInput)// اضافه کردن input به المنت
        newTd3.append(newBtn)// اضافه کردن دکمه حذف به المنت
        newTr.append(newTd1, newTd2, newTd3)//اضافه کردن عناصر به ظرف کلی
        // boxheader.append(newTr)// اضافه کردن ظرف کلی به dom
        newTr.id = `product-${item.id}`//دادن id به باکس کلی

        fragElemBoxHeader.append(newTr)
        boxheader.append(fragElemBoxHeader)

        changeTotal(item, newTr, newInput, Products, newBtn)///فراخوانی عناصر برای پارامتر تابع
    } else {
        alert('ایتم تکراری است')
    }

}

/// تابع تغییر قیمت
function changeTotal(item, newTr, newInput, products, newBtn) {

    if (newTr.id === `product-${item.id}`) {// برررسی برابر بودن ایدی دو عنصر باهم 
        priceSpan.innerHTML = ''// برای جلوگیری از تکرار قیمت کل قسمت مربوطه با تغییر خالی میشه
        totalPrice += Number(products.price.replace('$', ''))/// قیمت در متغیر ذخیره میشه با برداشن علامت دلار
        priceSpan.textContent += "$" + totalPrice.toFixed(2)/// قیمت با حداکثر دو رقم اعشار در dom ذخیره میشه
    }
    let valueInput = newInput.value// نوشتن مقدار input خارج از اسکوپ ثابته و برای مقایسه
    newInput.addEventListener('input', function () { // تنظیم event روی input
        let currentValue = newInput.value// نوشتن مقدار متغیر input درون event input برای مقایسه
        if (currentValue > valueInput) {/// اگر مقدار درون event  input که میتونه بیشتر از مقدار خارج از اسکوپ باشه بیشتر باشه چون متغیره کد های بعدی اجرا بشه
            priceSpan.innerHTML = ''// برای جلوگیری از تکرار قیمت کل قسمت مربوطه با تغییر خالی میشه
            totalPrice += Number(products.price.replace('$', ''))/// قیمت در متغیر ذخیره میشه با برداشن علامت دلار و در صورت بیشتر شدن
            priceSpan.textContent += "$" + totalPrice.toFixed(2)/// قیمت با حداکثر دو رقم اعشار در dom ذخیره میشهs
        } else if (currentValue < valueInput) { /// اگر مقدار درون اسکوپ کمتر از مقدار بیرون اسکوپ بود
            priceSpan.innerHTML = ''// برای جلوگیری از تکرار قیمت کل قسمت مربوطه با تغییر خالی میشه
            totalPrice -= Number(item.price.replace('$', ''))/// قیمت در متغیر ذخیره میشه با برداشن علامت دلار و در صورت کم شدن
            priceSpan.textContent += "$" + totalPrice.toFixed(2)/// قیمت با حداکثر دو رقم اعشار در dom ذخیره میشه
        }
        valueInput = currentValue/// برابر قرار دادن دو مقدار input داخل و خارج اسکوپ برای مقایسه با اخرین مقدار 
    })
    /// تنظیم event روی دکمه حذف
    newBtn.addEventListener('click', function () {
        removeItem(item, newTr, valueInput, products)/// فراخوانی برخی عناصر برای تابع حذف ایتم
    })
}
/// تابع حذف ایتم
function removeItem(item, newTr, valueInput, products) {
    priceSpan.innerHTML = ""// خالی کردن قسمت قیمت ها برای عدم تکرارشون
    let totalPriceDeleted = valueInput * Number(products.price.replace('$', ''))/// مقدار کل هر محصول
    totalPrice -= totalPriceDeleted  // کم کردن مقدار کل هر محصول از مقدار کل سبد خرید
    priceSpan.textContent = "$" + totalPrice.toFixed(2) /// نمایش مقدار کل حداکثر با دو رقم اعشار
    newTr.remove()// حذف عنصر از صفحه

    ///پیدا کردن ایندکس مورد نظر
    let findIndex = SelectedProducts.findIndex(function (product) {
        return product.id === item.id
    })
    //حذف عنصر مورد نظر که ایندکسش انتخاب شده
    SelectedProducts.splice(findIndex, 1)
}
/// تنظیم event برای خرید و از بین رفتن کل داده ها در سبد خرید
removeAll.addEventListener('click', function () {
    priceSpan.textContent = "$0.00"
    SelectedProducts = []
    totalPrice = 0
    boxheader.innerHTML = ''
})