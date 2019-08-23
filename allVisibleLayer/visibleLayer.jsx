(function(){
    visibleLayers(activeDocument.layers);
    function visibleLayers(lay){
        for(var i=0;i<lay.length;i++){
            lay[i].visible = true;
            
            if(lay[i].layers.length > 0){
                visibleLayers(lay[i].layers);
            }
            
        }
    }
})();