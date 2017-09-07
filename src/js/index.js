// document.write('<script src="../lib/jquery-3.2.1.js"></script>');
//顶部收缩
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
    // 导航条的拉入拉出
$cate = $('.category-details');
$item = $('.item');
$item.each(function(idx, ele) {
    $(this).hover(function() {
        $cate.eq(idx).css('display', 'block');
    }, function() {
        $cate.eq(idx).css('display', 'none');
    });
});
// 左侧导航条
$lis = $('.right-side-menu .menu-top>li');
$span = $('.right-side-menu .menu-top>li>span');
$lis.each(function(idx, ele) {
    $(this).hover(function() {
        $(ele).css('background', '#e3393c');
        $span.eq(idx).css({
            'display': "block",
            'right': '40px',
            'opacity': '1'
        });
        $span.eq(1).css('display', 'none');
    }, function() {
        $(ele).css('background', 'none');
        $span.eq(idx).css({
            'display': "none",
            'right': '60px',
            'opacity': '0'
        });
    });
});
// 首页数据的生成
aaa('推荐');
aaa('帮你选酒');
aaa('帮你选酒1');
aaa('白酒馆');
aaa('白酒馆1');
aaa('葡萄酒');
aaa('葡萄酒1');
aaa('洋酒');
aaa('洋酒1');

function aaa(a) {
        $.ajax({
            type: 'GET',
            url: 'api/indexdata.php',
            data: {
                'shuoming': a
            },
            success: function(d) {
                var $tui = $.parseJSON(d);
                $.each($tui, function(index, ele) {
                    switch (a) {
                        case '推荐':
                            $('.sul').html($.map($tui, function(ele, idx) {
                                return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '帮你选酒':
                            $('.bangul').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '帮你选酒1':
                            $('.bangul1').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '白酒馆':
                            $('.baijiuul').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '白酒馆1':
                            $('.baijiuul1').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '葡萄酒':
                            $('.putaojiuul').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '葡萄酒1':
                            $('.putaojiuul1').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '洋酒':
                            $('.yangjiuul').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                        case '洋酒1':
                            $('.yangjiuul1').html($.map($tui, function(ele, idx) {
                                 return `<li><a href=./html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&shuoming="${encodeURI(ele.shuoming)}"><img src="${ele.url}"></a></li>`;
                            }).join(""));
                            break;
                    }
                });
            }
        });
    }
    // 楼层导航
$(window).on('scroll', function() {
    $ul = $('.floor-nav');
    $lis = $ul.find('li');
    $floor = $('.floor');
    $scrollTop = $(window).scrollTop();
    if ($scrollTop > 800) {
        $('.floor-nav').fadeIn();
    } else {
        $('.floor-nav').fadeOut();
    }
    $floor.each(function(idx, ele) {
        if ($scrollTop > $(ele).offset().top - $(ele).outerHeight() / 2) {
            $lis.eq(idx).addClass('loucur').siblings('li').removeClass('loucur');
        }
    });
    $ul.on('click', 'li', function() {
        var idx = $(this).index();
        var targetTop = $floor.eq(idx).offset().top;
        $('html,body').stop().animate({
            'scrollTop': targetTop
        });
    })
});
// tubiaoanniu
var $neirongul = $(".neirong>ul");
var $len = $(".neirong>ul>.neirong1").length;
var $idx = 0;

function nextbox() {
    if ($idx > $len - 1) {
        $idx = 0;
    }
    $neirongul.stop().animate({
        left: -$idx * 220 + "px"
    });
}

function prevbox() {
    console.log($len);
    if ($idx == -1) {
        $idx = $len - 1;
    }
    $neirongul.stop().animate({
        left: -$idx * 220 + "px"
    });
}
$('.tubiao>i:first-child').on('click', function() {
    $idx++;
    nextbox();
    console.log($idx);
})
$('.tubiao>i:nth-child(2)').on('click', function() {
    $idx--;
    prevbox();
    console.log($idx);
})
$('.floors').on('click', 'li', function() {
    console.log($(this));
    if ($(this).is('li')) {
        $(location).attr('href', 'http://www.jb51.net');
    }
})
$('.content_right_img>ul').eq(0).css('display', 'block');
$('.floor_title>ul>li').hover(function() {
    var idx = $(this).index();
    $(this).addClass('liactive');
    console.log($('.content_right_img>ul').eq(idx));
    $('.content_right_img>ul').eq(idx).css('display', 'block');
}, function() {
    var idx = $(this).index();
    $(this).removeClass('liactive');
    $('.content_right_img>ul').eq(idx).css('display', 'none');
});