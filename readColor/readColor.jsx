(function(){
    var colorType = app.activeDocument.documentColorSpace;
    var selObj = app.activeDocument.selection;
    $.writeln(colorType);
    for(var i=0;i<selObj.length;i++){
        if(colorType == DocumentColorSpace.RGB){
            var R = G = B = "透明";
            $.writeln(color);
            if(color.gradient){
                R = G = B = "グラデーションカラー";
            }
            if(color.gray){
                R = G = B = "グレー"+color.gray;
            }
            if(color.pattern){
                R = G = B = "パターン";
            }
            if(color.spot){
                R = G = B = "スポットカラー";
            }
            if(color.red || color.green || color.blue){
                R = color.red;
                G = color.green;
                B = color.blue;
            }
            alert("RGB MODE: R="+R+", G="+G+", B="+B);
        }else{
            var C = M = Y = K = "透明";
            if(color.gradient){
                C = M = Y = K = "グラデーション";
            }
            if(color.gray){
                C = M = Y = K = "グレー :"+color;
            }
            if(color.pattern){
                C = M = Y = K = "パターン";
            }
            if(color.spot){
                C = M = Y = K = "スポットカラー";
            }
            if(color.cyan||
            color.magenta||
            color.yellow||
            color.black){
                C = color.cyan;
                M = color.magenta;
                Y = color.yellow;
                K = color.black;
            }
            alert("CMYK Mode : C="+C+", M="+M+", Y="+Y+", K="+K);
        }
    }
})();