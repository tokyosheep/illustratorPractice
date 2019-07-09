(function(){
    function applySpotColor(){
        $.writeln(activeDocument.swatches[1].name);
        var selObj = app.activeDocument.selection[0];
        var PMSColor = app.activeDocument.swatches.getByName('special');
        selObj.fillColor = PMSColor.color;
        function getspotColorFromItem(){
            var selObj = app.activeDocument.selection[0];
            $.writeln(selObj.fillColor.spot);
            for(var p in selObj.fillColor.spot){
                $.writeln(p+":"+selObj.fillColor.spot[p]);
            }
        }   
    }
    function loadswatchColor(){
        var swColor = activeDocument.swatches.getSelected();
        for(var k in swColor){
            $.writeln(k+":"+swColor[k]);
        }
    }
    


    function makeSpotColor(){
        var spObj = activeDocument.spots.add();
        spObj.name = "special";
        spObj.colorType = ColorModel.SPOT;
        spObj.color = setCMYKColor(50,100,0,0);
        var spotColor = new SpotColor();
        spotColor.spot = spotColor;

        function setCMYKColor(c,m,y,k){
            var CMYK = new CMYKColor();
            CMYK.cyan = c;
            CMYK.magenta = m;
            CMYK.yellow = y;
            CMYK.black = k;
            return CMYK;
        }
    }



    
})();