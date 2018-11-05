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

  switch (lang) {
		case 'eng':
			// english
			headingOne.innerHTML = langObject.english.headingText
			headingTwo.innerHTML = langObject.english.headingText
			headingThree.innerHTML = langObject.english.headingText
			sectionOneFirst.innerHTML = langObject.english.sectionOneText
			sectionOneSecond.innerHTML = langObject.english.sectionOneText
			sectionTwoFirst.innerHTML = langObject.english.sectionTwoText
			sectionTwoSecond.innerHTML = langObject.english.sectionTwoText
			paragraphOne.innerHTML = langObject.english.paragraphText
			paragraphTwo.innerHTML = langObject.english.paragraphText
			paragraphThree.innerHTML = langObject.english.paragraphText
			button.innerHTML = langObject.english.buttonText
			title.innerHTML = langObject.english.titleText

			break;
		case 'ita':
			// italian
			headingOne.innerHTML = langObject.italian.headingText
			headingTwo.innerHTML = langObject.italian.headingText
			headingThree.innerHTML = langObject.italian.headingText
			sectionOneFirst.innerHTML = langObject.italian.sectionOneText
			sectionOneSecond.innerHTML = langObject.italian.sectionOneText
			sectionTwoFirst.innerHTML = langObject.italian.sectionTwoText
			sectionTwoSecond.innerHTML = langObject.italian.sectionTwoText
			paragraphOne.innerHTML = langObject.italian.paragraphText
			paragraphTwo.innerHTML = langObject.italian.paragraphText
			paragraphThree.innerHTML = langObject.italian.paragraphText
			button.innerHTML = langObject.italian.buttonText
			title.innerHTML = langObject.italian.titleText

			break;
		default:
			// latin
			headingOne.innerHTML = langObject.latin.headingText
			headingTwo.innerHTML = langObject.latin.headingText
			headingThree.innerHTML = langObject.latin.headingText
			sectionOneFirst.innerHTML = langObject.latin.sectionOneText
			sectionOneSecond.innerHTML = langObject.latin.sectionOneText
			sectionTwoFirst.innerHTML = langObject.latin.sectionTwoText
			sectionTwoSecond.innerHTML = langObject.latin.sectionTwoText
			paragraphOne.innerHTML = langObject.latin.paragraphText
			paragraphTwo.innerHTML = langObject.latin.paragraphText
			paragraphThree.innerHTML = langObject.latin.paragraphText
			button.innerHTML = langObject.latin.buttonText
			title.innerHTML = langObject.latin.titleText
	}
    
  toggleLangDropdown()
}