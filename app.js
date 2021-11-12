const bars = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav');

bars.addEventListener('click', function showMenu(){
    navList.classList.toggle('show')
    console.log('hi')
})

const secTwoBtn = document.querySelector('.secTwoBtn');
const secThreeBtn = document.querySelector('.secThreeBtn');

secThreeBtn.addEventListener('mouseover', function (){
    document.getElementById('underlineTwo').style.opacity = '1';
})
secThreeBtn.addEventListener('mouseout', function (){
    document.getElementById('underlineTwo').style.opacity = '0.4';
})

secTwoBtn.addEventListener('mouseover', function (){
    document.getElementById('underlineOne').style.opacity = '1';
})
secTwoBtn.addEventListener('mouseout', function (){
    document.getElementById('underlineOne').style.opacity = '0.4';
})
// Definately need to refractor this. I need to work out how to target multiple class items at one time.