$(document).ready(function(){
  $("#submitsurvey").click(function(){
    var beverage = parseInt($("#beverage").val());
    var starwars = parseInt($("#starwars").val());
    var travel = parseInt($("#travel").val());
    var food = parseInt($("#food").val());
    var sushi = parseInt($("#sushi").val());    
    var total = beverage + starwars + travel + food + sushi;
    if (total < 7 ){
      $("#Ruby").show();
      $("#Javascript").hide();
      $("#Python").hide();
    }
    else if (total > 6 && total <= 10 ){
      $("#Javascript").show();
      $("#Ruby").hide();
      $("#Python").hide();
    }
    else {
      $("#Python").show();
      $("#Javascript").hide();
      $("#Ruby").hide();
    }
  })
})