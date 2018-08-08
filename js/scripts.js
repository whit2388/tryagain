
$(document).ready(function() {
	console.log('Hello world!');

	$('.card-body').hover( function() {
			$(this).find('.img-title').fadeIn(300);
		}, function() {
			$(this).find('.img-title').fadeOut(100);
		});
	
	$('#characterLeft').text('250 characters left');
    $('#message').keydown(function () {
        var max = 250;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });
	
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
	});
});
