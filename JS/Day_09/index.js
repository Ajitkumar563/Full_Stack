// const d = new Date();

// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(d);
// console.log(typeof d);

// const d1 = new Date(1000);
// console.log(d1)

// console.log(d.getDate());
// console.log(d.getDay());

// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

// const now = Date.now();
// console.log(now);

// const d = new Date("2022-10-20");
// // year / Month / Date / Hour / Minutes / second / millisecond
// const date = new Date(2024,4,28);
// console.log(date.toDateString());

// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// console.log(d);
// console.log(typeof d);
// console.log(d.toString);
// console.log(d.toLocaleDateString);

// Date calculation

// const date1 = new Date();
// const date2 = new Date("2025-04-21");

// console.log(date2-date1);
// difference between date is in millisecond

// Countdown Timer for olympics
// Days , hour, minute, second
const date1 = new Date();
const date2 = new Date("2020-07-14T00:00:00");

const date = date2-date1;
// 1000ko miliscond-mili-second--min--hour
const days = Math.floor(date/(1000*60*60*24));
// console.log(days);
const hour = Math.floor((date/(1000*60*60))%24);
const minute = Math.floor((date/(1000*60*60))%60);
const second = Math.floor((date/(1000*60*60))%60);

console.log(`lympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);