(function(){
    var obj = app.selection[0];
    $.writeln(app.selection.length);
    var x1 = obj.geometricBounds[0];
    var y1 = obj.geometricBounds[1];
    var x2 = obj.geometricBounds[2];
    var y2 = obj.geometricBounds[3];
    $.writeln("(x1:" + x1 + ", y1:" + y1 + ")");
    $.writeln("(x2:" + x2 + ", y2:" + y2 + ")");
})();