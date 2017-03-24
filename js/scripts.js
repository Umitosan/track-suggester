$(document).ready(function() {

  $("#mainform_drops").submit(function(event) {
    alert("button function");

    var question1 = $("#question1_drop :selected").val();
    var question1 = $("#question2_drop :selected").val();
    var question1 = $("#question3_drop :selected").val();
    var question1 = $("#question4_drop :selected").val();
    var question1 = $("#question5_drop :selected").val();

    $("#out1").text(question1);
    $("#out2").text(question2);
    $("#out3").text(question2);
    $("#out4").text(question2);
    $("#out5").text(question2);

    // $(".question_output").show();

    $("#reset_btn").click(function() {
    location.reload();
    });
    event.preventDefault();

  });

});
