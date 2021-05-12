
$(document).ready(function() {
    $('.count_minus').click(function (){
        calculate_price_minus($(this), 'minus');
    });

    $('.count_plus').click(function (){
        calculate_price_plus($(this));
    });
    $('.count-list_plus').click(function (){
        calculate_price_plus($(this));
    });

    $('.chek').click(function (){
        chek($(this));
    });

});

function calculate_price_plus(element, type) {
        let count = parseInt(element.siblings('.count').html());
        element.siblings('.count').html(count+1);
}

function calculate_price_minus(element, type) {
    let count = parseInt(element.siblings('.count').html());
    if(count == 0){
    }else{
        element.siblings('.count').html(count-1);
    }
}

function chek(element) {
    element.fadeOut(0);
    let src = (element.attr("src") === "img/1.png")
        ? "img/chek.png"
        : "img/1.png";
    element.attr("src", src);
    element.fadeIn(150);
}