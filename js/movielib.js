//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/26

var MovieLib = (function() {
  return {
    getTime: function() {
      return document.getElementById("myVideo").currentTime;
    },
    
    setTime: function(time) {
      document.getElementById("myVideo").currentTime = time;
    }
  };
})();
