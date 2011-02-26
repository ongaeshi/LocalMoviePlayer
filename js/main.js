//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

// time  : ����
// image : base64�����ꂽ�f�[�^
var gStorage = [
  {time:10, thumbnail:""},
  {time:20, thumbnail:""},
  {time:30, thumbnail:""}
];

// ���[�h�C�x���g
addEvent(window, "load", function() {
  // �f�[�^�̃��[�h
  var data = LocalStorage.load();
  if (data)
    gStorage = data;

  // �f�[�^�̃Z�[�u
  update_playlist();
});

// �v���C���X�g�̍X�V
function update_playlist() {
  $("#d_playlist_ul li").remove();

  for( var i = 0; i < gStorage.length; i++ ) {
    var time = gStorage[i].time;
    $("#d_playlist_ul").append("<li><button onclick=\"" + "MovieLib.setTime(" + time + ")\">" + time + "</button>");
  }
}

// �L�^�{�^��
function record_button_click() {
  var time = MovieLib.getTime();
  gStorage.push({time:time});
  LocalStorage.save(gStorage);
  update_playlist();
}

// �N���A�{�^��
function clear_button_click() {
  gStorage = [];
  LocalStorage.save(gStorage);
  update_playlist();
}
