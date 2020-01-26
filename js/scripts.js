$(document).ready(function(){
  $("#submit").click(function(){
    var Language = $("input:radio[name=Language]:checked").val();
    if (Language === "x"){
      $("#Javascript").show();
      $("#Ruby").hide();
      $("#Python").hide();
    } else if (Language === "y"){
      $("#Ruby").show();
      $("#Javascript").hide();
      $("#Python").hide();
    } else {
      $("#Python").show();
      $("#Javascript").hide();
      $("#Ruby").hide();
    }
  })
})
