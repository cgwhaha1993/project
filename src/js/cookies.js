var p=window.location.search.slice(1).split('&');
console.log(p);
var h1=document.querySelector('h1');
var h2=document.querySelector('h2');
var price=document.querySelector('.price');
console.log(h2);
console.log(price);
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
h2.innerHTML=decodeURI(price);