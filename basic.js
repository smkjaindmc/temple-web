
var f= document.querySelector(".que");
var z= document.querySelector(".you");
var u= document.querySelector(".quen");
var y= document.querySelector(".tom");
var w= document.querySelector(".joy");
var t=document.querySelector(".why")
var x= document.querySelector(".mon");
var t= document.querySelector(".sk");
var l= document.querySelector("#pop");
var v= document.querySelector("#fat");
var b= document.querySelector("#uo");
var i= document.querySelector("#tem");
var k= document.querySelector("#jer");
var q= document.querySelector("#we");
var col=["orange","red","yellow"];
var m=0;
function shaun(){
    if (m>=col.length){
        m=0;
    }
    else{
        z.style.background= col[m];
        u.style.background= col[m];
        y.style.background= col[m];
        w.style.background= col[m];
        ++m;
    }
}
f.onclick= function(){
       z.style.display="block";
    u.style.display="block";
    y.style.display="block";
    w.style.display="block";
    setInterval(shaun,2000);
    
}
t.onmouseover = function(){
    x.className ='mon rounded-circle animated infinite  bounce';
}

t.onmouseout = function(){
    x.className ='mon rounded-circle';
}
l.onmouseover = function(){
    i.className ='thu rounded-circle animated infinite bounce';
}
l.onmouseout = function(){
    i.className ='thu rounded-circle';
}
v.onmouseover = function(){
   k.className='thu rounded-circle animated infinite bounce';                
}
v.onmouseout = function(){
    k.className ='thu rounded-circle';
}
b.onmouseover = function(){
    q.className='thu rounded-circle animated infinte bounce';
}
b.onmouseout = function(){
    q.className ='thu rounded-circle';
}
var g= document.querySelector(".tor");
var er= document.querySelector(".yoyo");
g.addEventListener('change',function(e){
    if(g.checked){
        er.style.textDecoration='line-through';
    }
    else{
        er.style.textDecoration='none';
    }
})
$(window).load(function() {
  $(".container").twentytwenty();
});
$(".pop").on("click",function(){
   $(".to").slideDown(2000,function(){
      alert("Are you sure you want to take niyam?");
       document.querySelector(".mi").innerHTML= Date();
        $(".mi").slideDown(2000);
       });
})
var r=["orange","white","yellow"];
var f=0;
function show(){
    if(f<r.length){
        document.querySelector(".to").style.color= r[f];
        f=f+1
    }else{
        f=0;
    }
    setTimeout(show,3000);
}
show();


var typed = new Typed(".toy", {
  strings: ["Sabhi jain parivaro se nivedan hai ki rooz mandir aaye. Mandir aane se poorv apne joote chappal jaroor utare.","Aur mandir me sabhi jano se jai jinenedra kahe aur krapya moorti ko peeth na dikhaye.","Mandir me adhik se adhik daan punya kare aur sab ke vikas ke liye soche","Jai Jinendra"],
  typeSpeed: 70,
    backSpeed: 30,
    loop: false
});



 