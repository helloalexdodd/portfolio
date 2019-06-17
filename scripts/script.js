const portfolio = {};

portfolio.$this = $(`this`);
portfolio.$a = $(`a`);
portfolio.$toolboxIcon = $(`toolboxIcon`);
portfolio.$toolbocIconLabel = $(`toolboxIconLabel`);

portfolio.typed = new Typed("#typed", {
  strings: [
    "",
    "^5000Javacsirpt ^300",
    "Javascript",
    "Javascript Enthusiast.^2000",
    "^900Front End Developer."
  ],
  smartBackspace: true,
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 300
});

portfolio.smoothScroll = () => {
		portfolio.$a.smoothScroll({
      offset: -50,
      easing: "swing",
      speed: 1500
    });
}

portfolio.toolClick = () => {
	portfolio.$toolboxIcon.on(`click`, function(e) {
    e.preventDefault();
    $(`#htmlIcon`).addClass(`.border`);
  });
}

portfolio.init = () => {
	portfolio.smoothScroll();
	portfolio.toolClick();
}

$(function () {
	portfolio.init();

	// $("document").ready(function() {
  //   $(".workImage").hover(function() {
  //     $(".imageOuterOverlay").css("z-index", "1");
  //     $(".imageOverlay").css("visibility", "visible");
	// 	}, function() {
  //     $(".imageOuterOverlay").css("z-index", "0");
  //     $(".imageOverlay").css("visibility", "hidden");
	// 	})
  // }); 

});