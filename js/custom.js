$(document).ready(function(){
    $("#design").click(function() {
      $("#design").toggle();
    
    });

    $(document).ready(function(){
        $("#development").click(function() {
          $("#development").toggle();
    
        });
        $(document).ready(function(){
            $("#product").click(function() {
              $("#product").toggle();
            
            });

$("formvalidation").validate({
    rules:{
        name:{
        minlength: 2
    },
    email:{
    email:true
},
messages: {
    name:{
        required: "please enter your name",
        minlength:"name atleast 2 characters"
    },
    email:"please enter your email",
    formmessage:"please enter your message",
},
submithandler:function(form) {
    form.submit();
}

});