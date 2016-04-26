;(function($){
    //加载mylayer.css
    loadCss();
    function loadCss(){
          var scripts=$("script");
          var myscript=scripts[scripts.length-1];
          var myscriptSrc=$(myscript).attr("src");
          var myCssSrc=myscriptSrc.substring(0,myscriptSrc.lastIndexOf("/"))+"/skin/jdialog.css";
          $("<link>").attr("rel","stylesheet").attr("href",myCssSrc).appendTo("head");
    }
    $.extend({
        $alert:function(tip){
            $("body").append("<div id='myMask'></div>");
            $("body").append("<div id='myAlert'><div id='myLayerTitle'><span class='myLayerTip'>提示</span><span id='myLayerclose'></span></div><div id='myAlertContent'>"+tip+"</div><div class='myLayerBtn'><button id='myLayerYes'>确定</button></div></div>");
            $("#myAlert").css("marginTop",-$("#myAlert").height()/2);
            $("#myLayerclose,#myLayerYes").bind("click",function(){
                  $("body #myMask,body #myAlert").remove();
            });
        },
        $confirm:function(tip,confirm,cancel){
            $("body").append("<div id='myMask'></div>");
            $("body").append("<div id='myConfirm'><div id='myLayerTitle'><span class='myLayerTip'>提示</span><span id='myLayerclose'></span></div><div id='myAlertContent'>"+tip+"</div><div class='myLayerBtn'><button id='myLayerYes'>确定</button><button id='myLayerNo'>取消</button></div></div>");
            $("#myConfirm").css("marginTop",-$("#myConfirm").height()/2);
            $("#myLayerclose").bind("click",function(){
                  $("body #myMask,body #myConfirm").remove();
            });
            $("#myLayerYes").bind("click",function(){
                 confirm();
                 $("#myLayerclose").trigger('click');
            });
            $("#myLayerNo").bind("click",function(){
                cancel();
                $("#myLayerclose").trigger('click');
            });
        }
    });
})(jQuery);