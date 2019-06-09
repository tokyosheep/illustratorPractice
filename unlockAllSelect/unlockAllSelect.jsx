(function(){
    layerUnlock(activeDocument);
    var p = activeDocument.pageItems;
    for(var i=0;i < p.length;i++){
        try{
            p[i].selected = true;
        }catch(e){
            p[i].locked = false;
            p[i].selected = true;
        }
    }
    function layerUnlock(lay){
        for(i=0;i<lay.length;i++){
            lay.layers[i].locked = false;
            if(lay.layers.length > 0){
                layerUnlock(lay.layers[i]);
            }
        }
    }
})();