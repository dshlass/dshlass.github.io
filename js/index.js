$(function() {
    
    //smoothScroll functionality
    $('a').smoothScroll({
        offset: -98,
        speed: 1000
    });

    //For the drop-down menu
    $('a').click(function(){
      if ($(window).width() <= 961) {
        $('#toggle').prop('checked', false);
      }
    });
  });

    //For the Resume page
    $('#experience').click(function(){
      $('#resume').prop('checked', false);
      $('#experience').addClass('no-animation');
      $('#education').removeClass('no-animation');
    });
    
    $('#education').click(function(){
      $('#resume').prop('checked', true);
      $('#education').addClass('no-animation');
      $('#experience').removeClass('no-animation');
    });

    $('input, textarea').focus(function(){
      $(this).parent().addClass( "focus");
      $(this).parent().css("color", "#ff4a57")
  });		

    $('input, textarea').blur(function(){
      $(this).parent().removeClass( "focus" );
      $(this).parent().css("color", "#929cad")
    });



//Section to control the navigation menu
navWrapper = document.getElementById("navWrapper");
stickyWrapper= document.getElementById("sticky-wrapper");
scrollToTop = document.getElementById("scrollToTop"); 


function getYPosition() {
  return window.scrollY;
}

function navSticky() {
  if (getYPosition() >= 1 ) {
    navWrapper.className = "nav-wrapper nav-fixed";
  } else {navWrapper.className = "nav-wrapper";
}
};

function navShadow() {
  if (getYPosition() >= 1 ) {
        stickyWrapper.className = "sticky-wrapper drop-down-shadow";
  } else { stickyWrapper.className = "sticky-wrapper";
  }
}

function toTop() {
  if (getYPosition() >= 300 ) {
    scrollToTop.className = "back-to-top back-to-top-show";
  } else {
    scrollToTop.className = "back-to-top";
  }
};

window.addEventListener("scroll", navSticky);
window.addEventListener("scroll", navShadow);
window.addEventListener("scroll", toTop);
