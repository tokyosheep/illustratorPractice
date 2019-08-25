(function(){
    var toString = Object.prototype.toString
    function callClass(obj){
        return toString.call(obj);
    }


    function getPrinters(){
        $.writeln("printer");
        var printers = app.printerList;
        for(var i=0;i<printers.length;i++){
            $.writeln(printers[i]);
            $.writeln(printers[i].name);
            getPrinterInfo(printers[i].printerInfo);
        }
        $.writeln("===================");
        
        var pl = app.printerList[0];
        var papers = pl.printerInfo.paperSizes;
        for(var j=0;j<papers.length;j++){
            $.writeln(papers[j]);            
        }
        $.writeln("===================");
        var paper = app.printerList[1].printerInfo.paperSizes[0];
        for(var prop in paper ){
            $.writeln(prop+"::"+paper[prop]);
            $.writeln(prop+"::"+typeof paper[prop]);
            var info = paper.paperInfo;
            for(var ke in info){
                $.writeln(ke +"::"+info[ke]);
            }
        }
        function getPrinterInfo(printer){
            for(var p in printer){
                $.writeln(p +":" + printer[p]);
            }
            $.writeln("=========================");
        }
    }

    function getPrisets(){
        $.writeln("presets");
        var pNameList = app.printPresetsList;
        for(var i=0;i<pNameList.length;i++){
            $.writeln(pNameList[i]);
            
        }
        $.writeln("===================");   
    }

    function getPrintOptions(){
        var printOpts = new PrintOptions();
        for(var p in printOpts){
            $.writeln(p +":"+printOpts[p]);
        }
    }

    function PrintOut(){
        var printSetOut = new PrintOptions();
        printSetOut.printerName = "Adobe PostScript ファイル";
        var colorOpt = new PrintColorManagementOptions();
        colorOpt.colorProfileMode = PrintColorProfile.SOURCEPROFILE;
        colorOpt.name = "ColorMatch RGB";
        colorOpt.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
        printSetOut.colorManagementOptions = colorOpt;
        //activeDocument.print(printSetOut);
    }
    /*
    function getMoreProperty(obj){
        $.writeln("======property======");
        for(var prop in obj){
            try{
                $.writeln(prop);
                if(callClass(obj[prop]) === "[object Object]"||callClass(obj[prop])==="[object Array]"){
                    getMoreProperty(obj[prop]);
                }
            }catch(e){
                
            }
        }
    }
    */
    function getPPD(printObj){
        var ppd = printObj.PPDName;
         $.writeln(ppd);
        /*
        for (var p in ppd){
            $.writeln(ppd[p]);
        }
        */
    }
    
    getPrinters();
    getPrisets();
    getPrintOptions();
    var printObj = new PrintOptions();
    printObj.printPreset = "DP";
    for( var key in printObj){
        try{
            $.writeln(key+":"+printObj[key]);
        }catch(e){

        }
    }
    getPPD(printObj);
    PrintOut();
    
})();