'use strict'
 

 function fontResizerApp() {
 	var button = $('#fontSizeButton');
 	var body = $('body').eq(0);

 	button.on('click', fontResizeHandler);

 	function fontResizeHandler() {

 		var currentSize = body.css('font-size');

 		if(currentSize === '14px') {
 			body.css('font-size', '16px');
 		} else if (currentSize === '16px') {
 			body.css('font-size', '13px')
 		} else {
 			body.css('font-size', '14px');
 		}
 	}
 }