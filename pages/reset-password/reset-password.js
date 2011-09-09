$(document).ready(function() {
	$('.autoclear').each(function(index) {
		if( $(this).val() == '') {
			$(this).val($(this).attr('default'));
		}
	});	
	$('.autoclear').focus(function() {
		if( $(this).val() == $(this).attr('default')) {
			$(this).val('');
		}
	});
	$('.autoclear').blur(function() {
		if( $(this).val() == '') {
			$(this).val($(this).attr('default'));
		}
	});
	
	var url = '/reset-password/includes/set_hash';
	$('#submit').live('click',function() {
		console.log(url);
		$.post(url, $('#email_hash').serialize(), function(json) {
			aql.json.handle(json, $('#response_div'), {
				successMessage: 'Your password reset email has been sent.'
			});
		});
	});
	
});






