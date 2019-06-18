const portfolio = {};

portfolio.$this = $(`this`);
portfolio.$a = $(`a`);
portfolio.$toolboxIcon = $(`toolboxIcon`);
portfolio.$toolbocIconLabel = $(`toolboxIconLabel`);
portfolio.$hamburger = $('.hamburger');
portfolio.$ul = $(".nav ul");
portfolio.$li = $('nav ul li');

portfolio.typed = new Typed("#typed", {
  strings: [
    "",
    "^5000Javacsirpt ^300",
    "Javascript",
    "Javascript Enthusiast.^2000",
    "^900Front-End Developer."
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
	// portfolio.$toolboxIcon.on(`click`, function(e) {
  //   e.preventDefault();
  //   $(`#htmlIcon`).addClass(`.border`);
  // });
}

portfolio.hamburgerHover = () => {
	portfolio.$hamburger.hover(function () {
		$(this).toggleClass('hover');
	});
}

portfolio.hamburgerClick = () => {
	portfolio.$hamburger.click(function () {
		portfolio.$hamburger.toggleClass('open')
		if (portfolio.$hamburger.hasClass('open')) {
			portfolio.$ul.css('top', '75px');
		} else {
			portfolio.$ul.css('top', '-300px');
		}
	});
};

portfolio.navLinkClick = () => {
	portfolio.$li.click(function () {
		if (portfolio.$hamburger.hasClass('open')) {
			portfolio.$ul.css('top', '-300px');
			portfolio.$hamburger.toggleClass('open')
		}
	});
};

portfolio.init = () => {
	portfolio.smoothScroll();
	portfolio.toolClick();
	portfolio.hamburgerHover();
	portfolio.hamburgerClick();
	portfolio.navLinkClick();
}

$(function () {
	portfolio.init();
});