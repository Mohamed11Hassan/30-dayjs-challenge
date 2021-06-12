let clockBody = document.getElementById('clock-body');
	
for(let i = 1;i <= 60;i++){
	clockBody.appendChild(document.createElement('div')).setAttribute('class', 'clock-num');
}

let clockNumbers = [...document.querySelectorAll('.clock-num')];


for(let i = 0;i <= 59;i++){
	clockNumbers[i].style.cssText = `transform: translate(-50%, 0) rotate(${i * 6}deg)`;
}

let secHand = document.getElementById('secHand');

	let dateObj2 = new Date(),
	secs2 = dateObj2.getUTCSeconds(),
	mins2 = dateObj2.getUTCMinutes(),
	hours2 = ((dateObj2.getUTCHours() + 2) % 12);

	secHand.style.cssText = `transform: translate(-50%, 0) rotate(${(6 * secs2) + 180}deg)`;

setInterval(() => {
	let dateObj = new Date(),
	secs = dateObj.getUTCSeconds(),
	mins = dateObj.getUTCMinutes(),
	hours = ((dateObj.getUTCHours() + 2) % 12);

	if(secs == 0) {
		secHand.style.cssText='transition: none';
	}

	secHand.style.cssText = `transform: translate(-50%, 0) rotate(${(6 * secs) + 180}deg);transition: all 0.6s cubic-bezier(0.9, 0, 0, 1) 0s`;

}, 1000);

