var theBear = document.getElementById('bear');


var changeUp = function() {
	if (theBear.className == "yogi") {
		theBear.className = "booboo";
	} else {
		theBear.className = "yogi";
	}

}

document.getElementById('change').addEventListener('click', changeUp);