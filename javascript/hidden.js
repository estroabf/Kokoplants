$(function() {
  $('#take-care-box').hide();

  $('#take-care-btn').on('click',function() {

    $('#take-care-box').slideToggle(2000);

  });

});


//Smooth Scrolling
$('#take-care-btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      }, 800
    );

  }
});