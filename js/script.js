//Randomly selects a color from an array.
function colorRandom() {
  let hoverColors = ['#6FD251','#82D2F7','#B795F3','#E693CB','#E64053','#EEAC5D','#EB8755','#706BE4'];

  let randomNumber = Math.floor(Math.random()*8);
  
  return hoverColors[randomNumber];  
}

//Targetting the Menu toggle button
let menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', menuToggler);

// Applies random color to theground of the button when you hover over the button 
function menuToggler() {
  let menu = document.querySelector('.hide'); 
      menu.classList.toggle('show')
      if (hoverElements[0].style.background != "" && menu.className === 'hide')
      hoverElements[0].style.setProperty('background', ``);
      else (hoverElements[0].style.setProperty('background', `${colorRandom()}`))

      if (window.innerWidth > 819 ) {
        let body = document.querySelector('#body')
        window.scrollTo(0, body.scrollTop)
      }
    } 

//Targetting all elements with the class hover
let hoverElements = document.querySelectorAll('.hover')
hoverElements.forEach(element => element.addEventListener('mouseenter', hoverColorSet));
hoverElements.forEach(element => element.addEventListener('mouseleave', hoverColorRemove));

//Sets the background to a random color on hover
function hoverColorSet() {
    this.style.setProperty('background', `${colorRandom()}`);
}

//Sets the background color back to white after hovering
function hoverColorRemove() {
    this.style.setProperty('background', ``);
}


//Targetting the Arrow to top
let topScroll = document.querySelector('.toTop')

//Changing class name of the Arrow to top when the window scroll position is greater than 300
function toTop() {
let yPosition = window.scrollY;
  if (yPosition > 300 ) {
        topScroll.className = "toTop show-scroll";
  } else  topScroll.className = "toTop";
}

window.addEventListener("scroll", toTop);

//Targets all form elements
let formElement = document.querySelectorAll('input, textarea');

formElement.forEach(element => element.addEventListener('focus', focusOn));
formElement.forEach(element => element.addEventListener('blur', focusOff));

//Changes the colors of both the border and label of the input and text areas on focus.
function focusOn() {
  let target = this.parentNode;
  let label = this.labels;

  let newColor = colorRandom();

  target.style.setProperty('border' , `3px dashed ${newColor}`)
  label[0].style.setProperty('color' , `${newColor}`)
}

//Changes the colors of both the border and label of the input and text areas when focus has left.
function focusOff() {
  let target = this.parentNode;
  let label = this.labels;

  target.style.setProperty('border' , `3px solid var(--main-color)`);
  label[0].style.setProperty('color' , `var(--main-color)`)
}

//Targetting the secitons
let mainHoverItems = document.querySelectorAll('.about, .portfolio, .contact, .skills, .top-hover')

mainHoverItems.forEach(element => element.addEventListener('mouseenter', beforeAfterColor))

//Changes the color of the root element 'random' to a random color -> this changes the ::before and ::after elements colors
function beforeAfterColor() {
  let root = document.documentElement;
  root.style.setProperty('--random', `${colorRandom()}`);
}

//Optional function to change to ANY random color within the RGB spectrum
// function rgbRamdonizer() {
//   let randomColor = Math.floor(Math.random()*255);
//   return randomColor;  
// }

// function testingValue() {
//     let x = `rgb(${rgbRamdonizer()}, ${rgbRamdonizer()}, ${rgbRamdonizer()})`;
//     return x;
// }

// testingValue();
