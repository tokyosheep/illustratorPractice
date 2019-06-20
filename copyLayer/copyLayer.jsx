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
    $.writeln(app.documents[0].path);

    function ReplacedImages(folder){
        this.folder = folder;
        this.path = app.documents[0].path;
        this.folderPath = this.path + "/"+ this.folder +"/";
    }

    ReplacedImages.prototype.replaced = function(){
        var acSel = activeDocument.selection;
        for(var j=0;j<acSel.length;j++){
        $.writeln(acSel[j].typename);
            if(acSel[j].typename === "PlacedItem"){
                $.writeln(acSel[j].file.name);
                acSel[j].file = File(this.folderPath+acSel[j].file.name);
            }
        }
    }
    var replaced = new ReplacedImages("sub2");
    replaced.replaced();
})();