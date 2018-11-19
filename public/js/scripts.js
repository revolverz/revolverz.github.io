
$(function(){

	$(".main-content").on("mouseover", ".j-main-content__item", function(){

		var $tabs = $('.j-main-content__item');
        var $cont = $(".j-main-content__poster");
        var $numbers = $(".j-main-content__number");

		$tabs.removeClass("main-content__item_type_active-bg");
        $cont.removeClass("main-content__poster_type_active-poster");
        $numbers.removeClass("main-content__number_type_active-number")
        
		$(this).addClass("main-content__item_type_active-bg");
        $cont.eq($(this).index()).addClass("main-content__poster_type_active-poster");
        $numbers.eq($(this).index()).addClass(" main-content__number_type_active-number");

		return false;
	});
});