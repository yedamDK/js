document.addEventListener("DOMContentLoaded",function(){  //DOM이 다 생성되고 나면 실행해라
    document.addEventListener("mousemove", function(ev){
    let img = document.querySelector("img");
    img.style.left = ev.clientX+'px';
    img.style.top = ev.clientY+'px';
  })
})  

