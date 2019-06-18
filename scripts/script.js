const portfolio = {};

portfolio.$this = $(`this`);
portfolio.$a = $(`a`);
portfolio.$toolboxIcon = $(`toolboxIcon`);
portfolio.$toolbocIconLabel = $(`toolboxIconLabel`);
portfolio.$hamburger = $('.hamburger');
portfolio.$ul = $(".nav ul");
portfolio.$li = $('nav ul li');
portfolio.$li1 = $('nav ul li:nth-of-type(1)');
portfolio.$li2 = $('nav ul li:nth-of-type(2)');
portfolio.$li3 = $('nav ul li:nth-of-type(3)');
portfolio.$li4 = $('nav ul li:nth-of-type(4)');
portfolio.$li5 = $('nav ul li:nth-of-type(5)');

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
			portfolio.$li1.css('top', '75px');
			portfolio.$li1.css('transition', '1.8s ease');
			portfolio.$li2.css('top', '126px');
			portfolio.$li2.css('transition', '1.6s ease');
			portfolio.$li3.css('top', '177px');
			portfolio.$li3.css('transition', '1.4s ease');
			portfolio.$li4.css('top', '228px');
			portfolio.$li4.css('transition', '1.2s ease');
			portfolio.$li5.css('top', '279px');
			portfolio.$li5.css('transition', '1s ease');
		} else {
			portfolio.$li1.css('top', '-300px');
			portfolio.$li1.css('transition', '1s ease');
			portfolio.$li2.css('top', '-300px');
			portfolio.$li2.css('transition', '1.2s ease');
			portfolio.$li3.css('top', '-300px');
			portfolio.$li3.css('transition', '1.4s ease');
			portfolio.$li4.css('top', '-300px');
			portfolio.$li4.css('transition', '1.6s ease');
			portfolio.$li5.css('top', '-300px');
			portfolio.$li5.css('transition', '1.8s ease');
		}
	});
};

portfolio.navLinkClick = () => {
	portfolio.$li.click(function () {
		if (portfolio.$hamburger.hasClass('open')) {
			portfolio.$li1.css('top', '-300px');
			portfolio.$li1.css('transition', '1s ease');
			portfolio.$li2.css('top', '-300px');
			portfolio.$li2.css('transition', '1.2s ease');
			portfolio.$li3.css('top', '-300px');
			portfolio.$li3.css('transition', '1.4s ease');
			portfolio.$li4.css('top', '-300px');
			portfolio.$li4.css('transition', '1.6s ease');
			portfolio.$li5.css('top', '-300px');
			portfolio.$li5.css('transition', '1.8s ease');
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