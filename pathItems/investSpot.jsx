(function(){
    var spots = app.activeDocument.spots;
    $.writeln(spots);
    for(var i=0;i<spots.length;i++){
        $.writeln(spots[i].name);
        readProperty(spots[i].color);
    }

    function readProperty(obj){
        for(var p in obj){
            $.writeln(p+" :"+obj[p]);
        }
    }

})();