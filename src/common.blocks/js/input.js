
$( function () {
    var $input = $('.j-input');
    
    $input.on('focus', function(event) {
        $(event.target).parent().addClass('focus');
    });

    $input.on('blur', function(event) {
        if ($(this).val() == '') {
            $(event.target).parent().removeClass('focus');
        }
    });
});