const itemColor = document.querySelectorAll('.itemColor') ///رنگ ها
const input = document.querySelector('.input')/// input
const plus = document.querySelector('.plus') //ایکون به اضافه
const eraser = document.querySelector('.eraser')///ایکون پاک کن
const ContainerNote = document.querySelector('.Container')
const form = document.querySelector('.form')/// فراخوانی تگ form
const modal = document.querySelector('.modal')

form.addEventListener('submit', function (event) {/// جلوگیری از حالت پیش فرض فرم
    event.preventDefault()
})

///با تنظیم event روی دکمه enter یادداشت رو اضافه میکنه
input.addEventListener('keyup', function (event) {

    const p = document.createElement('p')
    const boxNote = document.createElement('div')
    if (event.key === 'Enter' && event.target.value.trim()) {
        p.textContent = event.target.value
        boxNote.append(p)
        ContainerNote.append(boxNote)
        p.style.background = event.target.style.background
        input.value = ''
    }
})
document.body.addEventListener('click', function (event) {
    if (event.target === plus) {
        if (input.value === '') {  /// با فشار دادن plus در صورت خالی بودن input پیام زیر نمایش داده شود
            modal.innerHTML = 'لطفا مقدار مناسب را وارد کنید'
            modal.style.display = 'block'
            setTimeout(function () {
                modal.style.display = 'none'
            }, 3000)
        } else {/// اگر خالی نبود با ظرف اضافه بشه یادداشت
            const p = document.createElement('p')
            const boxNote = document.createElement('div')
            p.textContent = input.value
            boxNote.append(p)
            ContainerNote.append(boxNote)
            p.style.background = input.style.background
            input.value = ''
        }
    }
    if (event.target === eraser) {
        input.value = ''
        input.style.background = 'none'
    }
    itemColor.forEach(function (color) {
        if (event.target === color) {
            input.style.background = event.target.style.color
        }
    })
    if (event.target.tagName === "P") {
        const alarmConfirm = confirm('آیا می‌خواهید یادداشت را حذف کنید؟')
        if (alarmConfirm) {
            event.target.parentElement.remove()
        } else if (!alarmConfirm) {
            modal.style.display = 'block'
            modal.innerHTML = 'یادداشت حذف نشد'
            modal.style.background = 'black'
            modal.style.color = 'white'
            setTimeout(function () {
                modal.style.display = 'none'
            }, 3000)
        }
    }
})