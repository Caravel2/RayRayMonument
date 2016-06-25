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
      $("body").css({ 'backgroundColor' : '#2E3899' });
      $(".ui-page").css({ 'backgroundColor' : '#2E3899' });
      $(".time_text").css({ 
                              'color' : '#fff'
                              // 'background':'linear-gradient(#000, #000)',
                              // 'backgroundClip': 'text',
                              // 'textFillColor': 'transparent',

                              // '-webkit-background-clip':'text'
                              // 'background' : '#000' 

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
      $("body").css({ backgroundColor : '#2C3E50' });
      $(".ui-page").css({ backgroundColor : '#2C3E50' });
      $(".time_text").css({ 
                              'color' : '#fff'
                              // 'background':'linear-gradient(#fff, #fff)',
                              // '-webkit-background-clip':'text'
                              // 'background' : '#000' 

                      });


    }


    // set interval
    var tid = setInterval(mycode, 50);
    function mycode() {
        
        var pos_1 = $( ".satellite_1" ).position();
        var pos_2 = $( ".satellite_2" ).position();

        var offset_x =  Math.abs(pos_1.left - pos_2.left);
        var offset_y =  Math.abs(pos_1.top - pos_2.top);

        if(offset_x < 15 && offset_y < 15){

          // console.log('碰到啦～～～');



          $( ".satellite_1" ).css("backgroundColor","#F62459");


          $( ".satellite_2" ).css("backgroundColor","#F62459");








        }else if(offset_x > 5 && offset_y > 5){

            $( ".satellite_1" ).css("backgroundColor","grey");


            $( ".satellite_2" ).css("backgroundColor","grey");




        }







        
    }
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }




    // var random_index = 5 * Math.random();
    var click_entry = 0 ;


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



    //-------- time_text [click] --------//

    $(".time_text").click(function(e){
        
        // console.log('按誰'+color);

        if($(this).text() == "2015.10.13"){

          click_entry += 1;

          if(click_entry > 15){

              console.log('按了'+click_entry+'下');
              $('.my-popover').addClass('animated fadeInRight');
              $('.my-popover').css('cursor','pointer');
              $('.heart_fading').addClass('animated pulsate');
              $('.heart_btn').addClass('blink');

          }


        }

        else{

          click_entry = 0;

        }

        

    });


    //-------- time_text [tap] --------//

    $(".time_text").on("tap",function(){
        
        console.log('tapped');

        if($(this).text() == "2015.10.13"){

          click_entry += 1;

          if(click_entry > 15){

              console.log('按了'+click_entry+'下');
              $('.my-popover').addClass('animated fadeInRight');
              $('.my-popover').css('cursor','pointer');
              $('.heart_fading').addClass('animated pulsate');
              $('.heart_btn').addClass('blink');

          }


        }

        else{

          click_entry = 0;

        }

        

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

    // $(".button_box").mouseup(function(){
    //   clearTimeout(pressTimer)
    //   // Clear timeout
    //   return false;
    // }).mousedown(function(){
    //   // Set timeout
    //   pressTimer = window.setTimeout(function() {


    //       console.log("按了2秒鐘");
    //       $('.my-popover').addClass('animated fadeInRight');
    //       $('.my-popover').css('cursor','pointer');
    //       $('.heart_fading').addClass('animated pulsate');
    //       $('.heart_btn').addClass('blink');
    //       // $(this).popover('show'); 



    //   },2000)
    //   return false; 
    // });




    $('.my-popover').click(function(e){

        if($(this).css("opacity") == 1){
            // console.log("該關了");
            $(this).removeClass('animated fadeInRight')
                   .animate({ opacity : '0' });
          $('.my-popover').css('cursor','default');

        }
        


    });

    //-------- lodin spinner --------//
    $('.entry_curtain').fadeOut(2000);




});