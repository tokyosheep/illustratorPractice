(function(){
    app.activeDocument.rulerOrigin = [0, app.activeDocument.height];//座標の原点をアートボードの左上に設定
    var rect = app.activeDocument.artboards[0].artboardRect;
    var bleedsLine = readBleed();
    $.writeln("rect3 :"+rect[3]);
    $.writeln("bleed :"+bleedsLine);
    $.writeln("artboard :"+rect);

    var newRect = [];

    newRect[0] = parseFloat(rect[0]) - bleedsLine[0];
    newRect[1] = parseFloat(rect[1]) + bleedsLine[1];
    newRect[2] = parseFloat(rect[2]) - bleedsLine[2];
    newRect[3] = parseFloat(rect[3]) + bleedsLine[3];

    $.writeln(newRect);
    app.activeDocument.artboards[0].artboardRect = newRect;

    function readBleed(){
        var f = app.activeDocument.fullName;
        f.open("r");
        var content = f.read();
        bleedBoxNum = content.match(/BleedBox\[.*?\]/); 
        content = content.match(/ArtBox\[.*?\]/); 
        $.writeln(bleedBoxNum);
        $.writeln(content);
        var contents = content[0].match(/\d+\.\d*/g);//裁ち落としデータをAIデータから直接読み込み
        f.close();
        $.writeln("contents :"+contents);
        var bleedSize = bleedBox(contents);
        return bleedSize;
        function bleedBox(contents){
            var acSize = app.activeDocument.artboards[0].artboardRect;
            var bleeds = [];
            for(var i=0;i<contents.length;i++){
                try{
                    bleedBoxNum[i] = parseFloat(bleedBoxNum[i]);
                    bleeds[i] = parseFloat(contents[i]);// * 0.352778;
                }catch(e){
                    return [0,0,0,0];
                }
            }
            $.writeln("acSize2: "+acSize[2]);
            $.writeln("bleed2: " +bleeds[2]);
            $.writeln("acSize3: "+acSize[3]);
            $.writeln("bleed3: " +bleeds[3]);
            bleeds[2] = bleeds[2] - parseFloat(acSize[2]);
            bleeds[3] = bleeds[3] + parseFloat(acSize[3]);
                //return [beeds[1],bleeds[3],bleeds[0],bleeds[2]];
            return bleeds;
        }
    }
})();
