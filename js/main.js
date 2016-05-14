$(document).ready(function(){

    // IMG_2691
    // var imgNames = [
    //                   'img/IMG_2691.jpg','img/IMG_2692.jpg','img/IMG_2693.jpg',
                      
    //                   'img/IMG_2694.jpg','img/IMG_2695.jpg','img/IMG_2696.jpg',

    //                   'img/IMG_2697.jpg','img/IMG_2698.jpg','img/IMG_2699.jpg',

    //                   'img/IMG_2700.jpg'
    //                ];


    $('.gallery_box').unslider();


    $(".gallery_box").click(function(e){
        
        

        if(e.pageX > 485){

          console.log("右半邊！");

        }else if(e.pageX <= 485){

          console.log("左半邊！");

        }else{

          console.log("衝殺毀？");

        }

    });











});