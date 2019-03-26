$('.iets').click(function() {
  $("#content").css('font-size', '120%');
});
$('.iets2').click(function() {
  $("#content").css('font-size', '80%');
});
$('.iets3').click(function() {
  $("#content").css('font-weight', 'bold');
});
$('.iets4').click(function() {
  $("#content").css('text-decoration', 'underline');
});

  $('.iets5').on({
    'click': function() {
         var src = ($('img').attr('src') === 'jquery-logo.jpg')
            ? 'jquery-logo.png'
            : 'error404.png';
         $('img').attr('src', src);
    }
  });

$('.iets6').click(function() {
  $("#content").css('font-size', '25px');
});
$('.iets7').click(function() {
  $( ".bleh" ).append( "<p>chapter 1:</p>" );
  $( ".bleh2" ).append( "<p>chapter 2:</p>" );
});


$(function() {
  $(document).tooltip({
    content: function() {
      return $(this).prop('title');
    },
    show: null,
    close: function(event, ui) {
      ui.tooltip.hover(

        function() {
          $(this).stop(true).fadeTo(400, 1);
        },

        function() {
          $(this).fadeOut("400", function() {
            $(this).remove();
          })
        });
    }
  });
});