# -*- coding: utf-8 -*-
#
# @file 
# @brief  テストwebサーバー起動スクリプト
# @author ongaeshi
# @date   2011/01/24

require 'webrick'
include WEBrick

# ブラウザ開く
system("open http://localhost:8002/")

# webサーバー立ち上げ
s = HTTPServer.new(:Port => 8002, :DocumentRoot => Dir::pwd)
trap("INT"){ s.shutdown }
s.start

