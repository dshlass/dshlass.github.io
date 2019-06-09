
let menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', menuToggler);


let hoverElements = document.querySelectorAll('.hover')
hoverElements.forEach(element => element.addEventListener('mouseenter', hoverColorSet));
hoverElements.forEach(element => element.addEventListener('mouseleave', hoverColorRemove));

function menuToggler() {
  let menu = document.querySelector('.hide'); 
      menu.classList.toggle('show')
      if (hoverElements[0].style.background != ""&& menu.className === 'hide')
      hoverElements[0].style.setProperty('background', ``);
      else (hoverElements[0].style.setProperty('background', `${colorRandom()}`))
    } 


let topScroll = document.querySelector('.toTop')

function toTop() {
let yPosition = window.scrollY;
  if (yPosition > 300 ) {
        topScroll.className = "toTop show-scroll";
  } else  topScroll.className = "toTop";
}


window.addEventListener("scroll", toTop);

function hoverColorSet() {
    this.style.setProperty('background', `${colorRandom()}`);
}

function hoverColorRemove() {
    this.style.setProperty('background', ``);
}

function colorRandom() {
  let hoverColors = ['#AEFFDA','#82D2F7','#B795F3','#E693CB','#F7F382','#EEAC5D','#EB8755','#706BE4','#AEFFDA'];

  let randomNumber = Math.floor(Math.random()*9);
  
  return hoverColors[randomNumber];  
}

let formElement = document.querySelectorAll('input, textarea');

formElement.forEach(element => element.addEventListener('focus', focusOn));
formElement.forEach(element => element.addEventListener('blur', focusOff));


function focusOn() {
  let target = this.parentNode;
  let label = this.labels;

  let newColor = colorRandom();

  target.style.setProperty('border' , `3px dashed ${newColor}`)
  label[0].style.setProperty('color' , `${newColor}`)
}

function focusOff() {
  let target = this.parentNode;
  let label = this.labels;

  target.style.setProperty('border' , `3px solid var(--main-color)`);
  label[0].style.setProperty('color' , `var(--main-color)`)
}

