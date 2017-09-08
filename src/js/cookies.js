var p=window.location.search.slice(1).split('&');
var h1=document.querySelector('h1');
var h2=document.querySelector('h2');
var price=document.querySelector('.price');
p.forEach(function(item){
    var arr=item.split('=');
    if(arr[0]=='id'){
        id=arr[1];
    }
    if(arr[0]=='url'){
        src=arr[1];
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
console.log(title);
h2.innerHTML=decodeURI(price);

var arr=[];
var cookies = document.cookie;
        if(cookies.length>0){
            // cookies.unshift(cookies);
            cookies = cookies.split(';');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] == 'cartlist'){
                    arr_goods = JSON.parse(arr[1]);
                }
            })
        }
var liji=document.querySelector('.liji');
// var url=document.querySelector('img').url;
var title=document.querySelector('#name>h1').innerHTML;
console.log(title);
var price=document.querySelector('.price').innerHTML;
console.log(price);
var qty=document.querySelector('.text').value;
console.log(qty);
liji.onclick=function(){
    var goods={
        title:title,
        // url:url,
        qty:qty,
        price:price,
    }
    console.log(goods)
    arr.push(goods);
    console.log(arr);
    document.cookie='goods='+JSON.stringify(arr);
}


