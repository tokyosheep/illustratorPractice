(function(){
    if(app.documents.length<1){
        alert("you don't open any document");
        return false;
    }
    $.writeln(activeDocument.documentColorSpace.toString());
    var colorSpace = activeDocument.documentColorSpace.toString();
    var objects = [];
    var swatches = activeDocument.swatches;
    for(var i=2;i<swatches.length;i++){
        objects.push(copyObject(swatches[i]));
    }
    //return JSON.stringify(objects);

    function copyObject(original){
        var replace = {};

        replace.name = original.name;
        //replace.color = original.color;
        if(original.color.typename != "CMYKColor" && original.color.typename != "RGBColor"){
            return false;
        }
        for(var p in original.color){
            replace[p] = original.color[p];
            $.writeln(p+"::"+replace[p]);
        }
        return replace
    }

    function debug(){
        $.writeln(activeDocument.swatches);
        for(var i=0;i<activeDocument.swatches.length;i++){
            $.writeln(activeDocument.swatches[i]);
            var swatch = activeDocument.swatches[i]
            for(var key in swatch){
                $.writeln(key+":"+swatch[key]);
            }
        }
    }

    function lookProperty(obj){
        for(var p in obj){
            $.writeln(p+":"+obj[p]);
            if(typeof obj[p] == "object"){
                lookProperty(obj[p]);
            }
        }
    }
})();