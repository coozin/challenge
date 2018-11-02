init()

function init () {
	var close = document.querySelector('#toggle-close');
	close.style.display = "none";
}

function toggle () {
	var close = document.querySelector('#toggle-close');
	var menu = document.querySelector('#toggle-menu');

	if (menu.style.display == "") {
		menu.style.display = "none";
		close.style.display = "";
	} else {
		menu.style.display = "";
		close.style.display = "none";
	}
}