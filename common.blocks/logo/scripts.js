var content= [
    'j-content-one',
    'j-content-two',
    'j-content-three',
    'j-content-four'
];

var changeTabs = [
    'j-tab-one',
    'j-tab-two',
    'j-tab-three',
    'j-tab-four'
];

for (i = 0; i < changeTabs.length; i++) {
    $( changeTabs[i]).on('mouseover', function(event) {
        n = $(this).index('.changeTabs');
        $(event.target).addClass(changeСolors[n]);
    });
    $(icons[i]).on('mouseout', function(event) {
        $(event.target).removeClass(changeСolors[n]);
    });
}
