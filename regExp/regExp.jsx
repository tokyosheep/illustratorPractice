(function(){
    var path = app.documents[0].path;
    var name = app.documents[0].name; 
    $.writeln(path.name);
    $.writeln(name);
    var number = path.name.match(/\d{5,6}/ig);
    $.writeln(number);
    var elms = name.match(/(((A|B)\d)|(\d+)(mm|cm)*)/ig);
    for(var i=0;i<elms.length;i++){
        $.writeln(elms[i]);
    }
})();