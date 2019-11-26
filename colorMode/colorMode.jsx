/* check color Profile */
(function(){
    var colorMode= activeDocument.documentColorSpace;
    alert(colorMode);
     	//app.executeMenuCommand("doc-color-cmyk");
         app.executeMenuCommand("doc-color-rgb");//turn color profile into rgb
})();