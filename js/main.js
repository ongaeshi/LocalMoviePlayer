//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

var TIME_ARRAY = [8, 14, 35, 2, 50];

// ロードイベント
addEvent(window, "load", function() {
  MovieLib.setTime(0);
  update_playlist();
});

function update_playlist() {
  var playlist = document.getElementById("d_playlist");

  var html = "";
  html += "<ul>\n";

  for( var i = 0; i < TIME_ARRAY.length; i++ ) {
    var time = TIME_ARRAY[i];
    html += "<li><button onclick=\"" + "MovieLib.setTime(" + time + ")\">" + time + "</button>";
  }

  html += "</ul>\n";

  playlist.innerHTML = html;
}

// 記録ボタンをクリック
function record_button_click() {
  var time = MovieLib.getTime();
  //alert(time);
  MovieLib.setTime(time + 10);
}
