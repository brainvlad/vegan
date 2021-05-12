$(document).ready(function() {
    $('.close-button').click(function (){
        hider($(this));
    });
});

function hider(element) {
    element.parent().parent().hide(300);
}