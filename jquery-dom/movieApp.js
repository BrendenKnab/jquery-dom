$('form').on('submit', function () {
    $('<li>').text(`${$('#title').val()} Rating of ${$('#rating').val()}`).appendTo($('ul'));
    $('<button>').text('Remove').appendTo($('ul li:last-child'));
});

$('ul').on('click', 'button', function () {
    $(this).parent().remove();
})