$(window).scroll(function() {
    var scroHei = $(window).scrollTop();
    if (scroHei > 400) { 
        $('.back-to-top').css('top',parseInt(window.innerHeight*0.832)-900);
    } else { 
       $('.back-to-top').css('top','-999px');
    }
});

$('.back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
         }, 600);
      })

