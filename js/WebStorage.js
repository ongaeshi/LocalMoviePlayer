//
// @file 
// @brief  localStorageを利用した、ページ単位のデータのセーブとロード
// @author ongaeshi
// @date   2011/02/25

var WebStorage = (function() {
  function key() {
    return document.location.pathname;
  }
  
  function save(object) {
    v = window.localStorage.getItem(name);
    JSON.stringify()
  }

  funtion load() {
    return 
  }
  
  function get(name) {
    if (!name)
      name = key();
      
    v = window.localStorage.getItem(name);

    if (v)
      return parseInt(window.localStorage.getItem(name));
    else
      return 0;
  }
  
  function set(v) {
    window.localStorage.setItem(key(), v);
  }
  
  function _dump() {
    //console.log(key() + " : " + get());
  }
  
  return {
    inc: function() {
      set(get() + 1);
      _dump();
    },
    
    count: function(name) {
      return get(name);
    },
    
    clear: function() {
      window.localStorage.clear();
      _dump();
    },

    clearNotify: function(url) {
      if (confirm("記録をクリアします、よろしいですか？")) {
        WebStorage.clear();

        if (url)
          location.replace(url);
	else
          location.replace(key());
      }
    },

    dump: function() {
      _dump();
    }
  };
})();
