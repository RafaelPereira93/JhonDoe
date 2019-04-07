var $menuHamburguer = document.querySelector('.menu-hamburguer');
var $ul = document.querySelector('#header nav ul');

$menuHamburguer.addEventListener('click', function() {
  this.classList.toggle('active');
  $ul.classList.toggle('active');
});


var $navbarHeader = document.querySelector('#header nav');

window.addEventListener('scroll', function() {
  if(this.scrollY > 0) {
    $navbarHeader.classList.add('nav-bar-black');
  } else {
    $navbarHeader.classList.remove('nav-bar-black');
  }
})

// SCROLL SMOOTH
const $alturaMenu = document.querySelector('#header nav').clientHeight;
$('#header nav ul li a').click(function(e) {
  var id = $(this).attr('href'),
    offset = $(id).offset().top - $alturaMenu;
  $('html, body').animate({
    scrollTop: offset,
  }, 500)
})

const home = document.querySelector('#header nav ul li a');

home.addEventListener('click', function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 500);
});







