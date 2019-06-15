const portfolio = {};

portfolio.smoothScroll = () => {
	$(`a`).smoothScroll();
}

portfolio.typed = new Typed('#typed', {
	strings: ["^1300Javacsirpt Enthu", "Javascript Enthusiast.^2000", "^500 Front End Developer.^2000", "^500 Human.^1000", "^500Front End Developer."],
	smartBackspace: true,
	typeSpeed: 50,
	startDelay: 1000,
	backSpeed: 20,
	backDelay: 300,
});

portfolio.init = () => {
	// portfolio.typed();
	portfolio.smoothScroll();
}

$(function () {
	portfolio.init();
$(".toolBoxIcon").hover(
  function() {
    $(this).removeClass("wow slideInLeft");
    $(this).addClass("animated pulse");
  },
  function() {
    // $(this).removeClass("wow pulse");
  }
);

});