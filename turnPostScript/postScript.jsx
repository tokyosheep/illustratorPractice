(function(){
    printPostScript();
    function printPostScript(){
        app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;//アラート回避宣言
        
        var desktopFolder = Folder.desktop +"/inputPrint";
        makefolder(desktopFolder);
        var docPath, docs, psPath;
        var jobOpts = new PrintJobOptions();
        var opts = new PrintOptions();
        //opts.printerName = "Adobe PostScript ファイル";
        opts.printPreset = "PostScript";
        opts.jobOptions = jobOpts;
        /*
            var colorOpt = new PrintColorManagementOptions();
            colorOpt.colorProfileMode = PrintColorProfile.SOURCEPROFILE;
            colorOpt.name = "ColorMatch RGB";
            colorOpt.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
            opts.colorManagementOptions = colorOpt;
        */
        if(app.documents.length > 0){
            docs = app.documents;
        }else{
            alert("empty!");
        }
        for(var i=docs.length-1;i >= 0;i--){
            app.activeDocument = docs[i];
            
            var psName = activeDocument.name.replace(/.ai$/, '.ps' );
            var name = checkName(psName);
            /*
                docPath = decodeURI(app.activeDocument.fullName);
                psPath = docPath.replace(/.ai$/, '.ps' );
            */    
            jobOpts.file = new File(desktopFolder+"/"+getTIme()+name);
            try{
                app.activeDocument.print(opts);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }catch(e){
                alert("timeOut");
                return;
            }
        }
        app.userInteractionLevel = UserInteractionLevel.DISPLAYALERTS;  
    }/*=============end postScript===================*/
    function makefolder(){
        for(var no =0; no<arguments.length; no++){//引数に渡された数だけフォルダを作る
            var folderObj = new Folder(arguments[no]);
            folderObj.create();
        }
    }
    function checkName(str){
        var newName = "";
        for(var i = 0;i<str.length;i++){
            newName += isJapanese(str[i]);
        }
        return newName;
    }

    function isJapanese(str){
        if(str.charCodeAt(0) >= 256){
            return "";
        }
        return str;
    }
    function getTIme(){
        var dt = new Date();
        /*
        var year = dt.getFullYear();
        var month = dt.getMonth();
        */
        var date = dt.getDate();
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        return date+"D"+hours+"H"+minutes+"M";
    }
})();