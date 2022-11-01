$("formvalidation").validate({
    rules:{
        name:{
        minlength: 2
    },
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