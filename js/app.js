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
/* let mainChildren = mainSectionCount.getElementsByTagName("section"); */
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

console.log(navbar);
for(const e of mainSectionCount){
 let navbarButton = document.createElement("button");
 navbarButton.innerHTML = e.dataset.nav;
 navbar.appendChild(navbarButton);
}

navbar.addEventListener("click", event =>{
 target = event.target;
 if(target.matches("button")){
  let sectionNumber = target.innerHTML.slice(-1);
  document.getElementById("section" + sectionNumber).scrollIntoView();
 }
})


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


