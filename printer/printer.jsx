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
        }
        $.writeln("===================");
    }

    function getPrisets(){
        $.writeln("presets");
        var pNameList = app.printPresetsList;
        for(var i=0;i<pNameList.length;i++){
            $.writeln(pNameList[i]);
        }
        $.writeln("===================");   
    }

    function PrintOut(){
        var printSetOut = new PrintOptions();
        printSetOut.printerName = "Adobe PostScript ファイル";
        var colorOpt = new PrintColorManagementOptions();
        colorOpt.colorProfileMode = PrintColorProfile.SOURCEPROFILE;
        colorOpt.name = "ColorMatch RGB";
        colorOpt.intent = PrintColorIntent.RELATIVECOLORIMETRIC;
        printSetOut.colorManagementOptions = colorOpt;
        activeDocument.print(printSetOut);
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
    
    getPrinters();
    getPrisets();
    var printObj = new PrintOptions();
    for( var key in printObj){
        try{
            $.writeln(key);
        }catch(e){

        }
    }
    PrintOut();
    
})();