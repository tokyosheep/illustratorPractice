/*==========collect objects from opened documents to new document=========*/
(function(){
    var pref = app.preferences ;
    var keyName = 'layers/pastePreserve' 
    var originalLayerPreserve = pref.getBooleanPreference(keyName) ;
    $.writeln("originalLayerPreserve　::"+originalLayerPreserve);
    //setting preserve object's position on layer
    if(!originalLayerPreserve){
        pref.setBooleanPreference(keyName,true);
    }
    
    var docs = getAlldocs();
    var copyed = fileCopy();//create new document from initial document
    if(!copyed)return false;
    app.open(copyed);
    app.executeMenuCommand("selectall");//select all objects
    app.executeMenuCommand("clear");//cut
    var mainDoc = app.activeDocument;//intial document path
    
    
    for(var n=0;n<docs.length;n++){
        /*=====copy=====*/
        app.activeDocument = docs[n];
        app.executeMenuCommand("selectall");//commit the menu command
        app.executeMenuCommand("copy");//copy
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);// after copy objects close the document
        /*=====paste====*/
        app.activeDocument = mainDoc;//move the new document
        app.executeMenuCommand('pasteFront'); //paste object
        /*
        if(n===0){
            app.executeMenuCommand('paste'); 
        }else{
            app.executeMenuCommand('pasteFront'); 
        }
        */
    }
    

    

    function getAlldocs(){
    /*======get document objects ======*/    
        var docs = [];
        for(var i=0;i<app.documents.length;i++){
            docs[i] = app.documents[i];
        }
        return docs;
    }

    function fileCopy(){
        /*create new document*/
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