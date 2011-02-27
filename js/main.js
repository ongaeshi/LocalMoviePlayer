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

// フレームコピー
function copyFrame(id) {
  var canvas = document.getElementById(id); 
  var ctx = canvas.getContext("2d");
  var vEle = document.getElementById("myVideo");

  canvas.width = THUMB_SIZE.width; //vEle.videoWidth; 
  canvas.height = THUMB_SIZE.height; //vEle.videoHeight; 

  ctx.drawImage(vEle, 0, 0, canvas.width, canvas.height); 

  var img_jpeg_src = canvas.toDataURL("image/jpeg");
  return img_jpeg_src;
}

// フレームロード
function loadFrame(canvas_id, img_src) {
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext("2d");

  var img = new Image();
  img.src = img_src;

  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  }
}

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
                          "<a href=\"#\">capture</a> on <time datetime=\"\" onclick=\"MovieLib.setTime(" + time + ")\">" + time + "</time>" +
        	          "<canvas id=\"canvasload" + i + "\" width=\"" + THUMB_SIZE.width + "\" height=\"" + THUMB_SIZE.height + "\"></canvas>" +
                          "</header>" +
                          "<p>comment.</p>" +
                          "</article>");
  }

  for ( var i = 0; i < gStorage.length; i++ ) {
    loadFrame("canvasload" + i, gStorage[i].thumbnail);
  }
}

