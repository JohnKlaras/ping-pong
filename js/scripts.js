$(document).ready(function() {

    $("#blank form").submit(function(event) {
      var howManyMatches = $("input#matches").val();
      console.log(howManyMatches);

      for (var index = 0; index <= howManyMatches; index += 1) {
        // console.log(index);
      if (index % 3 === 0 && index % 5 === 0) {
        document.write("Ping-pong! Bruce Lee Wins!");
      } else if (index % 3 === 0) {
        document.write("Ping! Bruce Lee Wins!");
      } else if (index % 5 === 0) {
        document.write("Pong! Bruce Lee Wins!");
      } else {
        document.write("You lasted " + index + " volleys against Bruce Lee, but he still won.");
      }
    };

  });
    event.preventDefault;
});
