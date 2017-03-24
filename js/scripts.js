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

    // $(".question_output").show();

    $("#reload_btn").click(function() {
      location.reload();
      alert("reset pushed");
    });

  });

});
