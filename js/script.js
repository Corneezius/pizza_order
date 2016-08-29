$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var ruby = $("#ruby").val();
    var front = $("#front").val();
    var cPlus = $("#cPlus").val();
    var droid = $("#javas").val();
    var php  = $("#php").val();
    $("li").hide();
    if(front === "I want to make websites look great!") {
      $(".frontEnd").show();
    }
    else if (cPlus === "Yes") {
      $(".cPlus").show();
    }
    else if(ruby === "Yes") {
      $(".ruby").show();
    }
    else if (php === "Yes") {
      $(".php").show();
    }
    else {
      $(".javas").show();
    }
  });
});
