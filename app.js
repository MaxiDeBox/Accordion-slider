const sliders = document.querySelectorAll('.slide');

for (const slide of sliders) {
	slide.addEventListener('click', () => {
		clearActiveSlides();
		slide.classList.add('active');
	});
}

function clearActiveSlides() {
	sliders.forEach((slide) => {
		slide.classList.remove('active');
	});
}