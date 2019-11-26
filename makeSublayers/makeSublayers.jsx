/* this script just make sub layers */
(function(){
    var LayersObj = function(limit){
        this.limit = limit;
        this.num = 0;
    }

    LayersObj.prototype.makeSubLayers = function(lay){
        var subLayer = lay.layers.add();
        subLayer.name = "subLayer";
        this.num++;
        if(this.limit > this.num){
            this.makeSubLayers(subLayer);
        }
    }

    var child = new LayersObj(5);
    child.makeSubLayers(activeDocument.activeLayer);
})();