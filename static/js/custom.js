 $(document).ready(function(){
$(".button-collapse").sideNav();
$('.slider').slider({indicators: false, height: 650});
$("#lightgallery").lightGallery(); 
/*-----------------*/
$(".b-card").click(function(){
$(this).find($(".fa")).toggleClass('icon-plus icon-cross');
    $("#bapteme").toggleClass("truncate")
   
});

$(".b1-card").click(function(){
$(this).find($(".fa")).toggleClass('icon-plus icon-cross');
    
    $("#cmas1").toggleClass("truncate");
});
/*--------------Form----------------------*/
var form =  $('#contactform');
form.submit(function(e) {
	e.preventDefault();
$.ajax({
  url: "//formspree.io/clubdjerbasub@gmail.com", 
  method: "POST",
  data: {
  name: $(form).find("input[name='name']").val(),
  _replyto: $(form).find("input[name='mail']").val(),
  _subject: "DJERBA-SUB",
  message: $(form).find("textarea[name='message']").val()
  },
  dataType: "json",
  success:function() {
  $("#contactform").get(0).reset()
  Materialize.toast("Votre message a été envoyé", 1000) 
  }, //success
  error:function() {
  Materialize.toast("Echec de l'envoi du courriel", 1000) 
  } //error    
  });//ajex
  });// submitHandler
 });
 
 