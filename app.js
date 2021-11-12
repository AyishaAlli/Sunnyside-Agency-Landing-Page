const bars = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav');

bars.addEventListener('click', function showMenu(){
    navList.classList.toggle('show')
    console.log('hi')
})
