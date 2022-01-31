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
function addButton(){

 for(const e of mainSectionCount){
  let navbarButton = document.createElement("button");
  navbarButton.innerHTML = e.dataset.nav;
  navbar.appendChild(navbarButton);
 }

}
addButton();
/* 
When clicking a button in the navbar, this eventlistener generates the ID of the section, you want to scroll to, by slicing the buttons innerHTML.

Can you tell me in your review if this performs better than anchoring the buttons to the sections?
*/
navbar.addEventListener("click", event =>{
 const target = event.target;

 if(target.matches("button")){
  let sectionNumber = target.innerHTML.slice(-1);
  document.getElementById("section" + sectionNumber).scrollIntoView();
 }

})

/* 
This eventlistener checks, when you scroll
*/
document.addEventListener("scroll", event =>{ 
 
 for(element of mainSectionCount){
   let rect = element.getBoundingClientRect().top;
   if(rect < 500 && rect > -250){
    element.classList.add("your-active-class");
   }else{
    element.classList.remove("your-active-class");
   }
 }

})




