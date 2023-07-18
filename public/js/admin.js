const actve = document.getElementsByClassName("active");
actve[0].classList.remove("active");

const temp = document.getElementsByClassName("nav-links");
const temp2 = temp[0].children;


temp2[0].getElementsByTagName('a')[0].classList.add("active");

let ele = document.getElementsByClassName("details");