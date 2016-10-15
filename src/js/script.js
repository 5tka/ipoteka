$(document).ready(function() {
    $('#header-carousel').owlCarousel({
        items: 1,
        navigation : true,
        loop: true,
        autoplay: true        
    });

    $('#rewivew-wrap').owlCarousel({
        items: 1,
        navigation : true,
        loop: true,
        autoplay: true,
        center: true
    });

    $('.arrow-down').click(function(){
		$("html,body").animate({"scrollTop": $('.header').outerHeight()},1200); 
    });

    $('.footer__call, .serv-btn').on('click',function(){
        $('.ffeedback-form').bPopup({
            closeClass: 'none',
        });
    return false;
    })
});