$(document).ready(function() {
    
    $('.menu').on('click', function() {
        $('html').toggleClass('menu-open');
    });

    var sections = $('section')
  , nav = $('.nav__bar')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      $('.tabLink').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      $('.nav__bar').find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
         
    
});


function myFunction(x) {
    x.classList.toggle("change");
  }

