(function(){
    var index = 0;
    function makeLayer(index){
        var R = [255,128,0];
        var G = [128,0,255];
        var B = [0,255,128];
        var lay = activeDocument.layers.add();
        var color = new RGBColor();
        color.red = R[index];
        color.green = G[index];
        color.blue = B[index];
        lay.color = color;
        index++;
    }

    function unGroup(doc){
        app.executeMenuCommand("ungroup");
        var selObj = activeDocument.selection;
        for(var i=0;i<selObj.length;i++){
            $.writeln(selObj[i].typename === "GroupItem");
            if(selObj[i].typename === "GroupItem"){
                unGroup();
            }
        }
    }

    app.executeMenuCommand('copy');
    makeLayer(index);
    app.executeMenuCommand('paste');
    unGroup();
    /*app.executeMenuCommand("ungroup");
    for(var i =0;i<activeDocument.selection.length;i++){
        $.writeln(activeDocument.selection[i].typename);
    }*/
})();