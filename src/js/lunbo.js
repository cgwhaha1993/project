var silde=document.querySelector('.silde');
var ul=document.querySelector('.silde-items');
var lis=ul.children;
var index=0;
var lastindex=0;
var len=lis.length;
lis[index].style.opacity=1;
var timer=setInterval(autoplay,3000);
silde.onmouseenter=function(){
    clearInterval(timer);
}
silde.onmouseleave=function(){
    timer=setInterval(autoplay,3000);
}
function autoplay(){
    index++;
    play();
}
function play(){
    if(index>len-1){
        index=0;
    }
    lis[index].style.opacity=1;
    lis[lastindex].style.opacity=0;
    lastindex=index;
}
