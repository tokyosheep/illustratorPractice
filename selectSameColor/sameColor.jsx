(function(){
    //app.executeMenuCommand('copy');
    var copyed = paste();
    app.executeMenuCommand("Find Fill & Stroke menu item");
    copyed.layer.remove();

    /*
    var docs = getAlldocs();
    for(var n=0;n<docs.length;n++){
        app.activeDocument = docs[n];
        
    }
    */
    function paste(){
        activeDocument.selection = null;
        app.executeMenuCommand('paste');
        var newLayer = app.activeDocument.layers.add();
        app.selection[0].move(newLayer, ElementPlacement.PLACEATBEGINNING);
        return {obj:app.selection[0],layer:newLayer};
    }
    function getAlldocs(){
        var docs = [];
        for(var i=0;i<app.documents.length;i++){
            docs[i] = app.documents[i];
        }
        return docs;
    }

    function createAction (str,path){
	    try{
        	var f = File(path + ".aia");
        	f.open("w");
        	f.write(str);
        	f.close();
        	app.loadAction(f);
	    	app.doScript(action,set);
        	f.remove();
	    	app.unloadAction(set, "");
	    	return true;
	    }catch(e){
	    	alert(e);
	    	return false;
	    }
    }

    function  ascii2Hex (hex) {
        return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})
    }
})();