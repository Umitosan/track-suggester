$(document).ready(function() {


  $("#reload_btn").click(function() {
    location.reload();
  });

  $("#show_all_btn").click(function() {
    $(".ruby_rails").show();
    $(".php_drupal").show();
    $(".java_android").show();
    $(".css_design").show();
    $(".c_net").show();
  });

  $("#mainform_drops").submit(function(event) {
    event.preventDefault();

    var question1 = $("#question1_drop :selected").val();
    var question2 = $("#question2_drop :selected").val();
    var question3 = $("#question3_drop :selected").val();
    var question4 = $("#question4_drop :selected").val();
    var question5 = $("#question5_drop :selected").val();

    var emtpyfields = 1;

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
    } else if (question1 === "Windows/Android") {
      $(".c_net").show();
      $(".java_android").show();
    } else {
      emptyfields = 0;
    }

    //QUESTION 2 LOGIC
    if ((question2 === "graphics") && (question2 === "UI/layout")) {
      $(".css_design").show();
      $(".ruby_rails").show();
    } else if ((question2 === "databases/organizing structures")) {
      $(".c_net").show();
      $(".css_design").hide();
    } else {
      emptyfields = 0;
    }

    //QUESTION 3 LOGIC
    if (question3 === "Mobile games") {
      $(".java_android").show();
    } else if (question3 === "Desktop games") {
      $(".css_design").hide();
      $(".php_drupal").hide();
    } else if (question3 === "Video games are for children!") {
      $(".java_android").hide();
      $(".php_drupal").show();
    } else {
      emptyfields = 0;
    }

    //QUESTION 4 LOGIC
    if (question4 === "I love the complexity of databases!") {
      $(".php_drupal").show();
      $(".css_design").hide();
      $(".java_android").hide();
    } else if (question4 === "Databases sound boring and tedious") {
      $(".css_design").show();
      $(".java_android").show();
    } else {
      emptyfields = 0;
    }

    //QUESTION 5 LOGIC
    if (question5 === "I prefer large teams") {
      $(".c_net").show();
      $(".css_design").hide();
      $(".ruby_rails").hide();
    } else if (question5 === "I prefer small teams") {
      $(".ruby_rails").show();
      $(".php_drupal").show();
      $(".java_android").show();
      $(".c_net").hide();
      $(".css_design").hide();
    } else if (question5 === "I prefer to work alone") {
      $(".css_design").show();
      $(".php_drupal").show();
      $(".ruby_rails").hide();
    } else {
      emptyfields = 0;
    }

    if (emptyfields === 1) {
      alert("The picker works best if you fill all fields! Reload the page to recieve a more accurate pick.");
    } else {
      return 0;
    }

  });

});
