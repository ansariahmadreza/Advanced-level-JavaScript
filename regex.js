
let input = document.querySelector('.input')

window.addEventListener('keyup', function (event) {
    // if (/09\d{9}/g.test(input.value)) {
    //     console.log("شماره موبایل معتبر است")
    // } else {
    //     console.log('شماره موبایل نامعتبر است')
    // }


    // if (/next\d{2,4}code/g.test(input.value)) {
    //     console.log("مقدار وارد شده صحیح است")
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }

    // if (/miladB+/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/miladB*/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/miladB?/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/milad|ahmadreza/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/milad(ahmadreza|a|b|c)/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/\w{3,}@gmail.com/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }

    // if (/^\d{5}/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }


    // if (/\d{5}$/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }

    // if (/(\+989|0?9)\d{9}/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }

    // if (/(0?9|\+989)\d{9}/g.test(input.value)) {
    //     console.log(input.value)
    // } else {
    //     console.log("مقدار وارد شده غلط است")
    // }



    // if (/^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/g.test(input.value)) {
    //     console.log(input.value);
    // } else {
    //     console.log("Invalid URL");
    // }


    // if (/next(?!\d{5})/g.test(input.value)) {
    //     console.log(input.value);
    // } else {
    //     console.log("مقدار وارد شده فاقد اعتبار است");
    // }


    // if (/(؟<=\d{5})next/g.test(input.value)) {
    //     console.log(input.value);
    // } else {
    //     console.log("Invalid URL");
    // }


    // if (/^(\d{4})-(1[012]|0?[1-9])-(3[01]|2[0-9]|1[0-9]|0?[1-9])$/gm.test(input.value)) {
    //     console.log(input.value);
    // } else {
    //     console.log("مقدار وارد شده فاقد اعتبار است");
    // }

    // if (/^(\d{4})-(1[012]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$/gm.test(input.value)) {
    //     console.log(input.value);
    // } else {
    //     console.log("مقدار وارد شده فاقد اعتبار است");
    // }


    if (/^(\+?989|0?9)\d{2}[- ]?(\d{3})[- ]?(\d{4})$/gm.test(input.value)) {
        console.log(input.value);
    } else {
        console.log("مقدار وارد شده فاقد اعتبار است");
    }


})