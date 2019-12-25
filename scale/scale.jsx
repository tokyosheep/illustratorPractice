/* this script resize selected item through the action */
(function(){
    var Resize = {
        scale:40,//resize ratio
        set:"wakwakwakwak",//action set 
        name:"sasdfdffadfdf152",// action name
        path:Folder.desktop + "/",//action path
        createAction:function(){
            try{
            	var f = File(this.path +this.set+ ".aia");
            	f.open("w");
            	f.write(this.str);
                app.loadAction(f);
            	f.close();
            	f.remove();
	        	return true;
	        }catch(e){
	        	alert(e);
	        	return false;
	        }
        },
        launchAction:function(){
            app.doScript(this.name,this.set);
            app.unloadAction(this.set, "");
        },
        setScaleStr:function(){
			/* write scale action string*/
            var scaleAction = [
                    "/version 3",
            "/name ["+this.set.length,
            	ascii2Hex (this.set),
            "]",
            "/isOpen 1",
            "/actionCount 1",
            "/action-1 {",
            	"/name ["+this.name.length,
            		ascii2Hex (this.name),
            	"]",
            	"/keyIndex 0",
            	"/colorIndex 0",
            	"/isOpen 1",
            	"/eventCount 1",
            	"/event-1 {",
            		"/useRulersIn1stQuadrant 0",
            		"/internalName (adobe_scale)",
            		"/localizedName [ 15",
            			"e68ba1e5a4a7e383bbe7b8aee5b08f",
            		"]",
            		"/isOpen 0",
            		"/isOn 1",
            		"/hasDialog 1",
            		"/showDialog 0",
            		"/parameterCount 4",
            		"/parameter-1 {",
            			"/key 1970169453",
            			"/showInPalette 4294967295",
            			"/type (boolean)",
            			"/value 1",
            		"}",
            		"/parameter-2 {",
            			"/key 1818848869",
            			"/showInPalette 4294967295",
            			"/type (boolean)",
            			"/value 0",
            		"}",
            		"/parameter-3 {",
            			"/key 1935895653",
            			"/showInPalette 4294967295",
            			"/type (unit real)",
            			"/value " + this.scale+".0",//you must add decimal point
            			"/unit 592474723",
            		"}",
            		"/parameter-4 {",
            			"/key 1668247673",
            			"/showInPalette 4294967295",
            			"/type (boolean)",
            			"/value 0",
            		"}",
            	"}",
            "}"

            ].join("\n");
            this.str = scaleAction;
        }
    }

	function  ascii2Hex (hex) {
    	return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})
	}
    
    Resize.setScaleStr();
    if(!Resize.createAction())return;
    Resize.launchAction();
})();