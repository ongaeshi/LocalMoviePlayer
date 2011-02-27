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

// フレームコピー
function copyFrame(id) {
  var cEle = document.getElementById( id ); 
  var cCtx = cEle.getContext("2d");
  var vEle = document.getElementById("myVideo" );

  cEle.width = 400 //vEle.videoWidth; 
  cEle.height = 200 //vEle.videoHeight; 

  cCtx.drawImage(vEle, 0 , 0 ) ; 

  var img_jpeg_src = cEle.toDataURL("image/jpeg");
  return img_jpeg_src;
}

// フレームロード
function loadFrame(index, t) {
  //alert("load");
  var cEle = document.getElementById( "canvasload" + t) ; 
  var cCtx = cEle.getContext("2d");

  //img要素の生成
  Img = new Image();
  //Base64化されたデータをimg要素にセットする
  Img.src = gStorage[index].thumbnail;
  //alert(Img.src);

  //RotateCanvasにImg要素を貼り付ける 
  cCtx.drawImage(Img, 0, 0); 
}

// 記録ボタン
function record_button_click() {
  var time = MovieLib.getTime();
  var data = copyFrame("canvasssample0");
  //gStorage.push({time:time, thumbnail:data});
  gStorage.unshift({time:time, thumbnail:data});
  LocalStorage.save(gStorage);
  update_playlist();
}

// クリアボタン
function clear_button_click() {
  gStorage = [];
  LocalStorage.save(gStorage);
  update_playlist();
}

// プレイリストの更新
function update_playlist() {
  $("#comments article").remove();

  for( var i = 0; i < gStorage.length; i++ ) {
    var time = gStorage[i].time;
    $("#comments").append("<article><header>" +
                          "<a href=\"#\">capture</a> on <time datetime=\"\" onclick=\"MovieLib.setTime(" + time + ")\">" + time + "</time>" +
        	          "<canvas id=\"canvasload" + i + "\" width=\"100\" hight=\"100\"></canvas>" +
                          "</header>" +
                          "<p>comment.</p>" +
                          "</article>");
  }

  for( var i = 0; i < gStorage.length; i++ ) {
    copyFrame("canvasload" + i);
    loadFrame(i, i);
  }
}

