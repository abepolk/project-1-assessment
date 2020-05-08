console.log('connected');

// Also decrements
const increment = (sign) => {
    interval = parseInt($('#interval-input').val());
    oldVal = parseInt($('h1').text());
    let newVal;
    if (sign === "plus") {
        newVal = oldVal + interval;
    }
    else if (sign === "minus") {
        newVal = oldVal - interval;
    } else {
        console.error("Operation error");
    }
    $('h1').text(newVal.toString());
    if (newVal < 0) {
        $('h1').css('color', 'red');
    } else {
        $('h1').css('color', 'black');
    }
}

$('#plus-button').on('click', function(event) {
    increment("plus");
});

$('#minus-button').on('click', function(event) {
    increment("minus");
});