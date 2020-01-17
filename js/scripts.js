$(document).ready(function(){

  $("#submit").click(function(){

    event.preventDefault();





    var Language = $("input:radio[name=Language]:checked").val();



    if (Language === "x"){

      alert("You have selected Javascript")

      $("#Javascript").show();

      $("#Ruby").hide();

      $("#Python").hide();

    } else if (Language === "y"){

      alert("You have selected Ruby")

      $("#Ruby").show();

      $("#Javascript").hide();

      $("#Python").hide();

    } else {

      alert("You have selected Python")

      $("#Python").show();

      $("#Javascript").hide();

      $("#Ruby").hide();

    }





  })

  event.preventDefault();

})