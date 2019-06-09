(function(){
    function getExtensions(images){
        activeDocument.selection = null;
        for(var i=0;i<images.length;i++){
            var ext = images[i].file.name.split(".");
            $.writeln(decodeURI(ext[ext.length-1]));
        }
    }
    getExtensions(activeDocument.placedItems);
    getExtensions(activeDocument.rasterItems);


    function writeData(imgobj){
        for(var i=0;i<imgobj.length;i++){
            var filename = imgobj[i].file.name;
            var fstr = filename.split(".");
            var ext = fstr[fstr.length-1];
            writeExt(imgobj[i]);
            getImgDate(imgobj[i]);
        }
        function writeExt(img){
            var txtObj = activeDocument.textFrames.add();
            txtObj.contents = ext;
            txtObj.paragraphs[0].size = 18;
            txtObj.paragraphs[0].fillColor = setRGBColor(255,0,0);
            txtObj.left = img.geometricBounds[2];//x座標
            txtObj.top = img.geometricBounds[3] + txtObj.geometricBounds[1];//Y座標
            txtObj.paragraphs[0].justification = Justification.RIGHT;
        }

        function getImgDate(img){
            var dateObj = img.file.modified;//修正日
            var Y = dateObj.getFullYear();
            var M = dateObj.getMonth();
            var D = dateObj.getDate();
            var H = dateObj.getHours();
            var Minut = dateObj.getMinutes();
            var txtObj = activeDocument.textFrames.add();
            txtObj.contents = Y+"年"+M+"月"+D+"日"+H+"時"+Minut+"分";
            txtObj.paragraphs[0].size = 18;
            txtObj.paragraphs[0].fillColor = setRGBColor(255,0,0);
            txtObj.left = img.geometricBounds[2];
            txtObj.top = img.geometricBounds[3] + txtObj.geometricBounds[1] + 20;
            txtObj.paragraphs[0].justification = Justification.RIGHT;
        }

        function setRGBColor(r,g,b){
            var RGB = new RGBColor();
            RGB.red = r;
            RGB.green = g;
            RGB.blue = b;
            return RGB;
        }
    }
    writeData(activeDocument.placedItems);
})();