$(document).ready(function() {
    $('#search').click(function (){
        show_search();
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        let element_1 = $("#search"); // тут указываем ID элемента
        let element_2 = $(".search"); // тут указываем ID элемента
        if (!element_1.is(e.target) // если клик был не по нашему блоку
            && !element_2.is(e.target)) { // и не по его дочерним элементам
            element_2.hide(100); // скрываем его
        }
    });
});

function show_search() {
    $('.search').show(150);
    $('.search').focus();
}