/* this script make visible all of layers */
(function(){
    visibleLayers(activeDocument.layers);
    function visibleLayers(lay){
        for(var i=0;i<lay.length;i++){
            lay[i].visible = true;//make visible layer
            
            if(lay[i].layers.length > 0){//if layer has sub layer it calls function itself
                visibleLayers(lay[i].layers);
            }
            
        }
    }
})();