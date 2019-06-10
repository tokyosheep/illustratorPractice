(function(){
    
    $.writeln(app.activeDocument.fullName);
    /*
    charCodecheck(app.activeDocument.name);
    function charCodecheck(text){
        for(var i=0;i<text.length;i++){
            $.writeln(text[i]);
            $.writeln(text.charCodeAt(i));
            //charCodeAt 特定の場所の文字エンコーディングを返す
        }
    }
    */
   
   var DocData = {
        fullPath:app.activeDocument.fullName,
        path:app.activeDocument.path,
        name:app.activeDocument.name
   }
   var originalFolder = DocData.path + "/original"
   var originalData = new File(originalFolder +"/"+DocData.name);
   makefolder(originalFolder);
   activeDocument.saveAs(originalData);
   remakeAi(DocData.name);
    function remakeAi(text){
        var newName = "";
        for(var i=0;i<text.length;i++){
            newName += isJapanese(text[i]);
        }
        $.writeln(newName);
        var fileName = DocData.path+"/"+newName;
        $.writeln(decodeURI(fileName));
        var flag = DocData.fullPath.rename(newName);
        $.writeln(flag);
        if(!flag){
            alert("ファイル名変更できませんでした。");
        }else{
            activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

    function isJapanese(str){
        if(str.charCodeAt(0) >= 256){
            return "";
        }
        return str;
    }
    
    function makefolder(){
        for(var no =0; no<arguments.length; no++){//引数に渡された数だけフォルダを作る
            var folderObj = new Folder(arguments[no]);
            folderObj.create();
        }
    }
})();