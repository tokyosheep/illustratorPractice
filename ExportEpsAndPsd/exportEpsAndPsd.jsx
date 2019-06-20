(function(){
    function ExportFolder(folder){
        this.folder = folder;
    }
    
    ExportFolder.prototype.transfer = function(){
        var documentImg = arrayOfImages();

        for(var i=0;i<documentImg.length;i++){
            activeDocument = documentImg[i];
            var name = activeDocument.name;
            var splitComma = activeDocument.name.split("_");
            var ext = splitComma[0].toLowerCase();
            var mainFolder = activeDocument.path.parent;
            var subFolderPath = mainFolder+"/"+this.folder+"/"+name;
            makefolder(mainFolder+"/"+this.folder);
            $.writeln(subFolderPath);
            if(ext === "psd"){
                savePsd(subFolderPath);
                activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
            if(ext === "eps"){
                saveEps(subFolderPath);
                activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
            
        }
        
        function arrayOfImages(){
            var array = [];
            for(var i=0;i<documents.length;i++){
                array[i] = documents[i];
            }
            return array;
        }
    }

    function makefolder(){
        for(var no =0; no<arguments.length; no++){//引数に渡された数だけフォルダを作る
            var folderObj = new Folder(arguments[no]);
            folderObj.create();
        }
    }

    function saveEps(path){
        fileObj = new File(path);
        epsOpt = new EPSSaveOptions();
        epsOpt.embedColorProfile = true;
        epsOpt.encoding = SaveEncoding.JPEGMAXIMUM;
        epsOpt.halftoneScreen = false;
        epsOpt.interpolation = false;
        epsOpt.preview = Preview.MACOSJPEG;
        epsOpt.psColorManagement = false;
        epsOpt.transferFunction = false;
        epsOpt.transparentWhites = false;
        epsOpt.vectorData = false;
        activeDocument.saveAs(fileObj, epsOpt, true, Extension.LOWERCASE);
    }

    function savePsd(path){
        fileObj = new File(path);
        psdOpt = new PhotoshopSaveOptions();
        psdOpt.alphaChannels = true;
        psdOpt.annotations = true;
        psdOpt.embedColorProfile = false;
        psdOpt.layers = true;
        psdOpt.spotColors = false;
        activeDocument.saveAs(fileObj, psdOpt, true, Extension.LOWERCASE);
    }

    var exFolder = new ExportFolder("fuji");
    exFolder.transfer();

})();