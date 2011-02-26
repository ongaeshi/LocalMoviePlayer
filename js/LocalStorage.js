//
// @file 
// @brief  localStorage�𗘗p�����A�y�[�W�P�ʂ̃f�[�^�̃Z�[�u�ƃ��[�h
// @author ongaeshi
// @date   2011/02/25

var KEY = "video_data";

var LocalStorage = (function() {
  return {
    load: function(name) {
      return JSON.parse(window.localStorage.getItem(KEY));
    },

    save: function(data) {
      window.localStorage.setItem(KEY, JSON.stringify(data));
    }
  };
})();

