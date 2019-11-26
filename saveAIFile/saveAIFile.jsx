/*=====save AI data script=====*/
(function(){
    var docs = getAlldocs();
    for(var n=0;n<docs.length;n++){
        app.activeDocument = docs[n];
        exportAiFile(activeDocument.fullName);
    }

    function getAlldocs(){
    /*======get document objects ======*/    
        var docs = [];
        for(var i=0;i<app.documents.length;i++){
            docs[i] = app.documents[i];
        }
        return docs;
    }
    function exportAiFile(path){
        var fileObj = new File(path);
        var saveOptions = new IllustratorSaveOptions();
        saveOptions.embedICCProfile = true;//プロファイルを埋め込み
        app.activeDocument.saveAs(fileObj,saveOptions);//保存
        activeDocument.close(SaveOptions.DONOTSAVECHANGES); 
    }
})();