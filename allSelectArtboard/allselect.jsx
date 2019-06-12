(function(){
    activeDocument.selection = null;
    var abIndex = 0;
    var rect = activeDocument.artboards[abIndex].artboardRect;//アートボードの座標軸
    var ax1 = rect[0];
    var ay1 = -rect[1];
    var ax2 = rect[2];
    var ay2 = -rect[3];
    var p = activeDocument.pageItems;
    $.writeln(rect);
    for(var i=p.length-1;i >=0; i--){
        var geo = p[i].geometricBounds;
        $.writeln(p[i]);
        if(!geo){ continue;}
        var x1 = geo[0];
        var y1 = -geo[1];
        var x2 = geo[2];
        var y2 = -geo[3];
        if((x1>=ax1)&&(y1>=ay1)&&(x2<=ax2)&&(y2<=ay2)){
            try{
                p[i].selected = true;
            }catch(e){
                $.writeln("layer locked");
            }
        }

    }

})();