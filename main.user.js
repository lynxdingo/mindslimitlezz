// ==UserScript==
// @name          Minds Limitlezz
// @version       1.0
// @updateURL     https://raw.githubusercontent.com/lynxdingo/mindslimitlezz/main.user.js
// @description   Upgrade your Minds experience
// @include       https://www.minds.com/*
// ==/UserScript==

function hideBoosted(){
  // create style element
  const style = document.createElement('style');

  // add CSS styles
  style.innerHTML = `
    m-newsfeed--boost-rotator,
		m-featured-content, 
		.m-newsfeed--boost-sidebar,
		.m-groupGrid__right.m-pageLayout__pane--right {
			display:none
		}

		.m-newsfeed--feed.m-pageLayout__pane--main,
		.m-pageLayout__pane--main.m-pageLayout__pane--main {
			width: 100%;
			max-width: 100%;
		}
	`;

  // append the style to the DOM in <head> section
  document.head.appendChild(style);
}

function init(){
	// listen for load event in the window
	window.addEventListener("load", function () {
  	// do things after the DOM loads fully
  	hideBoosted();
	});
}

init()

