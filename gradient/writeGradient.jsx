/*
This is exmaple how to get gradient data from selected item on Illustrator
get gradient property and then write it down on Illustraotr document
extrelmly dificult to understand object model on Illustrator
even you can't get some certain object or property through the for in method
I hope It'll help someone's study

*** before use it please select gradient item on Illustrator ***

*/

(function(){
    var object = setGradient();
    if(!object)return;
    writeGradient(object);

    function setGradient(){
        try{
            var item = app.activeDocument.selection[0];
        }catch(e){
            alert(e);
            return false;
        }
        var obj = {};//input properties in the empty obj
        //dispute script if the selected item hasn't gradient property
        if(item.fillColor.gradient === undefined)return;
        /*
            fill properties in the obj
        */
        obj.type = item.fillColor.gradient.type;
        obj.length = item.fillColor.length;
        obj.angle = item.fillColor.angle;
        obj.origin = item.fillColor.origin;
        obj.colors = {
                        type:"color",
                        queque:[]//array of color objects
                    };
        for(var i=0;i<item.fillColor.gradient.gradientStops.length;i++){
            //gradientStops array contains part of gradient colors 
            var colorObj = {};
            obj.colors.queque.push(item.fillColor.gradient.gradientStops[i].color);
            //pushing color object
            try{
                obj.colors.queque[obj.colors.queque.length-1].midPoint = item.fillColor.gradient.gradientStops[i].midPoint;
                obj.colors.queque[obj.colors.queque.length-1].rampPoint = item.fillColor.gradient.gradientStops[i].rampPoint;
                //position in gradient range
            }catch(e){
                return false;
            }
        }
        return obj;
        
    }

    function writeGradient(obj){
        /* write gradient data on Illustrator */
        var toString = Object.prototype.toString
        //create text object
        var textObj = activeDocument.textFrames.add();
        for(var prop in obj){
            if(toString.call(obj[prop].queque) === "[object Array]"&&obj[prop].type === "color"){
                for(var n=0;n<obj[prop].queque.length;n++){
                    /* turn object into text */
                    textObj.contents += setColor(obj[prop].queque[n])+"\n";
                }
            }else{
                textObj.contents += prop +"  :"+obj[prop]+"\n";
            }
        }

        for(var i=0;i<textObj.characters.length;i++){
            textObj.characters[i].size = 15;//set text size
        }
    }

    function getColor(color){
            var cObj = {};
            for(var key in color){
                cObj[key] = color[key];
            }
            return cObj;
        }
    function setColor(color){
        var colorText = " \n";
        for(var p in color){
            colorText += p +" ::" + color[p] + "\n";
        }
        return colorText;
    }

    function setCMYKColor(color){
        var CMYK = new CMYKColor();
            CMYK.cyan = color.cyan;
            CMYK.magenta = color.magenta;
            CMYK.yellow = color.yellow;
            CMYK.black = color.black;
            return CMYK;
    }
})();