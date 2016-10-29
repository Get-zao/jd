window.onload=function(){
	var boxx=$('.banner-T')[0];
	var imgs=$('.I3',boxx);
	var cir=$('.Two',boxx);
	var right=$('.Left')[0];
	var left=$('.Right')[0];
	var width=parseInt(getStyle(boxx,'width'));
	var t=setInterval(lunbo,2500);
	var n=0;
	function lunbo(){
		n++;
		if(n>=imgs.length){
			
			n=0;
		}	
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.display='none';
			animate(imgs[i],{display:'none'},800);
			animate(imgs[i],{opacity:0},800);
			cir[i].style.backgroundColor='#3E3E3E';
		}

		// imgs[n].style.display='block';
			animate(imgs[n],{display:'block'},800);
			animate(imgs[n],{opacity:1},800);
		cir[n].style.backgroundColor='red';
	}
	boxx.onmouseover=function(){
		clearInterval(t);
		right.style.display='block';
		left.style.display='block';
	}
// }
	boxx.onmouseout=function(){
		
		t=setInterval(lunbo,2500);
		right.style.display='none';
		left.style.display='none';
	}
	right.onclick=function(){
			lunbo();
		}
	left.onclick=function(){
		n--;
		if(n<0){
			n=imgs.length-1;
		}	
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.display='none';
			cir[i].style.backgroundColor='#3E3E3E';
		}

		imgs[n].style.display='block';
		cir[n].style.backgroundColor='red';
	}
	for(var m=0;m<imgs.length;m++){
		cir[m].index=m;
		cir[m].onclick=function(){
			for(var j=0;j<imgs.length;j++){
			cir[j].style.background='#3E3E3E';
//			imgs[j].style.display='none';
			animate(imgs[j],{display:'none'},800);
			animate(imgs[j],{opacity:0},800);
		}
		cir[this.index].style.background='red';
//		imgs[this.index].style.display='block';
			animate(imgs[this.index],{display:'block'},800);
			animate(imgs[this.index],{opacity:1},800);
		n=this.index;
		}
	}

    var floor=$('.classify');
	var floor_nav=$('.r-nav')[0];
	var floor_li=$('.floor-li',floor_nav);
	var lou=$('.lou',floor_nav);
	var zi=$('.zi',floor_nav);
	var cHeight=document.documentElement.clientHeight;
	var flag=1;
	var flag1=1;
	var n;
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var a=obj.scrollTop;
		var top=floor[0].offsetTop;
			if(a>top-1000){
				if(flag){
					flag=0;
					floor_nav.style.display='block';
						flag1=1;
					}
			}
			if(a<top-1000){
				if(flag1){
					flag1=0;
					floor_nav.style.display='none';
						flag=1;
					}
			}
		var a=obj.scrollTop;
		var top=floor[0].offsetTop;
		for(var i=0;i<floor.length;i++){
				 floor[i].h=floor[i].offsetTop;
				if(a>=floor[i].h-100){
					
					for(var m=0;m<floor_li.length;m++){
						floor_li[m].index=m;
						lou[m].style.display='block';
						zi[m].style.display='none';
					}
					lou[i].style.display='none';
					zi[i].style.display='block';
				}
			}
			for(var i=0;i<floor_li.length;i++){
				floor_li[i].index=i;
				floor_li[i].onclick=function(){
					animate(document.body,{scrollTop:floor[this.index].h-100})
					animate(document.documentElement,{scrollTop:floor[this.index].h-300})
					n=this.index;
				}
				floor_li[i].onmouseover=function(){
					lou[this.index].style.display='none';
						zi[this.index].style.display='block';
					
				}
				floor_li[i].onmouseout=function(){
					if(n==this.index){
						return;
					}
					lou[this.index].style.display='block';
					zi[this.index].style.display='none';
				}
			}
	}

	var bb=$('.left')[0];
	var box1=$('.more-WZ')[0];
		hover(bb,function(){
			bb.style.background='#fff';
			box1.style.display='block';
		},
		function(){
			bb.style.background='#DDDDDD';
			box1.style.display='none';
		})

	var wode=$('.wode')[0];
	var wai=$('.wai')[0];
		hover(wode,function(){
			wode.style.background='#fff';
			wai.style.display='block';
		},
		function(){
			wode.style.background='#DDDDDD';
			wai.style.display='none';
		})
	var shouji=$('.shouji')[0];
	var shouji_wai=$('.shouji-wai')[0];
		hover(shouji,function(){
			shouji.style.background='#fff';
			shouji_wai.style.display='block';
		},
		function(){
			shouji.style.background='#DDDDDD';
			shouji_wai.style.display='none';
		})
	var guanzhu=$('.guanzhu')[0];
	var guanzhu_wai=$('.guanzhu-wai')[0];
		hover(guanzhu,function(){
			guanzhu.style.background='#fff';
			guanzhu_wai.style.display='block';
		},
		function(){
			guanzhu.style.background='#DDDDDD';
			guanzhu_wai.style.display='none';
		})
	var kefu=$('.kefu')[0];
	var kefu_wai=$('.kefu-wai')[0];
		hover(kefu,function(){
			kefu.style.background='#fff';
			kefu_wai.style.display='block';
		},
		function(){
			kefu.style.background='#DDDDDD';
			kefu_wai.style.display='none';
		})
	var daohang=$('.daohang')[0];
	var daohang_wai=$('.daohang-wai')[0];
		hover(daohang,function(){
			daohang.style.background='#fff';
			daohang_wai.style.display='block';
		},
		function(){
			daohang.style.background='#DDDDDD';
			daohang_wai.style.display='none';
		})


	function  nav_left(n){
		var obj=n;
	var da=$('.TWO')[obj];
	var a1=$('.a1')[n];
	var a2=$('.a2')[n];
	var one=$('.boxda')[n];
	// console.log(one);
		hover(da,function(){
			a1.style.color="#C81623";
			a2.style.color="#C81623";
			a1.style.background='#fff'
			one.style.display='block';
		},
		function(){
			a1.style.color="#fff";
			a2.style.color="#fff";
			a1.style.background='#C81623'
			one.style.display='none';
		})
	}
	nav_left(0);
	nav_left(1);
	nav_left(2);
	nav_left(3);
	nav_left(4);
	nav_left(5);
	nav_left(6);
	nav_left(7);
	nav_left(8);
	nav_left(9);
	nav_left(10);
	nav_left(11);
	nav_left(12);
	nav_left(13);
	nav_left(14);

 function  lunboxiao(n,obj){
 	var box_xiao=$('.classify')[n];
 	var imgss=$('.I1',box_xiao);
	var yuan=$('.two',box_xiao);
	var box=$('.'+obj,box_xiao)[0];
	var left=$('.zuo',box_xiao)[0];
	var right=$('.you',box_xiao)[0];
	var width=parseInt(getStyle(box,'width'));
	var n=0;
	var next=0;
	var t=setInterval(move,2000)
	function move(){
		next=n+1;
		if(next>=imgss.length){
			next=0;
		}
		imgss[next].style.left=width+'px';
		animate(imgss[n],{left:-width},600);
		animate(imgss[next],{left:0},600);
		yuan[n].style.background='#3E3E3E';
		yuan[next].style.background='#B61B1F';
		n=next;	
	}
		box.onmouseover=function(){
			left.style.display="block";
			right.style.display="block";
			clearInterval(t);
		}
		box.onmouseout=function(){
			left.style.display="none";
			right.style.display="none";
			t=setInterval(move,2000);
		}
		right.onclick=function(){
			move(0);
		}
		left.onclick=function(){
			next=n-1;
		if(next<0){
			next=imgss.length-1;
		}
		imgss[next].style.left=-width+'px';
		animate(imgss[n],{left:width},600);
		animate(imgss[next],{left:0},600);
		yuan[n].style.background='#3E3E3E';
		yuan[next].style.background='#B61B1F';
		n=next;
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i;
			yuan[i].onclick=function(){
				if(this.index>n){
					imgss[this.index].style.left=width+'px';
					animate(imgss[n],{left:-width},600);
					animate(imgss[this.index],{left:0},600);
					yuan[n].style.background='#3E3E3E';
					yuan[this.index].style.background='#B61B1F';
					n=this.index;
				}else{
					imgss[this.index].style.left=-width+'px';
					animate(imgss[n],{left:width},600);
					animate(imgss[this.index],{left:0},600);
					yuan[n].style.background='#3E3E3E';
					yuan[this.index].style.background='#B61B1F';
					n=this.index;
				}
			}
		}
 }
	lunboxiao(0,'ll');
	lunboxiao(1,'center');
	lunboxiao(2,'C11');
	lunboxiao(3,'C11');
	lunboxiao(4,'C11');
	lunboxiao(5,'center2');
	lunboxiao(6,'center2');
	lunboxiao(7,'center2');
	lunboxiao(8,'center2');
	lunboxiao(9,'C11');
	lunboxiao(10,'C11');


