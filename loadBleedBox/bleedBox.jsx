(function(){
    /*
    var bleedBottom = app.activeDocument.documentPreferences.documentBleedBottomOffset;
    var bleedTop = app.activeDocument.documentPreferences.documentBleedTopOffset;
    var bleedInside = app.activeDocument.documentPreferences.documentBleedInsideOrLeftOffset;
    var bleedOutside = app.activeDocument.documentPreferences.documentBleedOutsideOrRightOffset;
    */
    for( var p in app.activeDocument){
        try{
            $.writeln(p+"::"+app.activeDocument[p]);
        }catch(e){
            
        }
    }
})();