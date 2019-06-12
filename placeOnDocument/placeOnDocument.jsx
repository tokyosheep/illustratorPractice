(function(){
    //preferences.rulerUnits = Units.MM;
    documents.add(DocumentColorSpace.CMYK,297,210);
    var fileExt = "*.jpg";
    var offsetX = 5;
    var offsetY = 50;
    var imageW = 80;
    var imageH = 80;
    var imageMarginW = 100;
    var imageMarginH = 95;
    var folderObj = Folder.selectDialog("フォルダを選択してください");
    var jpegFileList = [];
    var count = 0;
    if(folderObj){
        jpegFileList = getFolder(folderObj,jpegFileList);
        for(var y=0;y<3;y++){
            for(var x=0;x<3;x++){
                var myImage = activeDocument.placedItems.add();
                myImage.file = jpegFileList[count];
                myImage.left = x * imageMarginW + offsetX;
                myImage.top = -y * imageMarginH - offsetY;
                myImage.width = imageW;
                myImage.height = imageH;
                count++;
                myImage.embed();//埋め込み画像にする
            }
        }
    }

    function getFolder(folderObj,jpegFileList){
        jpegFileList = jpegFileList.concat(folderObj.getFiles(fileExt));
        var fileList = folderObj.getFiles();
        for(var i=0;i<fileList.length;i++){
            if(fileList[i].getFiles){
                jpegFileList = getFolder(FileList[i],jpegFileList);
            }
        }
        return jpegFileList;
    }
})();