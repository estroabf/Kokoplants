var main = document.querySelector('.main');
var nav = document.querySelector('.logo-img');


 offset = main.offsetHeight-nav.offsetHeight;

 window.onscroll = function() {
   if(window.pageYOffset > offset){
      nav.classList.remove('logo-image');
      nav.classList.add('logo-image-hidden');
   } else {
     nav.classList.add('logo-image');
     nav.classList.remove('logo-image-hidden');
    
   }
 }