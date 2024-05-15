const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];





const giveAway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");




const tempTime = new Date()
const tempYear = tempTime.getFullYear();
const tempMonth = tempTime.getMonth();
const tempDate = tempTime.getDate();



const futureDate = new Date(tempYear, tempMonth, tempDate + 10, 5, 8, 0);





const futureYear = futureDate.getFullYear();

const month = futureDate.getMonth();
const futureMonth = months[month]



// creating a function so that wen hour is less than 10, 0 will be added infront


const futureHour = function () {

    let futureHo = futureDate.getHours();


    if (futureHo < 10) {

        return (futureHo = `0${futureHo}`)
    }
    else {
        return futureHo
    }



}



// creating a function so that wen minuite is less than 10, 0 will be added infront
let futureMinuite = function () {


    let futuremin = futureDate.getMinutes();
    if (futuremin < 10) {

        return (futuremin = `0${futuremin}`)
    }
    else {
        return futuremin
    }

}






let futureSecond = futureDate.getSeconds();



// creating a function so that wen date is less than 10, 0 will be added infront

const futureDay = function () {
    let futureDa = futureDate.getDate();

    if (futureDa < 10) {

        return `0${futureDa}`
    } else {
        return futureDa
    }



}





const Weekday = futureDate.getDay();

const futureWeekday = weekdays[Weekday]




giveAway.innerHTML = `give away ends on ${futureWeekday},
 ${futureDay()} ${futureMonth} ${futureYear}, ${futureHour()}:${futureMinuite()}`






const futureTime = futureDate.getTime();

// activating the countdown timer 

const getRemainingTime = function () {


    const today = new Date().getTime();

    const t = futureDate - today

    // geting items in ms
    /*
    1sec = 1000ms
    1min = 60sec
    1hour = 60mins
    1day = 24hours
     */
    // calcualting
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;


    // geting remaining items

    const remainingDays = Math.floor(t / oneDay)
    const remainingHours = Math.floor((t % oneDay) / oneHour);
    const remainingMinuites = Math.floor((t % oneHour) / oneMinute);
    const remainingSeconds = Math.floor((t % oneMinute) / 1000)

    const display = [remainingDays, remainingHours, remainingMinuites, remainingSeconds]


    const format = function (item) {

        if (item < 10) {
            return (item = `0${item}`)
        }

        return item
    }


    items.forEach(function (item, index) {

        item.innerHTML = format(display[index]);
    })


    if (t < 10) {
        clearInterval(countdown)

        deadLine.innerHTML = `<h4 class="expired">sorry this giveaway has ended</h4>`
    }


}

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();


