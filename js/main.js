// var img=0;

$(function(){
    // setInterval(SLIDE,2000);
    // slide3();
    hover();
});


// function SLIDE(){
//     if(img<2){
//         img++;
//     }else{
//         img=0;
//     }
//     var imglist=img*-1920;
//     $(".slide").animate({left:imglist})
// }

// function slide3(){
//     $("#slideList3").children("div:gt(0)").hide(); //gt뻬고 0번을 뺀 1,2
//     var curr=0;
//     setInterval(function(){
//         var next=(curr+1) % 3 //사라진 페이지를 끌어올리려구 3장이니까
//         $("#slideList3").find("div").eq(curr).fadeOut("slow");
//         $("#slideList3").find("div").eq(next).fadeIn("slow");
//         curr = next;
//     },3000);//모든 div자식을 찾아서 현재페이지(eq)에서 이렇게 해.
// }

function hover(){
    $(".imghover1").mouseenter(function(){
        $('imghover2').stop().fadeIn();
    });
}