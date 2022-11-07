$(document).ready(function(){
    $("design-show").click(function(){
        alert("#D1").toggle();
        alert("#D2").toggle();
    });
    
    $("#development-show").click(function(){
        alert("#DEV1").toggle();
        alert("#DEV2").toggle();
    });

    $("#product-show").click(function(){
        alert("#PRO").toggle();
        alert("#PRO").toggle();
    });

});

$("formvalidation").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        }
    },
    messages: {
        required:"please enter your name",
        minlength:"name at least 2 characters"
    },
    email:"please enter your email",
    subject:"please enter your subject",
    formmessage:"please enter your message",
    
    SubmitEvent: function(form){
        form.submit();
    }
});