$('#title').on('mouseover', function() {
  $(this).html("ya done moused ova me");
});

$('#title').on('mouseout', function() {
  $(this).html("AlgorithmGrind");
});

$('#bfs').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px"
  }, 1000).animate({
    "letter-spacing": "0px"
  }, 1000);
});

$('marquee').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px"
  }, 1000).animate({
    "letter-spacing": "0px"
  }, 1000);
});
