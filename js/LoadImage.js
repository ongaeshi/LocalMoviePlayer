//
// @file 
// @brief
// @author ongaeshi
// @date   2011/02/27

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

