(function(){
    var RichBlack = function(color){
        this.color = {};
        this.color.cyan = color[0];
        this.color.magenta = color[1];
        this.color.yellow = color[2];
        this.color.black = color[3];
    }

    RichBlack.prototype.isRich = function(obj){
        for(var key in this.color){
            /*
            $.writeln("path :"+obj[key]);
            $.writeln("rich :"+this.color[key]);
            */
            if(isSameColor(parseFloat(this.color[key]),Math.round(parseFloat(obj[key])))){
                return false;
            }
        }
        return true;
        function isSameColor(color1,color2){
            var val = color1 - color2;
            return val < 0 ? -val : val;
        }
    }





    var FindColor = function(){
        this.items = activeDocument.pathItems;
        this.oki = new RichBlack([25,3,10,100]);
        this.pigment = new RichBlack([20,10,10,100]);
        this.sureColor = new RichBlack([10,10,10,100]);
    }

    FindColor.prototype.CheckColors = function(){
        for(var i=0;i<this.items.length;i++){
            try{
                //$.writeln(this.items[i].fillColor.colorType);
                if(this.getBlack(this.items[i])&&this.isStrongColor(this.items[i])){
                    this.items[i].selected = true;
                    app.executeMenuCommand("Find Fill & Stroke menu item");
                    return;
                }
            }catch(e){
                $.writeln(e);
                continue;
            }
        }
    }

    FindColor.prototype.getBlack = function(item){
        if(this.oki.isRich(item.fillColor))return false;
        if(this.pigment.isRich(item.fillColor))return false;
        if(this.sureColor.isRich(item.fillColor))return false;
        var black = parseFloat(item.fillColor.black);
        return black > 95;
    }

    FindColor.prototype.isStrongColor = function(color){
        var sum = 0;
        sum = parseFloat(color.fillColor.cyan) + parseFloat(color.fillColor.magenta) + parseFloat(color.fillColor.yellow);
        sum += parseFloat(color.fillColor.black)*2;
        return sum > 199;
    }

    var find = new FindColor();
    find.CheckColors();
})();