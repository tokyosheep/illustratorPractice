/* this script unites selected items group */
(function(){
    var group =  activeDocument.groupItems.add();
    for(var i =0;i<app.selection.length;i++){
        app.selection[i].move(group,ElementPlacement.PLACEATEND);//be the group;
    }
    
    var x1 = group.geometricBounds[0];
    var y1 = group.geometricBounds[1];
    var x2 = group.geometricBounds[2];
    var y2 = group.geometricBounds[3];
    $.writeln("(x1:" + x1 + ", y1:" + y1 + ")");
    $.writeln("(x2:" + x2 + ", y2:" + y2 + ")");
    //check position of group item
})();