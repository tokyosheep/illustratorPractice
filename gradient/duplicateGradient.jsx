/*
this is exmaple of script how duplicate gradient color

before use this , select the gradient path item
and start the script
it`s going to duplicate gradient color on swatche list
*/

(function(){
    function setCMYK(obj){//return CMYK color object
        var CMYK = new CMYKColor();
            CMYK.cyan = obj.cyan;
            CMYK.magenta = obj.magenta;
            CMYK.yellow = obj.yellow;
            CMYK.black = obj.black;
            return CMYK;
    }

    function setRGB(obj){//return RGB color object
        var RGB = new RGBColor();
            RGB.red = obj.red;
            RGB.green = obj.green;
            RGB.blue = obj.blue;
            return RGB;
    }

    function setGray(obj){//return gray color object
        var Gray = new GrayColor();
        Gray.gray = obj.gray;
        return Gray;
    }

    function sortValue(isRGB,value){//adjust the value between max value and min value
        var max = isRGB ? 255 : 100;
        var sorted = value > max ? max : value;
        sorted = sorted < 0 ? 0 : sorted;
        return sorted;
    }
    // Create a color for both ends of the gradient

    var DuplicatedGradient = function(item,adjustType,addValue){/* item[keyType].gradient */
        this.newGradient = app.activeDocument.gradients.add();
        app.activeDocument.selection[0].fillColor.gradient.angle = 90;
        this.newGradient.type = item.type;
        this.item = item;
        this.adjustType = adjustType;/* add duplicate */
        this.addValue = addValue;/*{}color|undefined*/
        this.readColors();
    }

    /*
        incase of SpotColor ,
        it normalizes SpotColor
        and adjust values
    */
    DuplicatedGradient.prototype.createColor = function(type,colorObj){
        if(type==="SpotColor")return this.createColor(colorObj.spot.color.typename,colorObj.spot.color);
        var color = this.modifyValue(colorObj,type==="RGBColor");
        switch(type){
            case "CMYKColor":
                return setCMYK(color);

            case "RGBColor":
                return setRGB(color);

            case "GrayColor":
                return setGray(color);

            default:
                return setGray({gray:0});//if there's no any color type , it returns gray color
        }
    }

    DuplicatedGradient.prototype.modifyValue = function(color,isRGB){//adjust value adding value you fuilled
        if(this.adjustType==="duplicate")return color;
        var obj = {};
        for(var p in color){
            if(p === "typename")continue;
            obj[p] = sortValue(isRGB,parseFloat(color[p]) + this.addValue);
        }
        return obj;
    }

    DuplicatedGradient.prototype.setGradientColor = function(gradient,i){
        if(i !== 0 && i !== 1)this.newGradient.gradientStops.add();
        this.newGradient.gradientStops[i].color.opacity = gradient.opacity;
        this.newGradient.gradientStops[i].color.midPoint = gradient.midPoint;
        this.newGradient.gradientStops[i].color.rampPoint = gradient.rampPoint;
    }

    DuplicatedGradient.prototype.readColors = function(){
        for(var i=0;i<this.item.gradientStops.length;i++){
            this.setGradientColor(this.item.gradientStops[i], i);
            this.newGradient.gradientStops[i].color = this.createColor(this.item.gradientStops[i].color.typename,this.item.gradientStops[i].color);
        }
    }
    var grad = new DuplicatedGradient(app.activeDocument.selection[0].fillColor.gradient,"adjust"/*incase of duplicate just coping*/,-20/*here is the value how you adjust colors on gradient before duplicate*/);
})();

/*
type of gradient object
var gradient = {
    name:string,
    type:"GradientType.LINEAR"...,
    gradientStops:{
        rampPoint:number,
        midPoint:number,
        color:CMYK|RGB
    }
}
*/