/**
 * Created by huzhongchun on 16/6/11.
 */

$(function () {
    //初始化页面的高度,保证单页面高度,适配不同的屏幕尺寸
    var _winHeight = $(window).height();
    var scrollHeight = _winHeight - $('.top-bar-area').height() - 10;
    $('.search-list-area').css('height',scrollHeight+'px');

    //左侧分类滑动
    var caregoryScroll = new F.widget.scrollObject({
        id: 'category-scroll',
    });

    //右侧商品滑动
    var caregoryScroll = new F.widget.scrollObject({
        id: 'product-scroll',
    });

    var _winHeight = $(window).height();

    $('.add-category-item').click(function (e) {
        var _top = $(this).offset().top + 34;
        var height = $('.add-category-dialog-box').height();
        if(_top + height > _winHeight){
            _top = _top - height - 34;
        }
        $('.add-category-dialog-box').css('top',_top+'px');

    });
    $('.add-category-dialog-box .category-item').click(function(){
       $(this).parents('.add-category-dialog-box').css('top','1000000px');
        var title = $(this).find('.category-name').html();
        var tpl = '<li class="category-item"><span class="category-name">'+title+'</span></li>';
        $(tpl).insertBefore('.add-category-item');
    });
});