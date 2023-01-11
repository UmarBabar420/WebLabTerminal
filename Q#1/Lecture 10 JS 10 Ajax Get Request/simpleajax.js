$(function() {
  $("#load").click(function() {
    $.get("https://dummyjson.com/docs/posts", function(response) {
      $("#result").empty();
      $("#result").append(response);
    });
  });
});
