(function(){
    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;//アラート回避宣言
    var boardWidth =app.activeDocument.artboards[0].artboardRect[2];
    var boardHeight = Math.abs( app.activeDocument.artboards[0].artboardRect[3] );

    var desktopFolder = Folder.desktop +"/inputPrint";
    makefolder(desktopFolder);
    var docPath, docs, psPath;
    var jobOpts = new PrintJobOptions();
    var opts = new PrintOptions();

    opts.printerName = "Adobe PostScript ファイル";
    opts.PPDName = "HP DJ Z6200 60-2 Onyx PosterShop 10.1";
    opts.printArea = PrintingBounds.ARTBOARDBOUNDS;
    opts.jobOptions = jobOpts;
    /*
    var paperOpts = new PrintPaperOptions;
    paperOpts.name = "AI11 Custom Paper";
    
    
    paperOpts.width = parseFloat(boardWidth)*2 + 0.1;
    paperOpts.height = parseFloat(boardHeight)*2 + 0.1;
    
    opts.paperOptions = paperOpts;
    */

    var psName = activeDocument.name.replace(/.ai$/, '.ps' );
    var name = checkName(psName);
    jobOpts.file = new File(desktopFolder+"/"+getTIme()+name);
    try{
        app.activeDocument.print(opts);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }catch(e){
        alert(e);
        return;
    }

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