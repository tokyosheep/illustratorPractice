/* read color data from selected item */

(function(){
    var colorType = app.activeDocument.documentColorSpace;
    var selection = app.activeDocument.selection;
    for(var i=0;i<selection.length;i++){
        if(selection[i].fillColor.typename === "SpotColor"){
            $.writeln("spot color");
            findColorProp(selection[i].fillColor.spot.color);
        }else{
            findColorProp(selection[i].fillColor);
        }   
        $.writeln("/===================/");
    }
    function findColorProp(item){
        for(var key in item){
            $.writeln(key +" ::"+item[key]);
        }
    }
})();