//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

addEvent(window, "load", function() {
  test();
});

function getTime() {
  return document.getElementById("myVideo").currentTime;
}

function record_button_clickd() {
  var time = getTime();
  alert(time);
}

function test_10() {
  document.getElementById("myVideo").currentTime = 10;
}

function test_20() {
  document.getElementById("myVideo").currentTime = 20;
}
