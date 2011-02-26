//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

// ロードイベント
addEvent(window, "load", function() {
  MovieLib.setTime(10);
});

// 記録ボタンをクリック
function record_button_click() {
  var time = MovieLib.getTime();
  //alert(time);
  MovieLib.setTime(time + 10);
}
