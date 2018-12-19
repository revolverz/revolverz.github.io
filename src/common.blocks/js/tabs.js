$( function() {
    var $items   = $('.j-main-content__item');
    var $posters = $('.j-main-content__poster');

	$('.j-main-content').on( 'mouseover', '.j-main-content__item', function() {
		$items.removeClass('main-content__item_type_active-bg');
        $posters.removeClass('main-content__poster_type_active-poster');
		$( this ).addClass('main-content__item_type_active-bg');
        $posters.eq( $( this ).index() ).addClass('main-content__poster_type_active-poster');

		return false;
    });   
});
