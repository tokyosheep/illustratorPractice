(function(){
    layerUnlock(activeDocument.layers);
    var p = activeDocument.pageItems;
    for(var i=0;i < p.length;i++){
        try{
            //p[i].selected = true;
        }catch(e){
            p[i].locked = false;
            //p[i].selected = true;
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