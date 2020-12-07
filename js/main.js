$(function() {
    $(".green-box").animate({
        "margin-top": "+=200px",
        "opacity": "0.7"

    }, 3000);

    $(".red-box").animate({
        "margin-left": "500px",
        "margin-top": "200px",
        "opacity": "0.7"

    }, 3000);

    $(".blue-box").animate({
        "margin-left": "-=500px",
        "margin-top": "200px",
        "opacity": "0.7"

    }, 3000)

    $(".new").delay(3000).fadeIn(1000)
});