/* this script just save as a PDF */
(function(){
    PDF(app.activeDocument.fullName);
    function PDF(path){
        var savePath = new File(path);
        var option = new PDFSaveOptions();//create save option object
        option.compatibility = PDFCompatibility.ACROBAT7;//set PDF level
        activeDocument.saveAs(savePath,option);//save
    }
})();