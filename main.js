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
	var closeLang = document.querySelector('#toggle-close-lang')
	var lang = document.querySelector('#toggle-lang')
	var dropdownLang = document.querySelector('#dropdown-lang')

	if (lang.style.display == "") {
		lang.style.display = "none"
		closeLang.style.display = ""
		dropdownLang.style.display = ""
	} else {
		lang.style.display = ""
		closeLang.style.display = "none"
		dropdownLang.style.display = "none"
	}
}

function changeLang (lang) {
	var langObject = {
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
	}

	var headingOne = document.getElementsByClassName('lang-heading')[0]
	var headingTwo = document.getElementsByClassName('lang-heading')[1]
	var headingThree = document.getElementsByClassName('lang-heading')[2]
	var sectionOneFirst = document.getElementsByClassName('lang-sec-one')[0]
	var sectionOneSecond = document.getElementsByClassName('lang-sec-one')[1]
	var sectionTwoFirst = document.getElementsByClassName('lang-sec-two')[0]
	var sectionTwoSecond = document.getElementsByClassName('lang-sec-two')[1]
	var paragraphOne = document.getElementsByClassName('lang-paragraph')[0]
	var paragraphTwo = document.getElementsByClassName('lang-paragraph')[1]
	var paragraphThree = document.getElementsByClassName('lang-paragraph')[2]
	var button = document.getElementsByClassName('lang-button')[0]
	var title = document.getElementsByClassName('lang-title')[0]

	headingOne.innerHTML = langObject[lang].headingText
	headingTwo.innerHTML = langObject[lang].headingText
	headingThree.innerHTML = langObject[lang].headingText
	sectionOneFirst.innerHTML = langObject[lang].sectionOneText
	sectionOneSecond.innerHTML = langObject[lang].sectionOneText
	sectionTwoFirst.innerHTML = langObject[lang].sectionTwoText
	sectionTwoSecond.innerHTML = langObject[lang].sectionTwoText
	paragraphOne.innerHTML = langObject[lang].paragraphText
	paragraphTwo.innerHTML = langObject[lang].paragraphText
	paragraphThree.innerHTML = langObject[lang].paragraphText
	button.innerHTML = langObject[lang].buttonText
	title.innerHTML = langObject[lang].titleText
    
  toggleLangDropdown()
}