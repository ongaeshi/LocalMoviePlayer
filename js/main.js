//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

// time  : 時間
// image : base64化されたデータ
var gStorage = [
  {time:10, thumbnail:""},
  {time:20, thumbnail:""},
  {time:30, thumbnail:""}
];

// ロードイベント
addEvent(window, "load", function() {
  update_playlist();
});

// プレイリストの更新
function update_playlist() {
  $("#d_playlist_ul li").remove();

  for( var i = 0; i < gStorage.length; i++ ) {
    var time = gStorage[i].time;
    $("#d_playlist_ul").append("<li><button onclick=\"" + "MovieLib.setTime(" + time + ")\">" + time + "</button>");
  }
}

// 記録ボタン
function record_button_click() {
  var time = MovieLib.getTime();
  gStorage.push({time:time});
  update_playlist();
}

// クリアボタン
function clear_button_click() {
  gStorage = [];
  update_playlist();
}
