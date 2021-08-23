// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  hoursd = ("0" + hours).slice(-2)
  minutesd = ("0" + minutes).slice(-2)
  secondsd = ("0" + seconds).slice(-2)
  document.getElementById("demo").innerHTML = hoursd + ":"
  + minutesd + ":" + secondsd;
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function showPresetOptions() {
    // assume list exists and we will load that into an html list
    // the list header will be be prefix settings' names
    // upon adding new search queries, the table gets edited
    // input for 
    document.getElementById("add_to_me").innerHTML += 
      "";
}
