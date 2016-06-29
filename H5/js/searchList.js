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
    })
})