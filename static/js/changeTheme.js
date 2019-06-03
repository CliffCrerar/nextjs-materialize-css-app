function changePageTheme(newThemeName) {
	console.log('newThemeName: ', newThemeName);
	//console.log('changePageTheme: ', changePageTheme);
	var themeChangeEvent = new CustomEvent('changePageTheme');
	console.log('themeChangeEvent: ', themeChangeEvent);

	document.dispatchEvent(themeChangeEvent);
	console.log('document.dispatchEvent(themeChangeEvent): ', document.dispatchEvent(themeChangeEvent));
}

function getPageTheme() {
	console.log('getPageTheme: ', getPageTheme);
}

function setPageTheme() {
	console.log('setPageTheme: ', setPageTheme);
}

export default changePageTheme;
