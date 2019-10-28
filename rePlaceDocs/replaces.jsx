(function(){
    var replaceImg = "/Users/ink_004/Desktop/636364-2_オディー_エクセルコクリスマスディスプレイ_本番_INK/出力/patternA/EX_visual_加工決定_統合_patternA.eps";
    
    
    

    var docs = getAlldocs();
    for(var j=0;j<docs.length;j++){
        app.activeDocument = docs[j];
        var places = activeDocument.placedItems;
        var f = new File(replaceImg);
        places[0].file = f;
    }

    function getAlldocs(){
        var docs = [];
        for(var i=0;i<app.documents.length;i++){
            docs[i] = app.documents[i];
        }
        return docs;
    }
})();