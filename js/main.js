//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

var TIME_ARRAY = [10, 20, 30, 40, 50];

// ロードイベント
addEvent(window, "load", function() {
  MovieLib.setTime(0);
});

// 記録ボタンをクリック
function record_button_click() {
  var time = MovieLib.getTime();
  //alert(time);
  MovieLib.setTime(time + 10);
}