function  LB(n,obj){
 	var box_xiao=$('.serve')[0];
 	var hezi=$('.obj',box_xiao)[n];
 	var imgss=$('.I1',hezi);
	var yuan=$('.two',hezi);
	var box=$('.'+obj,hezi)[0];
	var left=$('.zuo',hezi)[0];
	var right=$('.you',hezi)[0];
	var width=parseInt(getStyle(box,'width'));
	var n=0;
	var next=0;
	var t=setInterval(move,2000)
	function move(){
		next=n+1;
		if(next>=imgss.length){
			next=0;
		}
		imgss[next].style.left=width+'px';
		animate(imgss[n],{left:-width},600);
		animate(imgss[next],{left:0},600);
		yuan[n].style.background='#3E3E3E';
		yuan[next].style.background='#B61B1F';
		n=next;	
	}
		box.onmouseover=function(){
			left.style.display="block";
			right.style.display="block";
			clearInterval(t);
		}
		box.onmouseout=function(){
			left.style.display="none";
			right.style.display="none";
			t=setInterval(move,2000);
		}
		right.onclick=function(){
			move(0);
		}
		left.onclick=function(){
			next=n-1;
		if(next<0){
			next=imgss.length-1;
		}
		imgss[next].style.left=-width+'px';
		animate(imgss[n],{left:width},600);
		animate(imgss[next],{left:0},600);
		yuan[n].style.background='#3E3E3E';
		yuan[next].style.background='#B61B1F';
		n=next;
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i;
			yuan[i].onclick=function(){
				if(this.index>n){
					imgss[this.index].style.left=width+'px';
					animate(imgss[n],{left:-width},600);
					animate(imgss[this.index],{left:0},600);
					yuan[n].style.background='#3E3E3E';
					yuan[this.index].style.background='#B61B1F';
					n=this.index;
				}else{
					imgss[this.index].style.left=-width+'px';
					animate(imgss[n],{left:width},600);
					animate(imgss[this.index],{left:0},600);
					yuan[n].style.background='#3E3E3E';
					yuan[this.index].style.background='#B61B1F';
					n=this.index;
				}
			}
		}
 }
     LB(0,'C11');LB(1,'CC1');


