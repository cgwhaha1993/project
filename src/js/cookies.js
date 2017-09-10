var p=window.location.search.slice(1).split('&');
var h1=document.querySelector('h1');
var h2=document.querySelector('h2');
var price=document.querySelector('.price');
var img=document.querySelector('.tupian>img')
p.forEach(function(item){
    var arr=item.split('=');
    if(arr[0]=='id'){
        id=arr[1];
    }
    if(arr[0]=='url'){
        url=arr[1];
    }
    if(arr[0]=='price'){
        price=arr[1];
    }
    if(arr[0]=='title'){
        title=arr[1];
    }
    if(arr[0]=='shuoming'){
        shuoming=arr[1];
    }
});
h1.innerHTML=decodeURI(title);
h2.innerHTML=decodeURI(price);
url='../'+url;
$('.tupian>img').attr("src",url);
$('.tupianji .tupian1').attr('src',url);


// var arr=[];
// var cookies = document.cookie;
//         if(cookies.length>0){
//             // cookies.unshift(cookies);
//             cookies = cookies.split(';');
//             cookies.forEach(function(item){
//                 var arr = item.split('=');
//                 if(arr[0] == 'cartlist'){
//                     arr_goods = JSON.parse(arr[1]);
//                 }
//             })
//         }
var jiaru=document.querySelector('.jiaru');
// var url=document.querySelector('img').url;
var title=document.querySelector('#name>h1').innerHTML;
var price=document.querySelector('.price').innerHTML;
var jiaru=document.querySelector('.jiaru');
jiaru.onclick=function(){
    var qty=document.querySelector('.text').value;//数据要在里面获取才会加一;
    var a={
        id:id,//如果没有id就会认为id相同，所有会覆盖之前的东西
        shuoming:shuoming,
        title:title,
        // url:url,
        qty:qty,
        price:price
    }
    var _now =new Date();
    _now.setDate(_now.getDate( )+7);
    var goods='';
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length;i++){
        var b=arr[i].split('=');
        if(b[0]=='goods'){  
            goods=[];       
            JSON.parse(b[1]).forEach( function(item){
                if(a.id==item.id){
                    a.qty=a.qty*1+item.qty*1;
                }else{
                    goods.push(item);
                }
            });
            goods.unshift(a);
        }
    }
    if(goods==''){
        var mei=[];
        mei.unshift(a);
        goods=mei;  
    }
    document.cookie = "goods=" + JSON.stringify(goods)+ ";path=/;expires=" + _now;
 //    console.log(goods)
 //    arr.push(goods);
 //    console.log(arr);
 //    document.cookie='goods='+JSON.stringify(arr);
 // console.log(document.cookie)  
 changeshoppingcart();
}
function changeshoppingcart(){
    var cookies=document.cookie;
     console.log(document.cookie)  
    if(cookies.length>0){
        cookies=cookies.split('; ');
        cookies.forEach(function(item){
            var arr=item.split('=');
            if(arr[0]=='goods'){
                goods=JSON.parse(arr[1]);
            }
        });
    }
    var sum=0;
    goods.forEach(function(item){
        sum+=item.qty*1;
    })
    document.querySelector('#right_cart>em').innerHTML=sum;
}
document.querySelector('#right_cart').onclick=function(){
    window.location.href='../html/shoppingcart.html';
}   











