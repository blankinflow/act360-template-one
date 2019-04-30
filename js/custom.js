// client slider
$('.client_homepage .owl-carousel').owlCarousel({
    // loop: true,
    margin: 20,
    navText:["<img src='images/left.png'>","<img src='images/right.png'>"],
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
            dots:false
        },
        1000: {
            items: 2,
            dots:false
        }
    }
})



$('.brands_home .owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    autoWidth:true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})