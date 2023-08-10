$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 30) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    // toggle menu/nav 

    $('.menu-btn').click(function () {
        $('.navbar .nav-items').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});



function message(){

    alert("Message Sent 😃");
}

