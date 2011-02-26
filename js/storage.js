
function getTime() {
  return document.getElementById("myVideo").currentTime;
}

function record() {
  var time = getTime();
  alert(time);
}
