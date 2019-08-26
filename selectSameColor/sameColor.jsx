(function(){
    /*
    var f = new File($.fileName);
    var jsx = f.parent;
    */
    var actionData = {
        set:"rgb",
        action:"fill",
        path:Folder.desktop + "/",
        str:"",
        setRGB:function(RGB){
            this.R = RGB.R;
            this.G = RGB.G;
            this.B = RGB.B;
        },
        setCMYK:function(CMYK){
            this.C = CMYK.C;
            this.M = CMYK.M;
            this.Y = CMYK.Y;
            this.K = CMYK,K;
        },
        createAction:function(){
            try{
                $.writeln(this.path);
            	var f = File(this.path +this.set+ ".aia");
            	f.open("w");
            	f.write(this.str);
                app.loadAction(f);
            	f.close();
            	//f.remove();
	        	return true;
	        }catch(e){
	        	alert(e);
	        	return false;
	        }
        },
        launchAction:function(){
            app.doScript(this.action,this.set);
            app.unloadAction(this.set, "");
        }
    }
    actionData.setRGB({R:"100.0",G:"30.0",B:"200.0"});//数値はストリングで小数点まで入力
    actionData.str = filloutActionRGB(actionData);
    actionData.createAction();
    

    //app.executeMenuCommand('copy');
    

    
    var docs = getAlldocs();
    for(var n=0;n<docs.length;n++){
        app.activeDocument = docs[n];
        var copyed = paste();
        app.executeMenuCommand("Find Fill & Stroke menu item");
        copyed.layer.remove();
    }
    
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

    function createAction (str,path,name){
	    try{
        	var f = File(path +name+ ".aia");
        	f.open("w");
        	f.write(str);
        	f.close();
        	//app.loadAction(f);
	    	//app.doScript(action,set);
        	f.remove();
	    	//app.unloadAction(set, "");
	    	return true;
	    }catch(e){
	    	alert(e);
	    	return false;
	    }
    }



    function  ascii2Hex (hex) {
        return hex.replace(/./g, function (a) {return a.charCodeAt(0).toString(16)})
    }

    function filloutActionRGB(color){
        $.writeln(color.R);
        $.writeln(color.G);
    var fillOut = [
           "/version 3",
        "/name [ " + color.set.length,//actionの名前と名前の文字列数
		ascii2Hex (color.set),
        "]",
        "/isOpen 1",
        "/actionCount 1",
        "/action-1 {",
        	"/name [" + color.action.length,//actionの名前と名前の文字列数
		ascii2Hex (color.action),
        	"]",
        	"/keyIndex 0",
        	"/colorIndex 0",
        	"/isOpen 1",
        	"/eventCount 1",
        	"/event-1 {",
        		"/useRulersIn1stQuadrant 0",
        		"/internalName (ai_plugin_setColor)",
        		"/localizedName [ 18",
        			"e382abe383a9e383bce38292e8a8ade5ae9a",
        		"]",
        		"/isOpen 1",
        		"/isOn 1",
        		"/hasDialog 0",
        		"/parameterCount 6",
        		"/parameter-1 {",
        			"/key 1768186740",
        			"/showInPalette 4294967295",
        			"/type (ustring)",
        			"/value [ 18",
        				"e382abe383a9e383bc2028e5a197e3828a29",
        			"]",
        		"}",
        		"/parameter-2 {",
        			"/key 1718185068",
        			"/showInPalette 4294967295",
        			"/type (boolean)",
        			"/value 1",
        		"}",
        		"/parameter-3 {",
        			"/key 1954115685",
        			"/showInPalette 4294967295",
        			"/type (enumerated)",
        			"/name [ 13",
        				"52474220e382abe383a9e383bc",
        			"]",
        			"/value 2",
        		"}",
        		"/parameter-4 {",
        			"/key 1919247406",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+color.R,
        		"}",
        		"/parameter-5 {",
        			"/key 1735550318",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+color.G,
        		"}",
        		"/parameter-6 {",
        			"/key 1651275109",
        			"/showInPalette 4294967295",
        			"/type (real)",
        			"/value "+ color.B,
        		"}",
        	"}",
        "}"

        ].join("\n");
        return fillOut;
    }
    /*
    function filloutActionCMYK(color){
                /version 3
        /name [ 11
        	4368616e6765436f6c6f72
        ]
        /isOpen 1
        /actionCount 1
        /action-1 {
        	/name [ 15
        		4368616e6765436f6c6f72434d594b
        	]
        	/keyIndex 0
        	/colorIndex 0
        	/isOpen 1
        	/eventCount 1
        	/event-1 {
        		/useRulersIn1stQuadrant 0
        		/internalName (ai_plugin_setColor)
        		/localizedName [ 18
        			e382abe383a9e383bce38292e8a8ade5ae9a
        		]
        		/isOpen 0
        		/isOn 1
        		/hasDialog 0
        		/parameterCount 7
        		/parameter-1 {
        			/key 1768186740
        			/showInPalette 4294967295
        			/type (ustring)
        			/value [ 18
        				e382abe383a9e383bc2028e5a197e3828a29
        			]
        		}
        		/parameter-2 {
        			/key 1718185068
        			/showInPalette 4294967295
        			/type (boolean)
        			/value 1
        		}
        		/parameter-3 {
        			/key 1954115685
        			/showInPalette 4294967295
        			/type (enumerated)
        			/name [ 14
        				434d594b20e382abe383a9e383bc
        			]
        			/value 4
        		}
        		/parameter-4 {
        			/key 1668899182
        			/showInPalette 4294967295
        			/type (unit real)
        			/value 82.171356678
        			/unit 592474723
        		}
        		/parameter-5 {
        			/key 1835496545
        			/showInPalette 4294967295
        			/type (unit real)
        			/value 34.5372676849
        			/unit 592474723
        		}
        		/parameter-6 {
        			/key 2036690039
        			/showInPalette 4294967295
        			/type (unit real)
        			/value 87.493699789
        			/unit 592474723
        		}
        		/parameter-7 {
        			/key 1651270507
        			/showInPalette 4294967295
        			/type (unit real)
        			/value 0.2655069809
        			/unit 592474723
        		}
        	}
        }
    }
    */
})();