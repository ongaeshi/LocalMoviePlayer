//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

// ���[�h�C�x���g
addEvent(window, "load", function() {
  MovieLib.setTime(10);
});

// �L�^�{�^�����N���b�N
function record_button_click() {
  var time = MovieLib.getTime();
  //alert(time);
  MovieLib.setTime(time + 10);
}
