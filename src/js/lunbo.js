var silde=document.querySelector('.silde');
var ul=document.querySelector('.silde-items');
var lis=ul.children;
var index=0;
var lastindex=0;
var len=lis.length;
lis[index].style.opacity=1;
var page=document.createElement('div');
page.classList.add('page');
for(var i=0;i<len;i++){
    var span=document.createElement('span');
    span.innerHTML=i+1;
    span.classList.add('haha');
    if(i==index){
        span.classList.add('cur');
    }
    page.appendChild(span);
}
silde.appendChild(page);
page.onclick=function(e){
    if(e.target.tagName.toLowerCase()==='span'){
        index=e.target.innerText-1;
        play();
    }
}

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
    page.children[index].classList.add('cur');
    page.children[lastindex].classList.remove('cur');
    lastindex=index;
}
