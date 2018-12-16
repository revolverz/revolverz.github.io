
$( function () {
    var $input = $('.j-input');

    $input.on('focus', function(event) {
        $(event.target).parent().addClass('focus');
    });

    $input.on('blur', function(event) {
        if ($(this).val() == '') {
            $(event.target).parent().removeClass('focus');
            $(event.target).parent().removeClass('wider');
            $(event.target).removeClass('wider');
        } else if  (($(this).val() !== '') && ($(window).width() <= 576)) {
            $(event.target).parent().addClass('wider');
            $(event.target).addClass('wider');
        }
    })
});


    