function  xxk(p){
	var box_xiao=$('.classify')[p];
	// var box_s=$('.right',box_xiao)[0];
	var da=$('.a1',box_xiao);
	var gai=$('.zhe',box_xiao);
	
	var one=$('.bao',box_xiao);
	for(var i=0;i<da.length;i++){
		da[i].index=i;
		hover(da[i],function(){
			for(var j=0;j<one.length;j++){
			gai[j].style.display='none';
			one[j].style.display='none';
			}
			gai[this.index].style.display='block';
			one[this.index].style.display='block';
		},
		function(){
		})
	}	
	}
	var classify=$('.classify');
	for(var p=0;p<classify.length;p++){
		xxk(p);
	}


function guding(L,l){
	var you=$('.youce')[L];
	var tu=$('.tu',you)[l];
	var xian=$('.xian',you)[l];
	var yin=$('.yin',you)[l];
	tu.onmouseover=function(){
		xian.style.display='none';
		yin.style.display='block';
		animate(yin,{right:0},600);
	}
	tu.onmouseout=function(){
		animate(yin,{right:-65},600);
		xian.style.display='block';
		yin.style.display='none';
	}
}
guding(0,0);guding(0,1);guding(0,2);guding(0,3);guding(0,4);guding(0,5);
guding(1,0);guding(1,1);
	// var low_price=('.low-price')[0];
	// var shaidan=$(".shaidan");
	// var shai=$('.shai1')[0];
	// var Height=parseInt(getStyle(shai,'height'));
	// var time=setInterval(dong,1000);
	// var time1=setInterval(dong1,2000);
	// var e=280;f=0
	// function dong(){
	// 	var b=e-140;
	// 	var a=f-140;
	// 	animate(shaidan[0],{bottom:f},0);
	// 	animate(shaidan[1],{bottom:b},600);
	// 	e=b;f=a;
	// }

}