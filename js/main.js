$(document).ready(function(){

    //-------- gradient transition by time --------//



    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var hour = dt.getHours()


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
                      '2012.10.01','2012.12.01','2013.01.01',
                      
                      '2013.10.22','2013.11.16','2014.01.04',

                      '2015.12.07','2015.05.08','2015.11.12',

                      '2016.05.18'
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
          console.log("右半邊！");



        }else if(e.pageX <= 485){
            slider.unslider('prev');
          console.log("左半邊！");

        }else{

          console.log("衝殺毀？");

        }

    });











});