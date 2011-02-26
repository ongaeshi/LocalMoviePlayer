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
  // データのロード
  var data = LocalStorage.load();
  if (data)
    gStorage = data;

  // データのセーブ
  update_playlist();
});

// プレイリストの更新
function update_playlist() {
  $("#comments article").remove();

  for( var i = 0; i < gStorage.length; i++ ) {
    var time = gStorage[i].time;
    $("#comments").append("<article><header>" +
                          "<a href=\"#\">capture</a> on <time datetime=\"\" onclick=\"MovieLib.setTime(" + time + ")\">" + time + "</time>" +
                          "</header>" +
                          "<p>comment.</p>" +
                          "</article>");
  }
}

// 記録ボタン
function record_button_click() {
  var time = MovieLib.getTime();
  gStorage.push({time:time});
  LocalStorage.save(gStorage);
  update_playlist();
}

// クリアボタン
function clear_button_click() {
  gStorage = [];
  LocalStorage.save(gStorage);
  update_playlist();
}
