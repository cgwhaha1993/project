console.log(document.cookie);

var cookies=document.cookie;
var goods=[];
if(cookies.length>1){
    cookies=cookies.split('; ');
    cookies.forEach(function(item){
    var arr = item.split('=');
        if(arr[0]=='goods'){
            goods=JSON.parse(arr[1]);
        }
    })
}

console.log(goods);
show();
function show(){
    var total=0;
    document.getElementById('deul').innerHTML=goods.map(function(item){
    total=item.qty*item.price;
    return `<li><input type="checkbox"><img src="${item.url}"/><span>"${item.title}"</span></li><li>"${item.price}"</li><li>"${item.qty}"</li><li>删除</li>`;
    })
}
