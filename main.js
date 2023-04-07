const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

/* ================ GIVING THE DEADLINE ================== */

let tempDate = new Date(),
  tempYear = tempDate.getFullYear(),
  tempMonth = tempDate.getMonth(),
  tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth + 3, tempDay + 9, 12, 45, 23);
console.log(futureDate);

const day = weekdays[futureDate.getDay()];
// console.log(day);

const date = futureDate.getDate();
// console.log(date);

const month = months[futureDate.getMonth()];
// console.log(month);

const year = futureDate.getFullYear();
// console.log(year);

const hour = futureDate.getHours();
// console.log(hour);

const minute = futureDate.getMinutes();
// console.log(minute);

//selecting the giveaway text from DOM...

const giveaway__deadline = document.querySelector(".giveaway__ends__on span");
// console.log(giveaway__deadline.innerText);
giveaway__deadline.innerText = `${day}, ${date}th ${month} ${year} ${hour}:${minute}pm`;

const counter__items = document.querySelectorAll(".counter__info div");
console.log(counter__items);
/* ======================== SETTING UP THE COUNTER =============== */

function getRemainingTime() {
  const futureTime = futureDate.getTime();
  // console.log(futureTime);

  const currentTime = new Date().getTime();
  // console.log(currentTime);

  const remainingTime = futureTime - currentTime;
  // console.log(remainingTime);

  //1s = 1000ms
  //1min = 60s
  //1hour = 60min
  //1day = 24hour

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const day = Math.floor(remainingTime / oneDay);
  //   console.log(day);

  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  //   console.log(hours);

  const mins = Math.floor((remainingTime % oneHour) / oneMinute);
  //   console.log(mins);

  const secs = Math.floor((remainingTime % oneMinute) / 1000);
  //   console.log(secs);

  const values = [day, hours, mins, secs];

  counter__items.forEach((item, index) => {
    item.innerText = format(values[index]);
  });

  function format(item){
    if(item < 10){
        return item = `0${item}`;
    }else{
        return item;
    }
  }

  if(remainingTime < 0){
    clearInterval(countdown);
    const countdown__end = document.querySelector('.giveaway__counter__container');
    countdown__end.innerText = "Giveaway ended...";
  }
}

let countdown = setInterval(() => {
  getRemainingTime();
}, 1000);

getRemainingTime();
