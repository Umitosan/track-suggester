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

    //QUESTION 1 LOGIC
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

    //QUESTION 2 LOGIC
    if ((question1 === "Please select") && (question2 === "Please select") && (question3 === "Please select") && (question4 === "Please select") && (question5 === "Please select")) {
      alert("You didn't select anything, why not give it a try?");
      location.reload();
    } else if ((question2 === "") || (question2 === "")) {

    } else if ( (question2 === "") ) {

    } else {
      alert("Question 2 is empty");
    }

    //QUESTION 3 LOGIC
    if ((question1 === "Please select") && (question2 === "Please select") && (question3 === "Please select") && (question4 === "Please select") && (question5 === "Please select")) {
      alert("You didn't select anything, why not give it a try?");
      location.reload();
    } else if ((question3 === "") || (question3 === "")) {

    } else if ( (question3 === "") ) {

    } else {
      alert("Question 3 is empty");
    }

    //QUESTION 4 LOGIC
    if ((question1 === "Please select") && (question2 === "Please select") && (question3 === "Please select") && (question4 === "Please select") && (question5 === "Please select")) {
      alert("You didn't select anything, why not give it a try?");
      location.reload();
    } else if ((question4 === "") || (question4 === "")) {

    } else if ( (question4 === "") ) {

    } else {
      alert("Question 4 is empty");
    }
    //QUESTION 5 LOGIC
    if ((question1 === "Please select") && (question2 === "Please select") && (question3 === "Please select") && (question4 === "Please select") && (question5 === "Please select")) {
      alert("You didn't select anything, why not give it a try?");
      location.reload();
    } else if ((question5 === "") || (question5 === "")) {

    } else if ( (question5 === "") ) {

    } else {
      alert("Question 5 is empty");
    }

    // ".ruby_rails"
    // ".php_drupal"
    // ".java_android"
    // ".css_design"
    // ".c#_net"

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
