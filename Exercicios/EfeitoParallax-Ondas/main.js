var onda1 = document.getElementById('i=onda1')
var onda2 = document.getElementById('i=onda2')
var onda3 = document.getElementById('i=onda3')
var onda4 = document.getElementById('i=onda4')

window.addEventListener('scroll',function(){
    var rolagemPos = window.scrollY
    onda1.style.backgroundPositionX = 400 + rolagemPos * 8 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagemPos * -8 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagemPos * 4 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagemPos * -4 + 'px'
})