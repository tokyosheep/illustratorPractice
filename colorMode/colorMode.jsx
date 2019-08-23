(function(){
    var colorMode= activeDocument.documentColorSpace;
    alert(colorMode);
     	//app.executeMenuCommand("doc-color-cmyk");
         app.executeMenuCommand("doc-color-rgb");
})();