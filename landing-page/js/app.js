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
/*eslint-env es6*/

/**
 * Define Global Variables
 *
*/
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let fragment= document.createDocumentFragment ();
let scrollTop = document.getElementById("scrollTop");

/**
 * End Global Variables
 * Start Helper Functions
*/
/**
 * End Helper Functions
 * Begin Main Functions
*/
// build the nav
  sections.forEach((section)=> {

    let listItem = document.createElement('li'); // Create li element
    let text = section.getAttribute ('data-nav');  // Store value of data-nav in Text to use it
    let listText= document.createTextNode (text);           // Create Text node
    let link = document.createElement('a');        // Create anchor element
    let className = document.createAttribute ("class");
      className.value= "menu__link";
    link.setAttributeNode(className);         // Set the class attribute to the anchor
    link.setAttribute('href', '#' +section.id);
    let elem = document.createAttribute("data-link");
    elem.value = section.id;        // data-link="section1" --> for first cycle and so on
    link.setAttributeNode(elem);
    link.appendChild(listText);     // Put the text inside the anchor
    listItem.appendChild(link);  // Put the anchor inside the list item
    fragment.appendChild(listItem);       // Put the list item inside fragment
  })
 navbar.appendChild(fragment);




// Add class 'active' to section when near top of viewport

document.addEventListener("scroll",function(e){
   sections.forEach((section)=> {
     let rect = section.getBoundingClientRect();
           section.classList.remove("your-active-class");
     if (rect.top>=0 && rect.bottom<=1300) {
       section.classList.add("your-active-class");
     }
    });
  });


// Scroll to anchor ID using scrollTO event
const clickToScroll = () => {

  for ( let section of sections ){

    const listId = section.id;

  let link = document.querySelector(`li[data-nav='${listId}']`);

  link.addEventListener("click", function(event) {
    event.preventDefault();
    section.scrollIntoView ({
      behavior: 'smooth'
      });
    });

  }
}
let links = document.querySelectorAll('a');
links.forEach((link) => {
  link.classList.remove('active');
  sections.forEach((section) => {
    let tonav = section.getAttribute ('data-nav');
    if (link.textContent==tonav && section.classList.contains('data_nav')) {
      link.classList.add('active');
    }

  });

});
/**
 * End Main Functions
 * Begin Events
 *
*///
//active link based on active section


// Build menu

// Scroll to section on link click


// Set sections as active
