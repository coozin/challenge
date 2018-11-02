init()

function init () {
	var close = document.querySelector('#toggle-close')
	var dropdown = document.querySelector('#dropdown')

	close.style.display = "none"
	dropdown.style.display = "none"
}

function toggle () {
	var close = document.querySelector('#toggle-close')
	var menu = document.querySelector('#toggle-menu')
	var dropdown = document.querySelector('#dropdown')

	if (menu.style.display == "") {
		menu.style.display = "none"
		close.style.display = ""
		dropdown.style.display = ""
	} else {
		menu.style.display = ""
		close.style.display = "none"
		dropdown.style.display = "none"
	}
}