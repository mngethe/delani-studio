$(document).ready(function(){
    $("#design").click(function() {
        $("#design").toggle();
        $("#content5").toggle();
      });
    });

    $("#content5").click(function() {
      $("#design").toggle();
      $("#content5").toggle();
    });
    $("#dev").click(function() {
        $("#dev").toggle();
        $("#dev-content").toggle();
      });

      $("#dev-content").click(function() {
        $("#dev").toggle();
        $("#dev-content").toggle();
      });

      $("#product").click(function() {
        $("#product").toggle();
        $("#prod-content").toggle();
      });

      $("#prod-content").click(function() {
        $("#product").toggle();
        $("#prod-content").toggle();
      });

    $("#col-1").hover(function() {
        $("#text1").fadeTo("slow",1);
        $("#photo1").fadeTo("slow",0.4);
        },function() {
          $("#text1").fadeTo("slow",0);
          $("#photo1").fadeTo("slow",1);
        });
      $("#col-2").hover(function() {
        $("#text2").fadeTo("slow",1);
        $("#photo2").fadeTo("slow",0.4);
        },function() {
          $("#text2").fadeTo("slow",0);
          $("#photo2").fadeTo("slow",1);
        });
      $("#col-3").hover(function() {
        $("#text3").fadeTo("slow",1);
        $("#photo3").fadeTo("slow",0.4);;
        },function() {
          $("#text3").fadeTo("slow",0);
          $("#photo3").fadeTo("slow",1);
        });
      $("#col-4").hover(function() {
        $("#text4").fadeTo("slow",1);
        $("#photo4").fadeTo("slow",0.4);
        },function() {
          $("#text4").fadeTo("slow",0);
          $("#photo4").fadeTo("slow",1);
        });
      $("#col-5").hover(function() {
        $("#text5").fadeTo("slow",1);
        $("#photo5").fadeTo("slow",0.4);
        },function() {
          $("#text5").fadeTo("slow",0);
          $("#photo5").fadeTo("slow",1);
        });
      $("#col-6").hover(function() {
        $("#text6").fadeTo("slow",1);
        $("#photo6").fadeTo("slow",0.4);
        },function() {
          $("#text6").fadeTo("slow",0);
          $("#photo6").fadeTo("slow",1);
        });
      $("#col-7").hover(function() {
        $("#text7").fadeTo("slow",1);
        $("#photo7").fadeTo("slow",0.4);
        },function() {
          $("#text7").fadeTo("slow",0);
          $("#photo7").fadeTo("slow",1);
        });
      $("#col-8").hover(function() {
        $("#text8").fadeTo("slow",1);
        $("#photo8").fadeTo("slow",0.4);
        },function() {
          $("#text8").fadeTo("slow",0);
          $("#photo8").fadeTo("slow",1);
        });

 $("form").submit(function() {
            rules:{
                name:{
                    minlength:2
                }
                email:{
                    email;true
                }
            }
            messages: {
                required:"please enter your name",
                minlength;"name at least 2 characters"
            }
            email:"please enter your email",
            subject;"please enter your subject",
            formmessage;"please enter your message",
            
            event.preventDefault();
            
        });