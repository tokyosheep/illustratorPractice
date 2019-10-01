(function(){
    function PDF(path){
        var savePath = new File(path);
        var option = new PDFSaveOptions();
        option.compatibility = PDFCompatibility.ACROBAT4;
        activeDocument.saveAs(savePath,option);
    }
})();