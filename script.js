let section = document.querySelector("section");
let icons = document.querySelector(".icon");
icons.onclick = () => {
  section.classList.toggle("dark");
};
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let d;
  d = hour < 12 ? "AM" : "pm";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? (hour = 12) : hour;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.querySelector(".hour-num").innerHTML = hour;
  document.querySelector(".min-num").innerHTML = min;
  document.querySelector(".sec-num").innerHTML = sec;
  document.querySelector(".am-pm").innerHTML = d;
}, 1000);
