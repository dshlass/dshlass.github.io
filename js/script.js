
let menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', menuToggler);


let hoverElements = document.querySelectorAll('.hover')
hoverElements.forEach(element => element.addEventListener('mouseenter', hoverColorSet));
hoverElements.forEach(element => element.addEventListener('mouseleave', hoverColorRemove));

function menuToggler() {
  let menu = document.querySelector('.hide'); 
      menu.classList.toggle('show')
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
  let randomNumber = Math.floor(Math.random()*9);
  let hoverColors = ['#AEFFDA','#82D2F7','#B795F3','#E693CB','#F7F382','#EEAC5D','#EB8755','#706BE4','#AEFFDA'];
  return hoverColors[randomNumber];  
}