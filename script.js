
			const goToTop = function () {
				document.body.scrollTop = 0; 
				document.documentElement.scrollTop = 0; 
			};
			document
				.querySelector(".go-to-top-button")
				.addEventListener("click", goToTop);
  //produkt page script
  const photoList = [
	"plante1",
	"plante2",
	"plante3"
	
];
const image = document.querySelector("#myImg");

document.addEventListener("click", change);
  function change() {
	  image.src = "images/plante3.png"
	 
  }