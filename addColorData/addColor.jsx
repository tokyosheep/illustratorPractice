(function(){
    "use strict";
    var doc = app.activeDocument;
    doc.rulerOrigin = [0, doc.height];//座標の原点をアートボードの左上に設定
    $.writeln(app.activeDocument.documentColorSpace);
    var WriteColorData = function(){
        
        this.select = activeDocument.selection[0];
        this.colorSpace = app.activeDocument.documentColorSpace;
        this.textObj = activeDocument.textFrames.add();

        this.color = this.setColor();
    }

    WriteColorData.prototype.setColor = function(){
            var color = {};
            for(var key in this.select.fillColor){
                color[key] = this.select.fillColor[key];
                $.writeln(this.select.fillColor[key]);
            }
            return color;
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
                $.writeln(num);
                for(var p in this){
                    this[p] = num;
                    $.writeln(this[p]);
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
                this.color[key] = Math.floor(this.color[key]);
            }else{
                continue;
            }
            content += key.toUpperCase() +":"+this.color[key]+"\n";
        }    
        return content;
    }

    WriteColorData.prototype.writeDown = function(){
        this.textObj.contents = this.constructText();
        var colorObj = this.setTextColor("white");

        for(var i=0;i<this.textObj.characters.length;i++){
            this.textObj.characters[i].size = 15;
            this.textObj.characters[i].fillColor = colorObj;
            //$.writeln(this.textObj.characters[i].size);
        }
        $.writeln(this.select.left);
        this.textObj.left = this.select.left;
        this.textObj.top = this.select.top - this.select.height + this.textObj.height;
    }
    var writeData = new WriteColorData();
    writeData.writeDown();
    
})();