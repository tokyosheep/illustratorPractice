(function(){
    function exportAiFile(dest){
        var fileObj = new File(dest);
        var saveOptions = new IllustratorSaveOptions();
        saveOptions.embedICCProfile = true;

        app.activeDocument.saveAs(fileObj,saveOptions);
    }

    exportAiFile(activeDocument.fullName);
})();