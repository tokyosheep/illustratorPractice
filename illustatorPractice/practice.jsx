(function(){
    //documents.add(DocumentColorSpace.CMYK); 
    for( p in app.documents){
        $.writeln(p);
        $.writeln(app.documents[p]);
    }
    $.writeln(app.documents[0].fullName);//フルパス
    $.writeln(app.documents[0].name);//名前

    var fileObj = new File(app.documents[0].fullName);
    $.writeln(fileObj.path);//ファイルパス
    $.writeln(app.activeDocument.layers[0].name);
    app.activeDocument.activeLayer = app.activeDocument.layers[2];//アクティヴレイヤー変更
    for(var prop in app.activeDocument.activeLayer){
        $.writeln("layer key..."+prop);
        $.writeln("layer property..."+app.activeDocument.activeLayer[prop]);
    }

    $.writeln(activeDocument.activeLayer.layers);
    $.writeln(activeDocument.activeLayer.layers.length);

    $.writeln(activeDocument.placedItems);
    var items = activeDocument.placedItems;
    for(var key in items){
        $.writeln("items key..."+key);
        $.writeln("items prop..."+items[key]);
    }
    for(var i=0;i<items.length;i++){
        $.writeln(decodeURI(items[i].file.name));
    }
    for(var k in items[0]){
        $.writeln(k);
    }
    //allLayervisibles(true);
    function allLayervisibles(flag){
        var layers = app.activeDocument.layers;
        for(var i=0;i<layers.length;i++){
            layers[i].visible = flag;
        }
    }
    
})();