$(document).ready(function() {
    $("[data-fancybox='gallery']").fancybox({
      animationEffect: "fade",
      transitionEffect: "slide",
      loop: true,
      arrows: true,
      infobar: true,
      buttons: ["close", "fullscreen"],
      caption: true,
      closeButton:"auto",
      infobar:true,
      touch:true,
      autoPlay:{ delay: 2000 },
      slideShow:{
        delay:2000
      }

      // Інші налаштування
    });
  });