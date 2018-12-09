$( function () {
$('#menuBtn').on('click', function() {
	if ($('#menuBtn').hasClass('closed')) {
		$("#menuBtn").toggleClass("closed opened")
		$('#menuContainer').toggleClass('closed opened');
	} else if ($('#menuBtn').hasClass('menu-icon opened')) {
		$("#menuBtn").toggleClass("opened closed")
		$('#menuContainer').toggleClass('opened closed');
	}
})
});