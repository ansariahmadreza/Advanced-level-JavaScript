"use strict";

let inputElem = document.querySelector('.inputElem');


function fetchData() {//// تابع ارسال درخواست
    let cityName = inputElem.value.trim()
    let apiKey = '5a7405f0c4feeb68243b5f049d09eb67';
    let currentWeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${encodeURIComponent(apiKey)}`;

    fetch(currentWeatherData)
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                console.log('مسیر اشتباه است')
            }
        })
        .then((Data) => {
            showData(Data);
        })
        .catch(() => {
            new Error('sorry ;/');
        })

}

inputElem.addEventListener('keydown', (event) => {///تابع اجرای کد
    if (event.key === "Enter") {
        fetchData()
        showTime()
        inputElem.value = ''
    }
});


function showData(Data) {////تابع انتقال داده

    //   const { temp_max, temp_min, temp: currentTemp } = Data.main;

    let temp = document.querySelector('.temp');
    let mainValueElem = document.querySelector('.mainValue');
    let maxTempElem = document.querySelector('.maxTemp');
    let city = document.querySelector('.city');


    let mainValue = Data?.weather?.[0]?.main;
    let sant = 273.15
    let tempMax = Data.main.temp_max - sant;
    let tempMin = Data.main.temp_min - sant;
    let dataTemp = Data.main.temp - sant;


    let resTempMax = Math.ceil(tempMax);
    let resTempMin = Math.ceil(tempMin);
    let resTemp = Math.ceil(dataTemp)

    city.innerHTML = Data.name
    mainValueElem.innerHTML = mainValue;
    maxTempElem.innerHTML = resTempMin + 'C' + '  /  ' + resTempMax + "C";
    temp.innerHTML = resTemp;



};


function showTime() {


    let time = new Date()
    let month = time.getMonth()
    let day = time.getDay()
    let getDate = time.getDate()
    let fullTime = time.getFullYear()




    console.log(day)
    console.log(month)
    console.log(fullTime)
    console.log(getDate)




}





