"use strict";

let inputElem = document.querySelector('.inputElem');
let wordMe = document.querySelector('.wordMe');
let btnSearch = document.querySelector('.btnSearch')
let adjective = document.querySelector('.adjective')
let talafoz = document.querySelector('.talafoz')
let audioElem = document.querySelector('.audio')
let playAudio = document.querySelector('.playAudio')

function fetchData() {//// تابع ارسال درخواست

    let cityName = inputElem.value.trim()/// برای ادرس دهی مستقیم در api

    let word = `https://api.dictionaryapi.dev/api/v2/entries/en/${cityName}` 

    fetch(word)/// ارسال درخواست
        .then((res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert('کلمه مورد نظر وجود ندارد')
                inputElem.value = '';
                return
            }
        })
        .then((Data) => {
            // console.log(Data)
            showData(Data);
        })
        .catch(() => {
            new Error('sorry ;/');
        })
}

btnSearch.addEventListener('click', function () {
    fetchData(showData);//// برای جلوگیری از ارور دادن تابع فرعی به اصلی یا تابع درخواست به api
    // showData();
})


function showData(Data) {

    let { phonetics, word, meanings } = Data[0]//// گرفتن 3 عنصر از طریق ساختار شکنی
    wordMe.textContent = word
    adjective.textContent = meanings[0].partOfSpeech
    talafoz.textContent = phonetics[0].text
    audioElem.src = phonetics[1].audio /// دادن ادرس فایل به تگ audio
    playAudio.addEventListener('click', () => {/// تنظیم رویداد روی ایکون بلندگو
        if (audioElem) { /// در صورت صحیح بودن کد های بعدی رو اجرا کن
            audioElem.play().catch(error => {
                console.error("Audio failed to play:", error);
            });
        }
    });
    inputElem.value = '';
}
