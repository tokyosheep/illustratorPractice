(function(){
    function Images(){
        this.images = activeDocument.placedItems;
        this.fullName = app.documents[0].fullName;
        this.subFolder01 = "sub01";
        this.subFolder01 = "sub02";
        this.subFolder01 = "sub03";
        for(var i=0;i<this.images.length;i++){
            $.writeln(this.images[i].file.name);
        }
        $.writeln(this.images[0].file);
        $.writeln(Folder.desktop);
   //this.images[0].file = File("/Users/kawanoshuji/Creative Cloud Files/素材商品/bb483cca98264e4a5e_1920.jpg");
    }

    Images.prototype.replaceImages = function(){
        for(var i=0;i<this.images.length;i++){
            var imgPath = app.documents[0].path +"/"+ this.images[i].file.name;
            this.images[i].file = File(imgPath);
        }
    }

    Images.prototype.replaceSelectedImages = function(folder){
        var selObj = activeDocument.selection;
        $.writeln(selObj);
        for(var i=0;i<selObj.length;i++){
            if(selObj[i].typename == "PlacedItem"){
                $.writeln(selObj[i].file.name);
                var imgPath = app.documents[0].path +"/"+folder+"/"+ selObj[i].file.name;
                selObj[i].file = File(imgPath);
            }
        }
    }

    var img = new Images();
    img.replaceSelectedImages("sub");
    //img.replaceImages();
})();