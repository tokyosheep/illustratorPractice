(function(){
    /*
    if(app.activeDocument.selection.length !== 1){
        alert("オブジェクトを一つだけ選択してください");
        return;
    }
    var select = app.activeDocument.selection[0];
    */
    //var specialColor = registerSpotColor(name);
    //select.fillColor = specialColor;
    //select.fillColor = setCMYKColor(100,47,38,100);

    

    function registerSpotColor(name){
        var spObj = activeDocument.spots.add();
            spObj.name = name;
            spObj.colorType = ColorModel.PROCESS;
            spObj.color = setCMYKColor(100,47,38,0);
            var specialColor = new SpotColor();
            specialColor.spot = spObj;
            //zomboCut.tint = 100; 
            for( var p in spObj){
                $.writeln(p+";"+spObj[p]);
            }
            return specialColor;
    }

    

    function setCMYKColor(c,m,y,k){
    var CMYK = new CMYKColor();
        CMYK.cyan = c;
        CMYK.magenta = m;
        CMYK.yellow = y;
        CMYK.black = k;
        return CMYK;
    }
})();