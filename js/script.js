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
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
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

$(document).ready(function () {

    $('.projectpopup').popup({
        pagecontainer: '.container',
        transition: 'all 0.3s',
        scrolllock: true
    });

});


var div = $('.intro-text').hide(),
    news = ['Software developer and student', 'Based out of Vancouver, BC'],
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

window.onload=function(){
  $('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  infinite: true,
  fade:true,
  cssEase: 'linear',
  touchThreshold: 1000,
  mobileFirst: true,
  arrows: false,
});
}
