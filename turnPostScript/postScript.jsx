(function(){
    printPostScript();
    function printPostScript(){
        /*
        app.executeMenuCommand("selectall");//オブジェクトをアートボードに合わせる命令
        var flag = activeDocument.fitArtboardToSelectedArt(0);
        
        if(!flag){
            alert("there's no any artboard");
            return false;
        }
        */
        app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;//アラート回避宣言
        
        var desktopFolder = Folder.desktop +"/inputPrint";
        makefolder(desktopFolder);
        var docPath, docs, psPath;
        var jobOpts = new PrintJobOptions();
        var opts = new PrintOptions();
        
        opts.printPreset = "DP"//プリセットでオプションを全て決める
        opts.printArea = PrintingBounds.ARTBOARDBOUNDS;
        opts.jobOptions = jobOpts;
        //opts.printerName = "Adobe PostScript ファイル";
        //opts.PPDName = "HP DJ Z6200 60-2 Onyx PosterShop 10.1";
        

        /*ペーパーオプション（実際無効）
        var paperOpts = new PrintPaperOptions;
        opts.paperOptions = paperOpts;
        var boardWidth =app.activeDocument.artboards[0].artboardRect[2];
        var boardHeight = Math.abs( app.activeDocument.artboards[0].artboardRect[3] );
        $.writeln(opts.name);
        $.writeln(printerList[0].printerInfo.paperSizes.length);
        paperOpts.name = "カスタム";
        $.writeln(boardWidth);
        $.writeln(boardHeight);
        paperOpts.width = parseFloat(boardWidth)*2 + 0.0;
        paperOpts.height = parseFloat(boardHeight)*2 + 0.0;
        
        
        */
        /*カラーマネジメントオプション
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
                alert(e);
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