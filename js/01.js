$(function () {
    $('.erji').mouseover(function () {
        $(this).children('ul').show();
    })
    $('.erji').mouseout(function () {
        $(this).children('ul').hide();
    })
    $(".tuijianlist li").mouseenter(function () {
        $(this).addClass('active').siblings('li').removeClass('active')
        var idx = $(this).index();
        $('.tuijian>.tuijianinner').eq(idx).addClass('selected').siblings('div').removeClass('selected');
    })

})