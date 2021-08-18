const goToTop = function () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};
document.querySelector(".go-to-top-button").addEventListener("click", goToTop);
//produkt page script
const photoList = ["plante1", "plante2", "plante3"];
const image = document.querySelector("#myImg");

document.addEventListener("click", change);
function change() {
	image.src = "images/plante3.png";
}
//butto counter code
const buttonUp = document.querySelector("#btn-count-increase");
const buttonDown = document.querySelector("#btn-count-decrease");
const textFinder = document.querySelector("#text-count");
let countUp = 1;
textFinder.textContent = countUp + "🕺";
buttonUp.addEventListener("click", count);
buttonDown.addEventListener("click", countNed);
function count() {
	if (countUp < 10) {
		countUp += 1;
		textFinder.textContent = countUp;
	}
}
function countNed() {
	if (countUp > 0) {
		countUp -= 1;
		textFinder.textContent = countUp;
	}
}
