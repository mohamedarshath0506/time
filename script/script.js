/**
 *
 * script.js
 * @author- Arshath
 * @date- 29/11/2022
 */
function time() {
  var first = new Date();
  var hour = first.getHours();
  document.getElementById("hours").innerHTML = hour % 12;
  if (hour < 12) {
    timeing = "AM";
  } else {
    timeing = "PM";
  }
  document.getElementById("am").innerHTML = timeing;
  var minutes = first.getMinutes();
  document.getElementById("minute").innerHTML = minutes;
  var seconds = first.getSeconds();
  document.getElementById("second").innerHTML = seconds;
}
setInterval(() => time(), 1000);
