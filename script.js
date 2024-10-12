const hamburger = document.querySelector('#hamburger')
const closed =document.querySelector('#close')
const navDisplay =document.querySelector('#nav-display')




hamburger.addEventListener('click', ()=>{
    navDisplay.classList.remove('hidden')
    hamburger.classList.add('hidden')
    closed.classList.remove('hidden')
})


closed.addEventListener('click', ()=>{
    navDisplay.classList.add('hidden')
    hamburger.classList.remove('hidden')
    closed.classList.add('hidden')
})