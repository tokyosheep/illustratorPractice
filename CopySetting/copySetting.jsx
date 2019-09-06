(function(){
    var pref = app.preferences ;
    var keyName = 'layers/pastePreserve' ;
    var originalLayerPreserve = pref.getBooleanPreference(keyName) ;
    $.writeln(originalLayerPreserve);
    if(!originalLayerPreserve){
        pref.setBooleanPreference(keyName,true);
    }
    
    var docs = getAlldocs();
    var copyed = fileCopy();
    if(!copyed)return false;
    app.open(copyed);
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("clear");
    var mainDoc = app.activeDocument;
    
    
    for(var n=0;n<docs.length;n++){
        /*=====コピーして=======*/
        app.activeDocument = docs[n];
        app.executeMenuCommand("selectall");//メニューコマンド実行
        app.executeMenuCommand("copy");
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        /*=====ペイスト========*/
        app.activeDocument = mainDoc;
        app.executeMenuCommand('pasteFront'); 
        /*
        if(n===0){
            app.executeMenuCommand('paste'); 
        }else{
            app.executeMenuCommand('pasteFront'); 
        }
        */
    }
    

    

    function getAlldocs(){
        var docs = [];
        for(var i=0;i<app.documents.length;i++){
            docs[i] = app.documents[i];
        }
        return docs;
    }

    function fileCopy(){
        try{
            var original = new File(activeDocument.fullName);
            var copyed = new File(activeDocument.path+"/"+"mainFile.ai");
            original.copy(copyed);
            return copyed;
        }catch(e){
            alert(e);
            return false;
        }
    }
})();