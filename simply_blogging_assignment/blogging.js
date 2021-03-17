// JavaScript source code
var sessionBlogObj = [];
getSessionData();

function addFormData() {
    
    var data = readFormData();
    sessionBlogObj.push(data);
    sessionStorage.myObject = JSON.stringify(sessionBlogObj);
    clearData();
    var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
    var myPanel = $('<div class="card card-outline-info" id="' + 1 + 'Panel"><div class="card-block"><div class="card-title"><span>' + data.title + '</span><button type="button" class="close" data-target="#' + 1 + 'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>' + data.articles + ' </p><img src="' + data.addImage +'" width="100px" height="100px"></div></div>');
    myPanel.appendTo(myCol);
    myCol.appendTo('#contentPanel');
}


function readFormData() {
    var blogObj = {}
    blogObj.title = document.getElementById("title").value;
    blogObj.articles = document.getElementById("articles").value;
    blogObj.addImage = sessionStorage.getItem("recent-image");
    return blogObj;
}

function clearData() {
    document.getElementById("title").value = "";
    document.getElementById("articles").value = "";
    document.getElementById("addImage").value = "";
}


function getSessionData() {
    var sessionData = JSON.parse(sessionStorage.myObject);
    for (var i = 0; i < sessionData.length; i++) {
            var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
        var myPanel = $('<div class="card card-outline-info" id="' + i + 'Panel"><div class="card-block"><div class="card-title"><span>' + sessionData[i].title + '</span><button type="button" class="close" data-target="#' + i + 'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>' + sessionData[i].articles + ' </p><img src="' + sessionData[i].addImage +'" width="100px" height="100px"></div></div>');
            myPanel.appendTo(myCol);
            myCol.appendTo('#contentPanel');
        }

}
