init()

function init () {
	var close = document.querySelector('#toggle-close')
	var dropdown = document.querySelector('#dropdown')
	var closeLang = document.querySelector('#toggle-close-lang')
	var dropdownLang = document.querySelector('#dropdown-lang')

	close.style.display = "none"
	dropdown.style.display = "none"
	closeLang.style.display = "none"
	dropdownLang.style.display = "none"

	console.log( getLang() )
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

function toggleLangDropdown () {
	console.log("toggleLangDropdown")
	var closeLang = document.querySelector('#toggle-close-lang')
	var lang = document.querySelector('#toggle-lang')
	var dropdownLang = document.querySelector('#dropdown-lang')

	if (lang.style.display == "") {
		console.log("NEEDS TO OPEN")
		lang.style.display = "none"
		closeLang.style.display = ""
		dropdownLang.style.display = ""
	} else {
		console.log("NEEDS TO CLOSE")
		lang.style.display = ""
		closeLang.style.display = "none"
		dropdownLang.style.display = "none"
	}
}

function getLang () {
  return ({
    latin: {
      titleText: "eyeo website developer challenge",
      sectionOneText: "Section One",
      sectionTwoText: "Section Two",
      headingText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      paragraphText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      buttonText: "Lorem ipsum dolor sit amet",
    },
    english: {
      titleText: "eyeo website developer challenge",
      sectionOneText: "Section One",
      sectionTwoText: "Section Two",
      headingText: "This is some heading text in English",
      paragraphText: "This is some paragraph text in English",
      buttonText: "This is some button text in English",
    }, 
    italian: {
      titleText: "Sfida sviluppatore eyeo",
      sectionOneText: "Sezione Uno",
      sectionTwoText: "Sezione Due",
      headingText: "questo è un esempio di testo di intestazione",
      paragraphText: "questo è un esempio di testo di paragrafo",
      buttonText: "testo del pulsante",
    },
  })
}