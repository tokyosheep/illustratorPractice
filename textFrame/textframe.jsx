(function(){
    var selObj = activeDocument.selection;
    for(var i=0;i<selObj.length;i++){
        var left = selObj[i].left;
        var top = selObj[i].top;
        var width = selObj[i].width;
        var height = selObj[i].height;
        //geometricBounds
        var gBox = selObj[i].geometricBounds;
        var gLeft = gBox[0];
        var gTop = gBox[1];
        var gRight = gBox[2];
        var gBottom = gBox[3];
        //control
        var cBox = selObj[i].controlBounds;
        var cLeft = cBox[0];
        var cTop = cBox[1];
        var cRight = cBox[2];
        var cBottom = cBox[3];
        
        var text = "の座標\rLeft :" +left+"Top : "+top+"\r\rwidth:"+width+"\rheight :"+height; 
        text = text + "\r\rのGeometric Bounds\r";
        text = text + "left : "+gLeft+"\rtop : "+gTop+"\rright:"+gRight+"\rbottom :"+gBottom;
        text = text + "\r\rのControl Bounds\r";
        text = text + "left :"+cLeft+"\rtop : "+cTop+"\rright :"+cRight+"\r:bottom : "+cBottom;
        $.writeln(text);
    }
})();