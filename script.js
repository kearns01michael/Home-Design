// Loading Screen 
window.onload = () =>{
  setTimeout(() =>{
    document.querySelector('body').classList.add('display')
  }, 4000)
}



// Sidebar 
document.querySelector(".hamburger-menu").addEventListener("click", ()=>{
 document.querySelector(".container").classList.toggle("change")
})



// Smooth scroll for footer arrow icon 
document.querySelector('.scroll-btn').addEventListener('click',() =>{
  document.querySelector('html').style.scrollBehavior = "smooth"
  setTimeout(() =>{
    document.querySelector('html').style.scrollBehavior = "unset"
  },1000)
})