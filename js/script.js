/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
var hidden = true;

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        if (hidden) {
          $("#sylogo").css('visibility', 'visible');
          hidden = false;
        }
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        if (!hidden) {
          $("#sylogo").css('visibility', 'hidden');
          hidden = true;
        }
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var container = document.querySelector('.isotope');
var msnry = new Masonry( container, {
  // options
  columnWidth: 345,
  itemSelector: '.isotope-item',
  isFitWidth: true
});


// jQuery
/*
var $container = $('.isotope');
// init
$container.isotope({
  // options
  itemSelector: '.isotope-item',
  //animationEngine : 'best-available',
  masonry: {
  columnWidth: 305,
  //isFitWidth: true
},

});


// filter items on button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

*/


$(document).ready(function () {

    $('.projectpopup').popup({
        pagecontainer: '.container',
        transition: 'all 0.3s',
        //scrolllock: true
    });

});

/*
var div = $('.intro-text').hide(),
    news = ['Software developer.', 'Computer science student.'],
    count = 0;

function changeNews() {
    div.fadeIn(1000).delay(4000).fadeOut(800, function() {
        changeNews();
    }).delay(200).text(news[count++])
    if (count == news.length) {
        count = 0;
    }
}

changeNews();


//’secret’ specifies the numerical keystrokes that make up the word “mario”
var secret = "8365826572"; 
var input = "";
var timer;
//The following function sets a timer that checks for user input. You can change the variation in how long the user has to input by changing the number in ‘setTimeout.’ In this case, it’s set for 500 milliseconds or ½ second.
$(document).keyup(function(e) {
   input += e.which;    
   clearTimeout(timer);
   timer = setTimeout(function() { input = ""; }, 500);
   check_input();
});
//Once the time is up, this function is run to see if the user’s input is the same as the secret code
function check_input() {
    if(input == secret) {
        //the code used to reveal mario and the world is then put here           
    }
};
*/
