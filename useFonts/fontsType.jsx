(function(){
    var fontList = [];
    var tfObj = activeDocument.textFrames;
    for(var i=0;i<tfObj.length;i++){
        var trObj = tfObj[i].story.textRange;
        for(var j=0;j<trObj.contents.length;j++){
            var fontName = trObj.characters[j].textFont.name;
            $.writeln(fontName);
            if(!fontList[fontName]){
                fontList[fontName] = 1;
            }else{
                fontList[fontName] = fontList[fontName] + 1;
            }
        }
    }

    var docObj = documents.add(DocumentColorSpace.RGB, 595.28,841.89,1);
    var txtObj = docObj.textFrames.add();
    txtObj.top = 820;
    txtObj.left = 10;
    var result = "";
    for(var i in fontList){
        result = result + i + " : " + fontList[i] + "\r";
    }
    txtObj.contents = result;
})();