// document.write('<script src="../lib/jquery-3.2.1.js"></script>');
$('.wozj,.wzj_detail').mouseover(function() {
    $('.wzj_detail').show();
    $('.firsti').css('transform', 'rotate(180deg)');
})
$('.wozj,.wzj_detail').mouseleave(function() {
    $('.wzj_detail').hide();
    $('.firsti').css('transform', 'rotate(0deg)');
})
$('.wx,.wximg').mouseover(function() {
    $('.wximg').show();
})
$('.wx,.wximg').mouseleave(function() {
    $('.wximg').hide();
})
$('.mob,.mobimg').mouseover(function() {
    $('.mobimg').show();
})
$('.mob,.mobimg').mouseleave(function() {
    $('.mobimg').hide();
})
$('.saler,.saler_datail').mouseover(function() {
    $('.saler_datail').show();
    $('.saleri').css('transform', 'rotate(180deg)');
})
$('.saler,.saler_datail').mouseleave(function() {
    $('.saler_datail').hide();
    $('.saleri').css('transform', 'rotate(0deg)');
})
$('.daohang,.daohang_detail').mouseover(function() {
    $('.daohang_detail').show();
    $('.daohangi').css('transform', 'rotate(180deg)');
})
$('.daohang,.daohang_detail').mouseleave(function() {
    $('.daohang_detail').hide();
    $('.daohangi').css('transform', 'rotate(0deg)');
})
$cate = $('.category-details');
$item = $('.item');
$item.each(function(idx, ele) {
    $(this).hover(function() {
        $cate.eq(idx).css('display', 'block');
    }, function() {
        $cate.eq(idx).css('display', 'none');
    });
});

$lis=$('.right-side-menu .menu-top>li');
$span=$('.right-side-menu .menu-top>li>span');
$lis.each( function(idx, ele) {
     $(this).hover(function() {
         $(ele).css('background','#e3393c');
         $span.eq(idx).css({
            'display':"block",
             'right':'40px',
             'opacity':'1'
         });
         $span.eq(1).css('display','none');
     }, function() {
         $(ele).css('background','none');
         $span.eq(idx).css({
            'display':"none",
             'right':'60px',
             'opacity':'0'
         });
     });
});
aaa('推荐');
aaa('帮你选酒');
aaa('白酒馆');
function aaa(a){
    $.ajax({
        type: 'GET',
        url: 'api/indexdata.php',
        data:{
             'shuoming':a
        },
        success:function(d){
           var $tui=$.parseJSON(d);
           $.each($tui,function(index, ele) {
               switch(a){
                case '推荐':
                     $('.sul').html($.map($tui,function(ele, idx){
                            return `<li><img src="${ele.url}"></li>`;
                     }).join(""));
                break;
                case '帮你选酒':
                    $('.bangul').html($.map($tui,function(ele, idx){
                            return `<li><img src="${ele.url}"></li>`;
                     }).join(""));
                break;
                case '白酒馆':
                    $('.baijiuul').html($.map($tui,function(ele, idx){
                            return `<li><img src="${ele.url}"></li>`;
                     }).join(""));
                break;


               }
           });
          
        }

    });
}




