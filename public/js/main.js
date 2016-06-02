$(document).ready(function(){



    //-------- 雲端照片 --------//
    
    


    //-------- gradient transition by time --------//



    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var hour = dt.getHours();


    console.log("time",time);

    //白天
    if(hour>=6 && hour<18){

      $("html").css({ background:'radial-gradient(ellipse at bottom, #1b2735 0%, #fff 100%)'});
      $(".time_text").css({ 
                              'background':'linear-gradient(#38495a, #38495a)',
                              '-webkit-background-clip':'text' 

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

      $("html").css({ background:'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'});
      $(".time_text").css({ 
                              'background':'linear-gradient(#38495a, #fff)',
                              '-webkit-background-clip':'text' 

                      });


    }







    //-------- gallery box --------//
    var dateArr = [
                      '2012.xx.xx','2010.12.26','2011.03.20',
                      
                      '2012.03.04','2013.07.26','2014.06.07',

                      '2015.10.17'

                   ];


    var slider = $('.gallery_box').unslider({

        autoplay:false,
        nav:false,
        arrows:false,
        animation:'fade'

    });


    slider.on('unslider.change', function(event, index, slide) {
      
      console.log(index);
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