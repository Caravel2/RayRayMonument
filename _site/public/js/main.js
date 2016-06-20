$(document).ready(function(){





    //-------- 禁止scroll --------//
    if ($(document).height() > $(window).height()) {
         var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
         $('html').addClass('noscroll').css('top',-scrollTop);         
    }



    //-------- 幫忙animate星星 --------//


    // AnimateTranslate (-2000,"infinite");
    // AnimateTranslate2(-2000,"infinite");
    // AnimateTranslate3(-2000,"infinite");



    // function AnimateTranslate(angle,repeat) {
    //     var duration= 50000;
    //     setTimeout(function() {
    //         if(repeat && repeat == "infinite") {
    //             AnimateTranslate(angle,repeat);
    //         } else if ( repeat && repeat > 1) {
    //             AnimateTranslate(angle, repeat-1);
    //         }
    //     },duration)    
    //     var $elem = $('#stars');

    //     $({deg: 0}).animate({deg: angle}, {
    //         duration: duration,
    //         step: function(now) {
    //             $elem.css({
    //                 'transform': 'translatey('+ now +'px)'
    //             });
    //         }
    //     });
    // }

    // function AnimateTranslate2(angle,repeat) {
    //     var duration= 100000;
    //     setTimeout(function() {
    //         if(repeat && repeat == "infinite") {
    //             AnimateTranslate(angle,repeat);
    //         } else if ( repeat && repeat > 1) {
    //             AnimateTranslate(angle, repeat-1);
    //         }
    //     },duration)    
    //     var $elem = $('#stars2');

    //     $({deg: 0}).animate({deg: angle}, {
    //         duration: duration,
    //         step: function(now) {
    //             $elem.css({
    //                 'transform': 'translatey('+ now +'px)'
    //             });
    //         }
    //     });
    // }

    // function AnimateTranslate3(angle,repeat) {
    //     var duration= 150000;
    //     setTimeout(function() {
    //         if(repeat && repeat == "infinite") {
    //             AnimateTranslate(angle,repeat);
    //         } else if ( repeat && repeat > 1) {
    //             AnimateTranslate(angle, repeat-1);
    //         }
    //     },duration)    
    //     var $elem = $('#stars3');

    //     $({deg: 0}).animate({deg: angle}, {
    //         duration: duration,
    //         step: function(now) {
    //             $elem.css({
    //                 'transform': 'translatey('+ now +'px)'
    //             });
    //         }
    //     });
    // }
    
    







    //-------- 預load照片 --------//
    

    $('.pic_0').preload(function(){
        $(this).show();
    });








   
   

    //-------- gradient transition by time --------//



    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var hour = dt.getHours();


    console.log("time",time);

    //白天
    if(hour>=6 && hour<18){

      // $("html").css({ background:'radial-gradient(ellipse at bottom, #1b2735 0%, #fff 100%)'});
      $("html").css({ 'backgroundColor' : '#E4F1FE' });
      $(".time_text").css({ 
                              // 'background':'linear-gradient(#38495a, #38495a)',
                              // '-webkit-background-clip':'text'
                              'background' : '#000' 

                      });
      }
    

    //下午
    // else if(hour>=13 && hour<18){

    //   $("html").css({ background:'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'});
    //   $(".time_text").css({ 
    //                           'background':'linear-gradient(#38495a, #38495a)',
    //                           '-webkit-background-clip':'text' 

    //                   });
    // }


    //晚上
    else{

      // $("html").css({ background:'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'});
      $("html").css({ backgroundColor : '#2C3E50' });

      $(".time_text").css({ 
                              'background':'linear-gradient(#fff, #fff)'
                              // '-webkit-background-clip':'text' 
                              // 'background' : '#fff'

                      });


    }







    //-------- gallery box --------//
    var dateArr = [
                      '2012.xx.xx','2010.12.26','2011.03.20',
                      
                      '2012.03.04','2013.07.26','2014.06.07',

                      '2015.10.17'

                   ];


    var slider = $('.gallery_box').unslider({

        
        speed:1500,
        nav:false,
        arrows:false,
        animation:'fade'

    });


    slider.on('unslider.change', function(event, index, slide) {
      
      // console.log(index);
      $(".time_text").text(dateArr[index]);



    });


    $(".gallery_box").click(function(e){
        
        

        if(e.pageX > 485){

            slider.unslider('next');
          // console.log("右半邊！");



        }else if(e.pageX <= 485){
            slider.unslider('prev');
          // console.log("左半邊！");

        }else{

          console.log("衝殺毀？");

        }

    });

    


    var pressTimer

    $(".button_box").mouseup(function(){
      clearTimeout(pressTimer)
      // Clear timeout
      return false;
    }).mousedown(function(){
      // Set timeout
      pressTimer = window.setTimeout(function() {


          console.log("按了2秒鐘");
          $('.my-popover').addClass('animated fadeInRight');
          $('.my-popover').css('cursor','pointer');
          $('.heart_fading').addClass('animated pulsate');
          $('.heart_btn').addClass('blink');
          // $(this).popover('show'); 



      },2000)
      return false; 
    });




    $('.my-popover').click(function(e){

        if($(this).css("opacity") == 1){
            // console.log("該關了");
            $(this).removeClass('animated fadeInRight')
                   .animate({ opacity : '0' });
          $('.my-popover').css('cursor','default');

        }
        


    });






});