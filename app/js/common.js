
$(function () {
    var $topSecul = $('.topSecul');
    var $my_sec = $(".my_sec");
    $('.my').mouseenter(function () {
        $my_sec.stop();
        $my_sec.slideDown("normal");
    })
    $('.my').mouseleave(function () {
        $my_sec.stop();
        $my_sec.slideUp("normal");
    })
    $('.topul').on('mouseenter', '.topuli', function () {
        $topSecul.stop();
        $topSecul.slideDown('normal');
        $(this).children('ul').stop();
        $(this).children('ul').slideDown('slow')
    })
    $('.topul').on('mouseleave', '.topuli', function () {
        $topSecul.stop();
        $topSecul.slideUp('slow');
        $(this).children('ul').stop();
        $(this).children('ul').slideUp('fast')
    })
})