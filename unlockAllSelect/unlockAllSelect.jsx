/* this script unlock all of layers and page items */
(function(){
    layerUnlock(activeDocument.layers);
    var p = activeDocument.pageItems;
    for(var i=0;i < p.length;i++){
        app.activeDocument.selection = null;
        try{
            p[i].selected = true;
        }catch(e){
            p[i].locked = false;
        }
    }
    function layerUnlock(lay){
        for(var i=0;i<lay.length;i++){
            lay[i].locked = false;
            $.writeln(lay[i].layers.length);
            if(lay[i].layers.length > 0){
                layerUnlock(lay[i].layers);
            }
        }
    }
})();