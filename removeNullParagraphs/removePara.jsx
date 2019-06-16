(function(){
    var selObj = activeDocument.selection;
    for(var i=0;i<selObj.length;i++){
        for(var j = selObj[i].paragraphs.length-1;j>=0;j--){
            try{
                var text = selObj[i].paragraphs[j].contents;
                if(text == ""){
                    selObj[i].paragraphs[j].remove();//段落を削除
                }
            }catch(e){/*最終行に改行コードがない場合にエラーなので無視する*/}
        }
    }
})();