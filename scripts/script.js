const portfolio = {};

portfolio.$this = $(`this`);
portfolio.$a = $(`a`);
portfolio.$toolboxIcon = $(`toolboxIcon`);
portfolio.$toolbocIconLabel = $(`toolboxIconLabel`);



portfolio.smoothScroll = () => {
		portfolio.$a.smoothScroll({offset: 0});
}

portfolio.typed = new Typed('#typed', {
	strings: ["", "^5000Javacsirpt ^300", "Javascript", "Javascript Enthusiast.^2000", "Front End Developer."],
	smartBackspace: true,
	typeSpeed: 50,
	backSpeed: 40,
	backDelay: 300,
});

portfolio.init = () => {
	portfolio.smoothScroll();
}

$(function () {
	portfolio.init();

	portfolio.$toolboxIcon.on(`click`, function(e) {
		e.preventDefault();
		$(`#htmlIcon`).addClass(`.border`)
	})

});