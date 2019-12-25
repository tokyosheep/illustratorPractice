/*=====the script for create new layer======*/
(function(){
    var Layindex = 0;//adjust layer's position
    function makeLayer(Layindex){
        var R = [255,128,0];//seting layer color
        var G = [128,0,255];
        var B = [0,255,128];
        var lay = activeDocument.layers.add();
        var color = new RGBColor();
        color.red = R[Layindex];
        color.green = G[iLayindex];
        color.blue = B[Layindex];
        lay.color = color;
    }

    makeLayer(Layindex);
})();