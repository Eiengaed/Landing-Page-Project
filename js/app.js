/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbar = document.getElementById("navbar__list");
let mainSectionCount = document.getElementsByTagName("section");
let test = document.getElementById("section2");
let hamburger = document.querySelector(".hamburger");
let stick = document.querySelectorAll(".stick");
let active = true;
/* let mainChildren = mainSectionCount.getElementsByTagName("section"); */
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/* 
This function creates buttons depending on how many sections the page contains and adds them to the navbar
It also takes the custom data-* attribute of each section and adds it to the buttons innerHTML
*/
console.log(stick);
function addButton(){

 for(const e of mainSectionCount){
  let listElement = document.createElement("li");
  let navbarButton = document.createElement("a");
  let id = e.getAttribute("id");
  navbarButton.href = `#${id}`;
  navbarButton.innerHTML = e.dataset.nav;
  listElement.appendChild(navbarButton);
  navbar.appendChild(listElement);
 }

}
addButton();
/* 
When clicking a button in the navbar, this eventlistener generates the ID of the section, you want to scroll to, by slicing the buttons innerHTML.

Can you tell me in your review if this performs better than anchoring the buttons to the sections?
*/

navbar.addEventListener("click", event =>{

 const target = event.target;
 event.preventDefault();  
 if(target.matches("a")){
  document.querySelector(target.getAttribute("href")).scrollIntoView({behavior: "smooth"});
 }

})
/* This eventlistener hides the navbar when the hamburger icon is clicked and unhiddes it when clicked again
 */
hamburger.addEventListener("click", event =>{
  if(active){
    navbar.style.display = "none";
    active = false;
  }else{
    active = true;
    navbar.style.display = "inline-block";
  }
})
/* 
This eventlistener checks, when you scroll
*/
document.addEventListener("scroll", event =>{ 
 
 for(let element of mainSectionCount){
   let rect = element.getBoundingClientRect().top;
   let id = element.getAttribute("id");
   if(rect < 500 && rect > -250){
    element.classList.add("your-active-class");
    console.log(element.style.backgroundColor);
    document
        .querySelector(`a[href = '#${id}']`)
        .classList.add('active');
   }else{
    element.classList.remove("your-active-class");
    document
        .querySelector(`a[href = '#${id}']`)
        .classList.remove("active");
   }
 }

})




