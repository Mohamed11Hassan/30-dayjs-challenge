let clockBody = document.getElementById('clock-body');
	
for(let i = 1;i <= 60;i++){
	clockBody.appendChild(document.createElement('div')).setAttribute('class', 'clock-num');
}

let clockNumbers = [...document.querySelectorAll('.clock-num')];


for(let i = 0;i <= 59;i++){
	clockNumbers[i].style.cssText = `transform: translate(-50%, 0) rotate(${i * 6}deg)`;
}

let secHand = document.getElementById('secHand'),
 	minHand = document.getElementById('minHand'),
 	hourHand = document.getElementById('hourHand');

	let dateObj2 = new Date(),
	secs2 = dateObj2.getUTCSeconds(),
	mins2 = dateObj2.getUTCMinutes(),
	hours2 = ((dateObj2.getUTCHours() + 2) % 12);

	secHand.style.cssText = `transform: translate(0%, -50%) rotate(${((secs2 / 60) * 360) + 90}deg)`;
	minHand.style.cssText = `transform: translate(0%, -50%) rotate(${((mins2 / 60) * 360) + 90}deg)`;
	hourHand.style.cssText = `transform: translate(0%, -50%) rotate(${((hours2 / 12) * 360) + 90 + ((mins2 / 60) * 30)}deg)`;

setInterval(() => {
	let dateObj = new Date(),
	secs = dateObj.getUTCSeconds(),
	mins = dateObj.getUTCMinutes(),
	hours = ((dateObj.getUTCHours() + 2) % 12);


	// handling the seconds clock hand rotation 
	if(secs == 0) {

		secHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
		secHand.style.transform = `translate(0%, -50%) rotate(${450}deg)`;

		setTimeout(function() {
			secHand.style.transition = 'none';
			secHand.style.transform = `translate(0%, -50%) rotate(${90}deg)`;
		}, 610);

	} else if(secs != 0){
		secHand.style.transform = `translate(0%, -50%) rotate(${((secs / 60) * 360) + 90}deg)`;
		secHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
	}

	// handling the mins clock hand rotation 
	if(mins == 0 && secs == 0) {

		minHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
		minHand.style.transform = `translate(0%, -50%) rotate(${450}deg)`;

		setTimeout(function() {
			minHand.style.transition = 'none';
			minHand.style.transform = `translate(0%, -50%) rotate(${90}deg)`;
		}, 610);

	} else {
		minHand.style.transform = `translate(0%, -50%) rotate(${((mins / 60) * 360) + 90}deg)`;
		minHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
	}

	if(hours == 0 && secs == 0) {
		hourHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
		hourHand.style.transform = `translate(0%, -50%) rotate(${450}deg)`;

		setTimeout(function() {
			hourHand.style.transition = 'none';
			hourHand.style.transform = `translate(0%, -50%) rotate(${90}deg)`;
		}, 610);

	} else {
		hourHand.style.transition = 'all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s';
		hourHand.style.cssText = `transform: translate(0%, -50%) rotate(${((hours2 / 12) * 360) + 90 + ((mins2 / 60) * 30)}deg)`;
	}

}, 1000);

