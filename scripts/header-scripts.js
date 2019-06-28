$(document).ready(function() {
    let screen = $(window).width();

    const headerBackground = screen => {
        if (screen > 1100) {
            $('.hero-bkg-image').css('background-image', "url('./img/home-page/header-image-L.jpg')");
        } else if (screen > 640) {
            $('.hero-bkg-image').css('background-image', "url('./img/home-page/header-image-M.jpg')");
        } else {
            $('.hero-bkg-image').css('background-image', "url('./img/home-page/header-image-S.jpg')");
        }
    };

    $(window).resize(function() {
        screen = $(window).width();
        headerBackground(screen);
    });
    
    headerBackground(screen);
});
