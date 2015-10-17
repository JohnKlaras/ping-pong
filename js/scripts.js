$(document).ready(function() {

    $("#blank form").submit(function(event) {
      var howManyMatches = $("input#matches").val();
      console.log(howManyMatches);
    });

});
