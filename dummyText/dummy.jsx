(function(){
    var dummyText = "It's dummy";
    var selObj = activeDocument.selection;
    for(var i=0;i<selObj.length;i++){
        while(!(checkOverflow(selObj[i]))){
            selObj[i].contents = selObj[i].contents + dummyText;
        }
    }

    function checkOverflow(textObj){
        var p = 0;
        var n = 0;
        for(var j=0;j<textObj.paragraphs.length;j++){
            var p = p + textObj.paragraphs[j].characters.length;
        }
        for(var j=0;j<textObj.lines.length;j++){
            var n = n + textObj.lines[j].characters.length;
        }
        if(p != n){
            return true;
        }
        return false;
    }
})();