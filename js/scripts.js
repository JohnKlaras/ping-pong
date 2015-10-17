$(document).ready(function() {

    $("#blank form").submit(function(event) {
      var howManyMatches = $("input#matches").val();
      console.log(howManyMatches);

      for (var index = 1; index <= howManyMatches; index += 1) {
        // console.log(index);
      if (index % 3 === 0 && index % 5 === 0) {
        document.write("<li>Round " + index + ": Ping-pong! Bruce Lee won!</li>");
      } else if (index % 3 === 0) {
        document.write("<li>Round " + index + ": Ping! Bruce Lee won!</li>");
      } else if (index % 5 === 0) {
        document.write("<li>Round " + index + ": Pong! Bruce Lee won!</li>");
      } else {
        document.write("<li>Round " + index + ": You lasted " + index + " volleys against Bruce Lee, but he still won.</li>");
      }
      event.preventDefault();


    };
    // $('li').prepend('Round' + index + ":");
  });

});
