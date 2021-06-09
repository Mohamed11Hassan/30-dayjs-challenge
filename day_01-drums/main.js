
let sounds = {
	"a" : "sound01.wav",
	"s" : "sound02.wav",
	"d" : "sound01.wav",
	"f" : "sound02.wav",
	"g" : "sound01.wav",
	"h" : "sound02.wav",
};

let drumButtons = [...document.querySelectorAll(".drum-btn")];



function pressedbtn(event){
  let keynum = String.fromCharCode(event.which || event.keyCode).toLowerCase();
  if(sounds.hasOwnProperty(`${keynum}`)) {
  		let buttonSound = new Audio(`sounds/${sounds[`${keynum}`]}`);
			buttonSound.play();

			/*drumButtons.forEach((ele) => {
			ele.classList.remove("active");
		})*/

		document.getElementById(`drum-btn-${keynum}`).classList.add("active");
  }

}

function clickedBtn(event){
	let targetBtn = event.target.getAttribute("id");
		buttonSound = new Audio(`sounds/${sounds[`${targetBtn[targetBtn.length - 1]}`]}`);
		buttonSound.play();
		buttonSound.currentTime = 0;

		document.getElementById(`${targetBtn}`).classList.add("active");

}

function animationFinish() {
	drumButtons.forEach((ele) => {
		ele.classList.remove("active");
	})
}


drumButtons.forEach(function(btn){

	document.onkeypress = pressedbtn;
	btn.onclick = clickedBtn;
	btn.ontransitionend = animationFinish;
	

});