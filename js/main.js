$(document).ready(function(){

    
    var dateArr = [
                      '2012.10.01','2012.12.01','2013.01.01',
                      
                      '2013.10.22','2013.11.16','2014.01.04',

                      '2015.12.07','2015.05.08','2015.11.12',

                      '2016.05.18'
                   ];


    var slider = $('.gallery_box').unslider({

        autoplay:false,
        nav:false,
        animation:'fade'

    });


    slider.on('unslider.change', function(event, index, slide) {
      

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