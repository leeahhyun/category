$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });






  let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; 
  let idx = 0; 
  let img_n = $img.length; 


  function changeImg(idx){ 

    if(oldidx != idx){ 
      $btn.eq(oldidx).removeClass("active"); 
      $btn.eq(idx).addClass("active"); 
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300"); 
    }
    oldidx = idx;  
  };


  function changeAuto(){

    idx++;

    if(idx > img_n-1){ 
      idx=0;
    }

    changeImg(idx);  

  }

  timer = setInterval(changeAuto,4000);  

  //하단버튼
  $btn.click(function(){

    clearInterval(timer); 
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000); 

  });

  //좌우버튼
  $lbtn.click(function(){

    clearInterval(timer);
    idx--;
    if(idx < 0){ 
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);

  });

  $rbtn.click(function(){

    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx); 
    timer = setInterval(changeAuto,4000);

  });




  


  $("dl dt").click(function(){

    $(this).siblings("dt").removeClass("selected"); 
    $(this).addClass("selected");
    $(this).siblings("dd").hide("slow");
    $(this).next().show("slow");

    let dataBackimg = $(this).attr("data-background");
    $(".image img").attr("src",dataBackimg).hide().fadeIn();

  });






  

  $(".tab li").click(function(){

    for(i=0;i<6;i++){  
      $(".tab li").eq(i).find("img").attr({"src":"image/me"+i+".jpg"}); 
    }
    $(".i1").removeClass("active");  

    let inum=$(this).index();
    $(this).find("img").attr({"src":"image/on"+inum+".jpg"});
    
    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");

  });










  let soldidx=0;
	let sidx=0;
	let simg_w=$(".largeImg img").width();

  $(".thumbs a").click(function(){

    sidx=$(this).index();
    smove=-(simg_w*sidx);

    $(".gallery .largeImg").animate({"left":smove});
    $(".thumbs a").eq(soldidx).removeClass("on");
		$(".thumbs a").eq(sidx).addClass("on");
		soldidx = sidx;
    return false;
  });




});