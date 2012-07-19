
var picWidth = 390,
currentSlide = 0,
divScrl, liBtns, picsLen, go2slide, nextSlide, prvSlide;

var picWidth1 = 639,
currentSlide1 = 0,
divScrl1, liBtns1, picsLen1, go2slide1, nextSlide1, prvSlide1;

var picWidth3 = 650,
currentSlide3 = 0,
divScrl3, liBtns3, picsLen3, go2slide3, nextSlide3, prvSlide3,flag=false;

var mywindow=new Array("window-home","window-about","window-galery","window-gavahiname","window-contact","window-beauty","window-ortodensy","window-protez","window-garahy","window-implant","window-moshavere","window-boyebad","window-darman","window-pusidegy","window-mesvak","window-map");



window.onload=function(){

	
/*	alert('برای دیدن سایت لطفا از fire fox  یا chrom استفاده کنید.');*/

/***************************************** BANNER HOME PAGE *******************************************/	

	divScrl1 = document.getElementsByClassName('banner1').item(0).getElementsByClassName('scroll1').item(0);
	
	liBtns1 = document.getElementsByClassName('banner1').item(0).getElementsByClassName('newbtn').item(0).getElementsByTagName('li');
	
	picsLen1 = liBtns1.length;
	
	go2slide1 = function (m){
		if(m>=picsLen1) m=0;
		if(m<0) m=picsLen1-1;
		
			divScrl1.style.left = -m*picWidth1 + 'px';
			currentSlide1=m;
		
	};
	
	nextSlide1 = function (){
		go2slide1(currentSlide1+1)
	};
	prvSlide1 = function (){
		go2slide1(currentSlide1-1)
	};

	for(var i=0;i<picsLen1;i++){
		(function(j){
			liBtns1.item(j).onclick=function(){
				go2slide1(j);
			}
		})(i);
	}
	
	setInterval(nextSlide1,5000);
	
/***************************************** BANNER LABKHAND *******************************************/	

	divScrl3 = document.getElementsByClassName('banner3').item(0).getElementsByClassName('scrol3').item(0);
	
	liBtns3 = document.getElementsByClassName('banner3').item(0).getElementsByClassName('lbtn3').item(0).getElementsByTagName('li');
	
	picsLen3 = liBtns3.length;

	go2slide3 = function (k){
		if(k>=picsLen3) k=0;
		if(k<0) k=picsLen3-1;
		
/*		divScrl3.style.opacity = 1;*/
		divScrl3.style.left = -k*picWidth3 + 'px';/*change with opacity*/
		currentSlide3=k;
	};
	
	nextSlide3 = function (){
		go2slide3(currentSlide3+1)
	};
	prvSlide3 = function (){
		go2slide3(currentSlide3-1)
	};

	for(var i=0;i<picsLen3;i++){
		(function(j){
			liBtns3.item(j).onclick=function(){
				go2slide3(j);
			}
		})(i);
	}
	
	setInterval(nextSlide3,5000);
	

/***************************************** BANNER MESVAK *******************************************/	
	
	divScrl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	
	liBtns = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	picsLen = liBtns.length;
	
	go2slide = function (n){
		if(n>=picsLen) n=0;
		if(n<0) n=picsLen-1;
		
		divScrl.style.left = -n*picWidth + 'px';
		
		currentSlide=n;
	};
	
	nextSlide = function (){
		go2slide(currentSlide+1)
	};
	prvSlide = function (){
		go2slide(currentSlide-1)
	};

	for(var i=0;i<picsLen;i++){
		(function(j){
			liBtns.item(j).onclick=function(){
				go2slide(j);
			}
		})(i);
	}
	
	setInterval(nextSlide,3000);
	
}


function display(y)
{	
	if (y==1)
		x='window-home';
	else if(y==2)
		x='window-about';
	else if(y==3)
		x='window-galery';
	else if(y==4)
		x='window-gavahiname';
	else if(y==5)
		x='window-contact';
	else if(y==6)
		x='window-beauty';
	else if(y==7)
		x='window-ortodensy';
	else if(y==8)
		x='window-protez';
	else if(y==9)
		x='window-implant';
	else if(y==10)
		x='window-garahy';
	else if(y==11)
		x='window-moshavere';
	else if(y==12)
		x='window-boyebad';
	else if(y==13)
		x='window-darman';
	else if(y==14)
		x='window-pusidegy';
	else if(y==15)
		x='window-mesvak';
	else if(y==16)
		x='window-map';
		
	resetWindow(x);	
}

function resetWindow(x)
{
	document.getElementById('banner1').style.opacity='0';
	document.getElementById('banner1').style.visibility='hidden';
	document.getElementById('banner1').style.height='0px';
	if(x==15)
	{
		
	}
	for(i=0;i<16;i++)
	{
		document.getElementById(mywindow[i]).style.opacity='0';	
		document.getElementById(mywindow[i]).style.visibility='hidden';
		document.getElementById(mywindow[i]).style.height='0px'
	}
	displayResult(x);
}

function displayResult(x)
{
	document.getElementById(x).style.opacity='1';
	document.getElementById(x).style.height='420px';
	document.getElementById(x).style.visibility='visible';/*for IE*/
	document.getElementById('header').style.opacity='0.2';
	document.getElementById('bg-footer').style.opacity='0.2';
}

function winclose(x)
{
	document.getElementById(x).style.height='0px';
	document.getElementById(x).style.opacity='0';
	document.getElementById(x).style.visibility='hidden';/*for IE*/
	document.getElementById('header').style.opacity='1';
	document.getElementById('bg-footer').style.opacity='1';
	document.getElementById('banner1').style.opacity='1';
	document.getElementById('banner1').style.visibility='visible';
	document.getElementById('banner1').style.height='250px';
}

function displayImage(z)
{
	document.getElementById('img1').style.opacity='0';
	document.getElementById('img2').style.opacity='0'; 
	document.getElementById('img3').style.opacity='0'; 
	document.getElementById('img4').style.opacity='0'; 
	document.getElementById(z).style.opacity='1';
}