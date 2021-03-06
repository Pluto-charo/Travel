$(function(){
	var imgOuter = $('.wrap');
	var imgDiv = $('.pic');
	var timeId = null;
	var edgeDistance = 91;
	var imgNow = 0;
	var imgMouse = 0;
	var imgOuterWidth = imgOuter.width();
	function autoSlide(){
		if(imgNow == imgDiv.size()-1){
			imgNow = 0;
		}else{
			imgNow ++;
		}
		if(imgNow == 0){
			imgDiv.eq(imgNow).children().hide().siblings().children().show();			
			imgDiv.eq(imgNow).siblings().children().show();
			for(var i=imgDiv.size()-1;i>0;i--){
				imgDiv.eq(i).animate({'left':imgOuterWidth-(imgDiv.size()-i)*edgeDistance+'px'},2000);
			}
		} else{
			imgDiv.eq(imgNow).children().hide().siblings().children().show();			
			imgDiv.eq(imgNow).siblings().children().show();
			imgDiv.eq(imgNow).animate({'left':edgeDistance*imgNow+'px'},2000);
		}
	}

	function mouseSlide(){
		if(imgMouse > imgNow){
			for(var i= imgNow+1;i<=imgMouse;i++){
				imgDiv.eq(imgMouse).children().hide();
				imgDiv.eq(imgMouse).siblings().children().show();
				imgDiv.eq(i).stop().animate({'left':edgeDistance*i+'px'},2000);
			}
			imgNow = imgMouse;
		}else{
			for(var i= imgNow;i>imgMouse;i--){
				imgDiv.eq(imgMouse).children().hide();
				imgDiv.eq(imgMouse).siblings().children().show();
				imgDiv.eq(i).stop().animate({'left':imgOuterWidth-(imgDiv.size()-i)*edgeDistance+'px'},2000);
			}
			imgNow = imgMouse;
		}
	}

	timeId = setInterval(autoSlide,1000);
	imgDiv.hover(function(){
		clearInterval(timeId);
		imgMouse = $(this).index();
		if(imgMouse != imgNow){
			mouseSlide();
		}		
	},function(){
		timeId = setInterval(autoSlide,1000);
	}).bind('click',function(){
		imgNow = $(this).index();
	});
	
});