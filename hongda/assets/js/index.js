$(function () {
    var isChange = true;
    var ischange = true;
    var menu_2_h = $('.menu-2-l').height();
    //折叠面板开关特效
    $('.folder').click(function () {
        if(isChange){
            $(this).parent().animate({'width':'50px'});
            $('.menu-1-top-1').animate({'width':'50px','padding-left':'10px'});
            //css({'width':'50px','padding-left':'10px'})
        }else {
            $(this).parent().animate({'width':'180px'});
            $('.menu-1-top-1').animate({'width':'180px','padding-left':'44px'});
        }
        isChange = !isChange;
        // $(this).parent().parent().css({'width':'50px','overflow':'hidden'})
    })
    //一级选中之后的特效
    $('.menu-1 > li').click(function () {
            //var counts   = $('.menu-2 > li').length + 1;
            var counts   = $(this).children('ul').children('li').length + 1;
            var _height  = menu_2_h * counts;

            //选中当前菜单时，其他菜单样式变换为折叠状态
            $(this).siblings().css({'height':'40px'}).children('a').removeClass('actived');
            //$(this).css({'height':'auto','overflow':'hidden'}).children('a').addClass('actived');
            $(this).animate({'height':_height}).children('a').addClass('actived');
            $(this).children('a').children('span').attr('class','fa fa-sort-desc icon-3');
            $(this).siblings().children('a').children('span').attr('class','fa fa-sort-desc icon-1');
            $(this).siblings().children('ul').children('li').children('a').removeClass('actived');
            $(this).children('ul').children('li').children('a').removeClass('actived');
            //当前一级菜单折叠展开切换特效--待修改
            // if (ischange) {
            //     $(this).css({'height':''});
            //     $(this).animate({'height':_height}).children('a').addClass('actived');
            //     $(this).children('a').children('span').attr('class','fa fa-sort-desc icon-3');
            // }else {
            //     $(this).css({'height':'40px'}).children('a').addClass('actived');
            //     $(this).animate({'height':'40px'});
            //     $(this).children('a').children('span').attr('class','fa fa-sort-desc icon-1');
            // }
            // ischange = !ischange;
            event.stopPropagation();
    })
    //二级菜单选中特效特效
    $('.menu-2 > li').click(function () {
        $(this).siblings().children('a').removeClass('actived');
        $(this).children('a').addClass('actived')
        $(this).parent().parent().children('a').removeClass('actived');
        event.stopPropagation();
    })

})