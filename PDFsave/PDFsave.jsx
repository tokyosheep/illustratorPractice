(function(){
    $.writeln(app.documents.length);
    while(app.documents.length>0){
        if(!saveAIdata(activeDocument.fullName)){
            return;
        }
        saveDocuments();
    }

    function saveAIdata(path){
        var savePath = new File(path);
        try{
            activeDocument.saveAs(path);
            return true;
        }catch(e){
            alert("the file hasn't saved yet");
            return false;
        }
    }

    function saveDocuments(){
        var path = activeDocument.path;
        var name = activeDocument.name;
        $.writeln(name);
        var DateObj = new Date();
        var h = DateObj.getHours();
        var m = DateObj.getMinutes();
        PDF(path +"/export_"+h+"_"+m+"_"+name);
        activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
    function PDF(path){
        var savePath = new File(path);
        var option = new PDFSaveOptions();
        option.compatibility = PDFCompatibility.ACROBAT7;
        activeDocument.saveAs(savePath,option);
    }

    
})();