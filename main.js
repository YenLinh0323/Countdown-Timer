var anniversary = new Date("Mar23,2020 00:00:00").getTime();
var x = setInterval (function() {
  var now = new Date().getTime();
  var distance = anniversary - now ;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("love").innerHTML = days + "days, " + hours + "hours, " + minutes + "minutes " + seconds + " seconds";
  if (distance <= 0){
    document.getElementById("love").innerHTML = "HAPPY ONE YEAR!!!"
  }
})
