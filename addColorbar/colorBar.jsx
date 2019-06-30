(function(){
    //var mm = 0.352778;
    var barPath = new File(Folder.desktop + "/colorbar/" + "bar.psd");

    //var item = app.selecttion[0];
    function TriMark(){
        var item = app.selection[0];
        this.x1 = item.geometricBounds[0];
        this.y1 = item.geometricBounds[1];
        this.x2 = item.geometricBounds[2];
        this.y2 = item.geometricBounds[3];
        
        this.position =  this.width < this.height ? "vertical" : "horizontal";
        
    }

    TriMark.prototype.addBar = function(){
        this.layer = activeDocument.layers.add();
        this.layer.name = "colorBar";
        
        this.colorBar = [];
        for(var i=0;i<2;i++){
            this.colorBar[i] = activeDocument.placedItems.add();
            this.colorBar[i].file = barPath;
        }
    }

    TriMark.prototype.moveVertical = function(){
        for(var i=0;i<2;i++){
            this.colorBar[i].top = this.y1;
            this.colorBar[i].height = this.height;
        }
        this.colorBar[0].left = this.x1;
        this.colorBar[1].left = this.x2;
    }

    TriMark.prototype.moveHorizontal = function(){
        var tMatrix = app.getTranslationMatrix(0,0);
        var mtx = concatenateRotationMatrix(tMatrix,90);
        for(var i=0;i<2;i++){
            this.colorBar[i].transform(mtx);
            this.colorBar[i].left = this.x1;
            this.colorBar[i].width = this.width;
        }
        this.colorBar[0].top = this.y1;
        this.colorBar[1].top = this.y2; 
    }

    var trim = new TriMark();
    activeDocument.selection = null;//選択解除
    trim.addBar();
    if(trim.position === "horizontal"){
        trim.moveHorizontal();
    }else if(trim.position === "vertical"){
        trim.moveVertical()
    }else{
        alert("the value is invalid");
    }
   //trim.moveHorizontal();
})();