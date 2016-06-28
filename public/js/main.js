$(document).ready(function(){

    //-------- 全域變數 --------//

    var now_status = "zero_planet", 
        sate1 = $( ".satellite_1" ),
        sate2 = $( ".satellite_2" );



    
    //-------- 0. 禁止scroll --------//
    if ($(document).height() > $(window).height()) {
         var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
         $('html').addClass('noscroll').css('top',-scrollTop);         
    }


    //-------- 1. 預先load照片 --------//
    

    $('.pic_0').preload(function(){
        $(this).show();
    });



    //-------- 2. 接收planet狀態 --------//
    
    var getUrl = '/getPunchTime';
    var getStatus = $.get(getUrl);
    getStatus.done(function(data){

      now_status = data.planet_status;
      console.log('現在status',now_status);

      if(data.planet_status == "one_planet"){

          sate1.css('opacity','1');
          sate2.css('opacity','0');

      }

      else if(data.planet_status == "two_planet"){

          sate1.css('opacity','1');
          sate2.css('opacity','1');
      }

      else{}

      
    }); 

    //-------- 3. 依時序調整背景 --------//



    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var hour = dt.getHours();

    // console.log("time",time);

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


    //-------- 4. 衛星碰撞監聽 --------//


    var tid = setInterval(mycode, 50);
    function mycode() {
        
        if(now_status == "two_planet"){

          var pos_1 = sate1.position();
          var pos_2 = sate2.position();

          var offset_x =  Math.abs(pos_1.left - pos_2.left);
          var offset_y =  Math.abs(pos_1.top - pos_2.top);

          if(offset_x < 15 && offset_y < 15){

            // console.log('碰撞');
            sate1.css("backgroundColor","#F62459");
            sate2.css("backgroundColor","#F62459");

          }else if(offset_x > 5 && offset_y > 5){

              sate1.css("backgroundColor","grey");
              sate2.css("backgroundColor","grey");

          }


        }else{}
    }
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }




    


    //-------- 5. 輪播相簿 --------//
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

    //-------- 6. 按15下啟動靈犀 --------//

    var click_entry = 0;
    var postUrl = '/punchTime';

    $(".time_text").on("tap",function(){
        


        console.log('❤');

        if($(this).text() == "2015.10.13"){

          click_entry += 1;

          if(click_entry > 15 && click_entry < 17){



            $.post(postUrl)
             .done(function(data){

              
                  now_status = data.data2file_timeStamp.planet_status;


                  if(now_status == "two_planet"){

                    console.log('❤ 靈犀 ❤');
                    sate1.css('opacity','1');
                    sate2.css('opacity','1');

                  }

                  else{

                    console.log('❤ 零稀 ❤');
                    sate1.css('opacity','1');
                    sate2.css('opacity','0');


                  }      
             });


          }else if(click_entry > 31 && click_entry < 33){

            $.post(postUrl)
             .done(function(data){
                  
                  console.log('❤ 靈犀 ❤');
                  sate1.css('opacity','1');
                  sate2.css('opacity','1');
               
              });





          }

        }

        else{

          // click_entry = 0;

        }
    });


    //-------- 7. lodin spinner 消失 --------//
    $('.entry_curtain').fadeOut(2000);




});