console.log(document.cookie);
var cookies=document.cookie;
if(cookies.length>1){
    cookies=cookies.split('; ');
    cookies.forEach(function(item){
        var arr = item.split('=');
            if(arr[0]=='goods'){
                goods=JSON.parse(arr[1]);
            }
    })
}
    var total=0;
    document.getElementById('detail').innerHTML=goods.map(function(item){
    total=item.qty*item.price;
    return `<ul data-id="${item.id}" class='shoppingul'><li><input type="checkbox"><img src="${item.url}"/><span>${item.title}</span></li><li class='price'>${item.price}</li><li><span class='xia'>-</span>
    <input value=${item.qty} class='sl'><span class='shang'>+</span>
    </li><i class='sum'></i>
    <li><b>删除</b></li></ul>`;
    }).join('');
var xia=document.querySelectorAll('.xia');
var shang=document.querySelectorAll('.shang');
var sl=document.querySelectorAll('.sl');
var price=document.querySelectorAll('.price');
var sum=document.querySelectorAll('.sum');

for(var i=0;i<shang.length;i++){
    shang[i].index=i;
    shang[i].onclick=function(){
        var _this=this.index;
        sl[this.index].value=sl[this.index].value*1+1;
        // sum[this.index].innerHTML=price[this.index].innerHTML*sl[this.index].value;
    }
    jisuan();
}
for(var i=0;i<xia.length;i++){
    xia[i].index=i;
    xia[i].onclick=function(){
        var _this=this.index;
        sl[this.index].value=sl[this.index].value*1-1; 
        // sum[this.index].innerHTML=price[this.index].innerHTML*sl[this.index].value;
        
    }
    jisuan();
}
// function jisuan(){
//     var zong=0;
// for(var i=0;i<sum.length;i++){
//     zong+=sum[i].innerHTML*1;   
// }

// // console.log(zong)
// }
// jisuan();
//     var ul=this.parentNode.parentNode;
//     goods.forEach(function(item,idx){
//         if(item.id ==ul.getAttribute('id') ){
//             item.qty=sl[_this].innerHTML*1;
//         }
//     })
// }
var input=document.querySelectorAll('input');
$('.all').on('click',function(){
        $(':checkbox').prop('checked',this.checked);
            var sum=0;
            $(".sl").each(function(){
               sum+=parseInt($(this).val());  
            });
            // console.log(sum); 
            // console.log($(' .jian'))
        $('.jian').html(''); 
        $('.jian').html(sum);
        var count=0;
        $('.shoppingul').each(function($index,$el) {
            var a=$($el).children().eq(1).html();
            var b=$($el).children().eq(2).children().eq(2).val();
            count=a+b;
            $('.jiesuan>em>i').html(0);
            $('.jiesuan>em>i').html(count);
        })
});
   
});
$('ul').on('click','b',function(){
    var ul=this.parentNode.parentNode;
    var id=ul.getAttribute('data-id');
    console.log(id)
    // console.log(this)
    // var idx=$(this).index(); 
    // console.log(idx)
    goods.forEach(function(item,idx){
        if(item.id === id){
            goods.splice(idx,1);
            $('ul')[idx+1].remove();
            console.log(goods)
        }
    });
    var _now = new Date();
    _now.setDate(_now.getDate()+7);
    document.cookie = "goods="+JSON.stringify(goods) + ";path=/;expires=" + _now;
})





