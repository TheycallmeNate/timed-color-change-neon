function changeColors() {
	// Open sign
	$(".open").css("opacity", "1");
	// Welcome sign
	$(".welcome").css("opacity", "1");
	$(".welcome").css("color", "#FF0000");
}

function changeColorsBack() {
	// Open sign
	$(".open").css("opacity", ".3");
	// Welcome sign
	$(".welcome").css("opacity", ".3");
	$(".welcome").css("color", "#7D7D7D");
}

setInterval(changeColors, 3000);
setInterval(changeColorsBack, 6001);