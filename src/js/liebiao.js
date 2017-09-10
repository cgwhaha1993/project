
$qty=5;
$yema=1;
$page=$('.page');

function show(a,b){
  $.ajax({
    url: '../api/liebiao.php',
    type: 'GET',
    data: {'type':'a','yema':a,'qty':b},
    success:function(d){
        console.log(d);
        $lie=$.parseJSON(d);
        $('ul').html($.map($lie.data, function(ele, index) {
            return `<li><a href=../html/detail.html?id="${encodeURI(ele.id)}"&url="${encodeURI(ele.url)}"&price="${encodeURI(ele.price)}"&title="${encodeURI(ele.title)}"&success="${encodeURI(ele.success)}"><div><img src="${ele.url}"><div class="oprice"><strong>"${ele.price}"</strong><span class="fr"><b>"${ele.success}"</b></span></div><p class="pp">"${ele.title}"</p></div></a></li>`;
        }).join(''));
        
        $duoshaoye=Math.ceil($lie.total/$qty);
        for($i=0;$i<=$duoshaoye;$i++){
            $span=$('<span/>');
            if($i===$yema){
                $span.addClass('active');
            }
            $span.html('');
            $span.html($i+1);
            $span.appendTo($page);
        }
    }
})  
}
show();

$page.on('click','span',function(e){
    console.log(e.target);
    if(e.target.tagName.toLowerCase()=='span'){
        $page.html('');
        show(e.target.innerHTML,2);
    }
})
