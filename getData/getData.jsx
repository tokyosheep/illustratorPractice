(function(){
    var doc = app.activeDocument;
    doc.rulerOrigin = [0, doc.height];//座標の原点をアートボードの左上に設定

    var newLayer = activeDocument.layers.add();
    newLayer.name = "data";

    var dObj = new Date();
    var m = dObj.getMonth() + 1;
    var d = dObj.getDate();
    var h = dObj.getHours();
    var minute = dObj.getMinutes();
    var textObj = activeDocument.textFrames.add();
    
    textObj.contents = m +"月"+ d +"日" + h +":" + minute + "   :" + app.activeDocument.name; 
    textObj.paragraphs[0].size = 50; // 64pt 
    textObj.left = 0;
    textObj.top = 0;
})();