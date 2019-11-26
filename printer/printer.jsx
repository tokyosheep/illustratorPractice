/* this script just investigates printer proprty */

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

    
    getPrinters();
    getPrisets();
    getPrintOptions();
    
})();