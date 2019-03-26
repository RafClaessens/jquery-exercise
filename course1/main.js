$(document).ready(function() {
//ex 1/2
    $("#hider").click(function(){
       $("#text").toggle( 'slow', function(){
       });
    });
 });

//ex 3,4
 $(document).ready(function() {

   $("#fontf").click(function(){
 $('body').toggleClass('myFontFamily')
 $('li').toggleClass('redcol')
 $('li').toggleClass('to_hide')

});
});

// ex5
$('#text_2').empty();

// ex 6/ex.10
$(document).ready(function() {

   $("#hiding").click(function(){

         $(".to_hide").hide();
});
});

//ex 7

$(document).ready(function() {

   $("#hidden").click(function(){

         $(".delete").remove();
});
});

//ex 8/9
$(document).ready(function() {

   $("#buttonss").click(function(){

 $("#bodysub").toggleClass('redss')
 $('#text_1').toggleClass('randje')
 $('#text_3').toggleClass('randje')

});
});