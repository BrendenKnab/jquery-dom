$(document).ready(function () {
    console.log("Let's get ready to party with jQuery!");
});

$('article img').addClass('image-center');

$('article p').last().remove();

$('h1').css('font-size', Math.floor(Math.random() * 100));

$('ol').append('<li>New List</li>');

$('aside').children().remove();
$('aside').append('<p>We Apologize For The List</p>');

const BgColorChange = function () {
    let color = [];
    $('input').each(function () {
        color.push(this.value);
    });

    $('body').css('background-color', `rgb(${color.shift()}, ${color.shift()}, ${color.shift()}`);
}
$('input').on('keyup', BgColorChange);
$('input').on('click', BgColorChange);

$('article img').on('click', () => $('article img').remove())