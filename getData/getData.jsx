/*    write present time on art board   */
(function(){
    var doc = app.activeDocument;
    doc.rulerOrigin = [0, doc.height];//set the origin point on top left of artBoard

    var newLayer = activeDocument.layers.add();//add layer
    newLayer.name = "data";//set layer name

    var dObj = new Date();//create date object
    var m = dObj.getMonth() + 1;
    var d = dObj.getDate();
    var h = dObj.getHours();
    var minute = dObj.getMinutes();
    var textObj = activeDocument.textFrames.add();
    
    textObj.contents = m +"month "+ d +"day " + h +":" + minute + "   :" + app.activeDocument.name; 
    textObj.paragraphs[0].size = 50; // 64pt 
    textObj.left = 0;
    textObj.top = 0;
})();