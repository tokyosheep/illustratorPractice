(function(){
    var FindColor = function(){
        this.items = activeDocument.pathItems;
    }

    FindColor.prototype.CheckColors = function(){
        for(var i=0;i<this.items.length;i++){
            $.writeln(this.getBlack(this.items[i]));
            if(this.getBlack(this.items[i])){
                this.items[i].selected = true;
                app.executeMenuCommand("Find Fill & Stroke menu item");
                return;
            }
        }
    }

    FindColor.prototype.getBlack = function(item){
        var black = parseFloat(item.fillColor.black);
        return black > 95;
    }

    var find = new FindColor();
    find.CheckColors();
})();