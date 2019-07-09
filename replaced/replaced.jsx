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
    }

    Images.prototype.replaceImages = function(){
        for(var i=0;i<this.images.length;i++){
            var imgPath = app.documents[0].path +"/"+ this.images[i].file.name;
            this.images[i].file = File(imgPath);
        }
    }

    Images.prototype.replaceSelectedImages = function(){
        var folder = Folder.selectDialog("フォルダを選択してください");
        if(!folder){
            return;
        }
        var selObj = activeDocument.selection;
        $.writeln(selObj);
        for(var i=0;i<selObj.length;i++){
            if(selObj[i].typename == "PlacedItem"){
                $.writeln(selObj[i].file.name);
                var imgPath = folder+"/"+ selObj[i].file.name;
                selObj[i].file = File(imgPath);
            }
        }
    }

    var img = new Images();
    img.replaceSelectedImages()
    //img.replaceImages();
})();