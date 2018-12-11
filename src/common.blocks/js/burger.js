$( function () {
<<<<<<< HEAD
	$('#menuBtn').on('click', function() {
	$('#menuBtn').toggleClass('opened')
	$('#menuContainer').toggleClass('closed');
    });
});
=======
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
>>>>>>> 6e61829c7ca219e1fca8657f7e8e54227dbed472
