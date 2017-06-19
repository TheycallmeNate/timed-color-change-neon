function changeColors() {
	$("h1").css("opacity", "1");
}

function changeColorsBack() {
	$("h1").css("opacity", ".3");
}

setInterval(changeColors, 3000);
setInterval(changeColorsBack, 6001);