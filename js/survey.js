$(document).ready(function(){



$("#submitsurvey").click(function(){



event.preventDefault();

var beverage = parseInt($("#beverage").val());
var starwars = parseInt($("#starwars").val());
var travel = parseInt($("#travel").val());
var food = parseInt($("#food").val());
var sushi = parseInt($("#sushi").val());

    
var total = beverage + starwars + travel + food + sushi;



if (total < 7 ){
alert("you should choose Ruby!");}

else if (total > 6 && total <= 10 ){
alert("you should choose C#!");}

else if (total > 10 ){
 alert("you should choose python!");}

 }

)
 event.preventDefault();
})