let dateObj = new Date(),
	secs = dateObj.getUTCSeconds(),
	mins = dateObj.getUTCMinutes(),
	hours = ((dateObj.getUTCHours() + 2) % 12);

	console.log(hours);
