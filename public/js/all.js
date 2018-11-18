var items = [
    '.j-main-content__item-01',
    '.j-main-content__item-02',
    '.j-main-content__item-03',
    '.j-main-content__item-04'
];

var posters = [
    '.j-main-content__poster-01',
    '.j-main-content__poster-02',
    '.j-main-content__poster-03',
    '.j-main-content__poster-04'
];

var changeСolor = 'main-content__poster_type_active-poster';

for (i = 0; i < items.length; i++) {
    $(items[i]).on('mouseover', function(event) {
        n = $(this).index('.j-change-color');
        $(event.target).addClass(changeСolor);
    });
    $(items[i]).on('mouseout', function(event) {
        $(event.target).removeClass(changeСolor[n]);
    });
}