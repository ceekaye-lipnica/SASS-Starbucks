const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
toggleMenu.classList.toggle("open");
headNav.classList.toggle("open");
header.classList.toggle("open");
});

/* COFFEE TAB */
const starNav = document.querySelectorAll(".star__nav__link");
const starContent = document.querySelectorAll(".coffee__tab__content");

starNav.forEach((star) => {
	star.addEventListener("click", () => {
		removeActiveStar();
		star.classList.add("active");
		const activeContent = document.querySelector(`#${star.id}-content`);
		removeActiveContent();
		activeContent.classList.add("active");
		// starTransition.style=("transition: .5s ease;");
		starContent.style=("transition: .8s ease in and out;");

	});
});

function removeActiveStar() {
	starNav.forEach((star) => {
		star.classList.remove("active");
		star.style=("transition: .5s ease;");
	});
}

function removeActiveContent() {
	starContent.forEach((star) => {
		star.classList.remove("active");
		star.style=("transition: .5s ease;");
	});
}