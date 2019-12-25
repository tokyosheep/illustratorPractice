/* investigate images on Illustrator */ 
(function(){
    var images = activeDocument.placedItems;
    for(var i=0;i<images.length;i++){
        try{
            images[i].selected = true;
        }catch(e){
            $.writeln("the image locked");    
        }
    }
    for(var prop in images[0]){
        try{
            $.writeln("key is..."+prop);
            $.writeln("prop is..."+images[0][prop]);
        }catch(e){
            $.writeln("error");
        }
    }

    var embeddedImages = activeDocument.rasterItems;
    for(var i=0;i<embeddedImages.length;i++){
        try{
            embeddedImages[i].selected = true;
            $.writeln(embeddedImages[i]);
        }catch(e){
            $.writeln("the image locked");
        }
    }

})();