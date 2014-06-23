'use strict'

function slider() {
	$('#faqs>p').each(function() {
			var tis = $(this), state = false, answer = tis.next('div').hide().css('height','0%').slideUp();
			tis.click(function() {
					state = !state;
					answer.slideToggle(state);
					tis.toggleClass('active',state);
			});
	});
}