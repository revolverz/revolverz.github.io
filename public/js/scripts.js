
/*var items = [
    '.j-main-content__item-01',
    '.j-main-content__item-02',
    '.j-main-content__item-03',
    '.j-main-content__item-04'
];

var change = ".j-main-content__item";

var posters = [
    '.j-main-content__poster-01',
    '.j-main-content__poster-02',
    '.j-main-content__poster-03',
    '.j-main-content__poster-04'
];

var changeСolor = 'main-content__item_type_active-bg';

for (i = 0; i < items.length; i++) {
    $(change[i]).on('mouseover', function(event) {
        $(event.target).addClass('main-content__item_type_active-bg');
    });
    $(change[i]).on('mouseout', function(event) {
        $(event.target).removeClass('main-content__item_type_active-bg');
    });
}*/


$(function(){

	$(".main-content").on("mouseover", ".j-main-content__item", function(){

		var tabs = $('.j-main-content__item'),
		    cont = $(".main-content__poster");

		// Удаляем классы active
		tabs.removeClass("main-content__item_type_active-bg");
		cont.removeClass("main-content__poster_type_active-poster");
		// Добавляем классы active
		$(this).addClass("main-content__item_type_active-bg");
		cont.eq($(this).index()).addClass("main-content__poster_type_active-poster");

		return false;
	});
});