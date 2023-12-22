$(window).scroll(function() {
    var scroHei = $(window).scrollTop();
    if (scroHei > 500) {
        $("#rocket").addClass("show");
    } else {       
       $("#rocket").removeClass("show");
    }
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

