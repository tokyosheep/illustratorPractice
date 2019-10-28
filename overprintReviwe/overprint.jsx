(function(){
    var doc = app.activeDocument;
    $.writeln(doc.XMPString);
    var overPrint =  doc.XMPString.match(/<xmpTPg:\w+>\w+<\/xmpTPg:\w+>/);
    var flag = overPrint[0].match(/(false|true)/i);
    $.writeln(overPrint);
    $.writeln(flag[0]);
    /*
    for(var p in doc){
        try{
            $.writeln(p+"::"+doc[p]);
        }catch(e){

        }
    }
    */
    //<xmpTPg:HasVisibleOverprint>False</xmpTPg:HasVisibleOverprint>

})();