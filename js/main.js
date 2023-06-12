
$(function(){
    $('header').each(function(){
        var $window = $(window),
            $header = $(this),
            //ヘッダーボックスの初期位置を取得
            headeBoxTop = $header.offset().top;
  
        //スクロールイベントを監視
        $window.on('scroll',function(){
            //スクロール量がヘッダーボックスの
            //初期位置より多ければクラスを追加
            if($window.scrollTop()>headeBoxTop){
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        });
        //ウィンドウのスクロールイベントを発生させる
        $window.trigger('scroll');
    });
  });