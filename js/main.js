var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// ARROWS

$('.arrow-1').click(function() {
    $('.owl-prev').click();
})
$('.arrow-2').click(function() {
    $('.owl-next').click();
})
