$("img").dblclick(function() {
  var img = $("#itachi");

  if (img.width() < 200)
  {
      img.animate({width: "300px", height: "300px"}, 1000);
  }
  else 
  {
      img.animate({width: img.attr("width"), height: img.attr("height")}, 1000);
  }
});