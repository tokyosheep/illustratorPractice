(function(){
    "use strict";
    var doc = app.activeDocument;
    doc.rulerOrigin = [0, doc.height];//座標の原点をアートボードの左上に設定
    //$.writeln(app.activeDocument.documentColorSpace);
    var WriteColorData = function(select){    
        this.select = select;
        this.colorSpace = app.activeDocument.documentColorSpace;
        this.textObj = activeDocument.textFrames.add();
        this.strong = 0;
        this.color = this.setColor();
        if(!this.color) return false;
        this.textFillColor = this.readObjColor();
    }

    WriteColorData.prototype.setColor = function(){
            var itemColor;
            if(this.select.fillColor.typename === "SpotColor"){
                for( p in this.select.fillColor.spot.color){
                }
                //$.writeln(this.select.fillColor.spot.name);
                itemColor = this.select.fillColor.spot.color;
            }else if(this.select.fillColor.typename === "RGBColor"||this.select.fillColor.typename === "CMYKColor"){
                itemColor = this.select.fillColor;
            }else{
                return false;
            }
            var color = {};
            for(var key in itemColor){
                color[key] = itemColor[key];
                var num = parseFloat(itemColor[key]);
                if(key == "black"){
                    this.strong += num*2;
                }else if(isNaN(num)){
                    continue
                }else{
                    this.strong += num;
                }
            }
            return color;
    }

    WriteColorData.prototype.readObjColor = function(){
        if(this.colorSpace == "DocumentColorSpace.CMYK" && this.strong > 200){
            return "white";
        }
        if(this.colorSpace == "DocumentColorSpace.RGB" && this.strong < 370){
            return "white";
        }
        return "black;"
    }

    WriteColorData.prototype.setTextColor = function(keyColor){
        var obj = {
            red:0,
            blue:0,
            green:0,
            cyan:0,
            magenta:0,
            yellow:0,
            black:0,
            setColor:function(num){
                for(var p in this){
                    this[p] = num;
                }
            }
        }
        var num = 0;
        if(this.colorSpace ==  "DocumentColorSpace.CMYK"){
            num = keyColor === "white" ? 0 : 100;
            obj.setColor(num);
            return setCMYKColor(obj);
        }
        if(this.colorSpace == "DocumentColorSpace.RGB"){
             num = keyColor === "white" ? 255 : 0;
             obj.setColor(num);
            return setRGBColor(obj);
        }

        function setCMYKColor(obj){
            var CMYK = new CMYKColor();
            CMYK.cyan = obj.cyan;
            CMYK.magenta = obj.magenta;
            CMYK.yellow = obj.yellow;
            CMYK.black = obj.black;
            return CMYK;
        }
        
        function setRGBColor(obj){
            var RGB = new RGBColor();
            RGB.red = obj.red;
            RGB.green = obj.green;
            RGB.blue = obj.blue;
            return RGB;
        }
    }

    WriteColorData.prototype.constructText = function(){
        var content = "";
        for(var key in this.color){
            this.color[key] = parseFloat(this.color[key]);
            if(!isNaN(this.color[key])){
                this.color[key] = this.color[key].toFixed(2);
            }else{
                continue;
            }
            content += key.toUpperCase() +":"+this.color[key]+"\n";
        }    
        return content;
    }

    WriteColorData.prototype.writeDown = function(){
        if(!this.color) return false;
        this.textObj.contents = this.constructText();
        var colorObj = this.setTextColor(this.textFillColor);

        for(var i=0;i<this.textObj.characters.length;i++){
            this.textObj.characters[i].size = 15;
            this.textObj.characters[i].fillColor = colorObj;
            //$.writeln(this.textObj.characters[i].size);
        }
        this.textObj.left = this.select.left;
        this.textObj.top = this.select.top - this.select.height + this.textObj.height;
        this.textObj.move(lay, ElementPlacement.PLACEATBEGINNING);
    }
    var lay = app.activeDocument.layers.add();
    lay.name = "color data";
    for(var n=0;n<activeDocument.selection.length;n++){
        
        var writeData = new WriteColorData(activeDocument.selection[n]);
        writeData.writeDown();
    }
    
    
})();