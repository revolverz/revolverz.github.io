$( function () {
	$('#menuBtn').on('click', function() {
	$('#menuBtn').toggleClass('opened')
	$('#menuContainer').toggleClass('closed');
    });
});