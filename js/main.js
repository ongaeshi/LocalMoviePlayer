//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

var THUMB_SIZE = {width:355, height:200};

// time  : 時間
// image : base64化されたデータ
var gStorage = [
  {time:0, thumbnail:""},
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

// 記録ボタン
function record_button_click() {
  var time = MovieLib.getTime();
  gStorage.unshift({time:time, thumbnail:""});
  update_playlist();
  gStorage[0].thumbnail = copyFrame("canvasload0");
  LocalStorage.save(gStorage);
}

// クリアボタン
function clear_button_click() {
  gStorage = [];
  update_playlist();
  LocalStorage.save(gStorage);
}

// プレイリストの更新
function update_playlist() {
  $("#comments article").remove();

  for( var i = 0; i < gStorage.length; i++ ) {
    var time = gStorage[i].time;
    $("#comments").append("<article><header>" +
                          "<a href=\"#\" onclick=\"MovieLib.setTime(" + time + ")\">capture on <time datetime=\"\">" + time +"</time></a>" +
        	          "<canvas id=\"canvasload" + i + "\" width=\"" + THUMB_SIZE.width + "\" height=\"" + THUMB_SIZE.height + "\"></canvas>" +
                          "<p>comment.</p>" +
                          "</header>" +
                          "</article>");
  }

  for ( var i = 0; i < gStorage.length; i++ ) {
    loadFrame("canvasload" + i, gStorage[i].thumbnail);
  }
}

