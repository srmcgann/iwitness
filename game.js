function draw(v){
  var h,br,el,direction=v<lastScrollTop?-1:1;
  lastScrollTop=v;
  if(window.innerWidth>(h=window.innerHeight)){
    el=document.getElementsByClassName("whistleBlowingGraphic")[0];
    el.style.background=`url(protestor${1+(frame%3)|0}.png) no-repeat 50% 0`;
    el.style.backgroundSize="50vw";
    el=document.getElementsByClassName("searchGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(search${1+(frame%3)|0}.png) no-repeat ${Math.min(0,(h/3-br.top)*20)}% 0`;
    el.style.backgroundSize="50vw";
    el=document.getElementsByClassName("justiceGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(justice${1+(frame%3)|0}.png) no-repeat ${-Math.min(0,(h/3-br.top)*20)}% 0`;
    el.style.backgroundSize="50vw";
    el=document.getElementsByClassName("phoneIDGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(phoneID${1+(frame%3)|0}.png) no-repeat ${-Math.min(0,(h/3-br.top)*20)}% 0`;
    el.style.backgroundSize="50vw";
  }else{
    el=document.getElementsByClassName("whistleBlowingGraphic")[0];
    el.style.background=`url(protestor${1+(frame%3)|0}.png) no-repeat 50% 0`;
    el.style.backgroundSize="80vw";
    el=document.getElementsByClassName("searchGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(search${1+(frame%3)|0}.png) no-repeat ${Math.min(50,(h/2-br.top))}% 0`;
    el.style.backgroundSize="80vw";
    el=document.getElementsByClassName("justiceGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(justice${1+(frame%3)|0}.png) no-repeat ${-Math.min(-50,(h/2.5-br.top))}% 0`;
    el.style.backgroundSize="80vw";
    el=document.getElementsByClassName("phoneIDGraphic")[0];
    br=el.getBoundingClientRect();
    el.style.background=`url(phoneID${1+(frame%3)|0}.png) no-repeat ${Math.min(50,(h/2.5-br.top))}% 0`;
    el.style.backgroundSize="80vw";
  }
  frame+=direction/12;
}
var frame=99;
preloadImages = Array(12);
(preloadImages[0] = new Image()).src="protestor1.png";
(preloadImages[1] = new Image()).src="protestor2.png";
(preloadImages[2] = new Image()).src="protestor3.png";
(preloadImages[3] = new Image()).src="search1.png";
(preloadImages[4] = new Image()).src="search2.png";
(preloadImages[5] = new Image()).src="search3.png";
(preloadImages[6] = new Image()).src="phoneID1.png";
(preloadImages[7] = new Image()).src="phoneID2.png";
(preloadImages[8] = new Image()).src="phoneID3.png";
(preloadImages[9] = new Image()).src="justice1.png";
(preloadImages[10] = new Image()).src="justice2.png";
(preloadImages[11] = new Image()).src="justice3.png";

var lastScrollTop = 0;
window.addEventListener("resize", function(){ draw(0); });
window.onload = function(){
  window.onscroll = function(){
    draw(window.pageYOffset || document.documentElement.scrollTop);
  }
}