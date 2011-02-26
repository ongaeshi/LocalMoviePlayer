//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

var TIME_ARRAY = [];

// ���[�h�C�x���g
addEvent(window, "load", function() {
  update_playlist();
});

// �v���C���X�g�̍X�V
function update_playlist() {
  $("#d_playlist_ul li").remove();

  for( var i = 0; i < TIME_ARRAY.length; i++ ) {
    var time = TIME_ARRAY[i];
    $("#d_playlist_ul").append("<li><button onclick=\"" + "MovieLib.setTime(" + time + ")\">" + time + "</button>");
  }
}

// �L�^�{�^��
function record_button_click() {
  var time = MovieLib.getTime();
  TIME_ARRAY.push(time);
  update_playlist();
}

// �N���A�{�^��
function clear_button_click() {
  TIME_ARRAY = [];
  update_playlist();
}
