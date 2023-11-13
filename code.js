let r = document.getElementById("red")

let b = document.getElementById("blue")

let g = document.getElementById("green")

const n = document.getElementById("num")

const c = document.getElementById("clr")

const back = document.getElementById("background")

setInterval(f(),3)
function f (){

r = document.getElementById("red")

back.style.background = `rgb(${r.value},${g.value},${b.value})`

c.innerHTML = `rgb(${r.value},${g.value},${b.value})`

}

setInterval(s(),3)
function s (){

b = document.getElementById("blue")

back.style.background = `rgb(${r.value},${g.value},${b.value})`

c.innerHTML = `rgb(${r.value},${g.value},${b.value})`

}

setInterval(h(),3)
function h (){

g = document.getElementById("green")

back.style.background = `rgb(${r.value},${g.value},${b.value})`

c.innerHTML = `rgb(${r.value},${g.value},${b.value})`


}




const bu = document.getElementById("btn")

let i = 0;

let time;

function continuous(){

n.innerHTML = ++i;

time = setTimeout(continuous,200);

}

function stop (){

clearTimeout(time);




}

bu.addEventListener('mousedown',continuous)

bu.addEventListener('mouseleave',stop)

bu.addEventListener('mouseup',stop)