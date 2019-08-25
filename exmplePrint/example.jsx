var docRef = documents.add();
var textRef_0 = docRef.layers[0].textFrames.add();
textRef_0.contents = "Visible and Printable";
textRef_0.top = 600;
textRef_0.left = 200;

var layerRef_1 = docRef.layers.add();
var textRef_1 = layerRef_1.textFrames.add();
textRef_1.contents = "Visible and Non-Printable";
textRef_1.top = 500;
textRef_1.left = 250;
layerRef_1.printable = false;

var layerRef_2 = docRef.layers.add();
var textRef_2 = layerRef_2.textFrames.add();
textRef_2.contents = "Non-Visible";
textRef_2.top = 400;
textRef_2.left = 300;
layerRef_2.visible = false;
redraw();

// Print with various job options
var printJobOptions = new PrintJobOptions();
var options = new PrintOptions();
options.jobOptions = printJobOptions;
/*
printJobOptions.designation = PrintArtworkDesignation.ALLLAYERS;
printJobOptions.reverse = true;
docRef.print(options);

printJobOptions.collate = false;
printJobOptions.designation = PrintArtworkDesignation.VISIBLELAYERS;
printJobOptions.reverse = false;
docRef.print(options);
*/
printJobOptions.designation = PrintArtworkDesignation.VISIBLEPRINTABLELAYERS;
var docPath = new File(Folder.desktop + "/printJobTest1.ps");
printJobOptions.file = docPath;
docRef.print(options);