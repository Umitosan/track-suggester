$(document).ready(function() {

  $("#mainform_drops").submit(function(event) {
    event.preventDefault();

    var question1 = $("#question1_drop :selected").val();
    var question2 = $("#question2_drop :selected").val();
    var question3 = $("#question3_drop :selected").val();
    var question4 = $("#question4_drop :selected").val();
    var question5 = $("#question5_drop :selected").val();

    $("#out1").text(question1);
    $("#out2").text(question2);
    $("#out3").text(question3);
    $("#out4").text(question4);
    $("#out5").text(question5);

    $(".question_output_tmp").show();
    $("#answer_title").show();

    if ((question1 === "Please select") && (question2 === "Please select") && (question3 === "Please select") && (question4 === "Please select") && (question5 === "Please select")) {
      alert("You didn't select anything, why not give it a try?");
      location.reload();
    } else if ((question1 === "iOS/OSX") || (question1 === "Unix/Linux")) {
      $(".css_design").show();
      $(".ruby_rails").show();
      $(".php_drupal").show();
    } else if ( (question1 === "Windows/Android") ) {
      $(".c_net").show();
      $(".java_android").show();
    } else {
      alert("Question 1 is empty");
    }

    // "ruby_rails"
    // "php_drupal"
    // "java_android"
    // "css_design"
    // "c#_net"

    $("#show_all").click(function() {
      $(".ruby_rails").show();
      $(".php_drupal").show();
      $(".java_android").show();
      $(".css_design").show();
      $(".c_net").show();
    });

    $("#reload_btn").click(function() {
      location.reload();
      // alert("reset pushed");
    });

  });

});
