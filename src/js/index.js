document.write('<script src="../lib/jquery-3.2.1.js"></script>');
$('.wozj,.wzj_detail').mouseover(function(){
    $('.wzj_detail').show();
    $('.firsti').css('transform','rotate(180deg)');
})
$('.wozj,.wzj_detail').mouseleave(function(){
    $('.wzj_detail').hide();
    $('.firsti').css('transform','rotate(0deg)');
})

$('.wx,.wximg').mouseover(function(){
    $('.wximg').show();
})
$('.wx,.wximg').mouseleave(function(){
    $('.wximg').hide();
})
$('.mob,.mobimg').mouseover(function(){
    $('.mobimg').show();
})
$('.mob,.mobimg').mouseleave(function(){
    $('.mobimg').hide();
})
$('.saler,.saler_datail').mouseover(function(){
    $('.saler_datail').show();
    $('.saleri').css('transform','rotate(180deg)');
})
$('.saler,.saler_datail').mouseleave(function(){
    $('.saler_datail').hide();
    $('.saleri').css('transform','rotate(0deg)');
})
$('.daohang,.daohang_detail').mouseover(function(){
    $('.daohang_detail').show();
    $('.daohangi').css('transform','rotate(180deg)');
})
$('.daohang,.daohang_detail').mouseleave(function(){
    $('.daohang_detail').hide();
    $('.daohangi').css('transform','rotate(0deg)');
})


