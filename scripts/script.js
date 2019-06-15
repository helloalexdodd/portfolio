const portfolio = {};

portfolio.smoothScroll = () => {
	$(`a`).smoothScroll();
}

portfolio.typed = new Typed('#typed', {
	strings: ["", "^2800Javacsirpt Enthu", "Javascript Enthusiast.^2000", "^500 Front End Developer."],
	smartBackspace: true,
	typeSpeed: 50,
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