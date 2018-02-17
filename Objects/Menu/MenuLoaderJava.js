
var GetObject = new XMLHttpRequest();

GetObject.addEventListener("load", LoadObject, false);
GetObject.open('GET', '/Objects/Menu/Menu.html');
GetObject.send(null);

function LoadObject(HTMLINFO)
{
    window.onload;
    var dima = new Document();
    dima.documentElement = document.getElementById('Menu').innerHTML = GetObject.responseText;
    dima = document.getElementById('Menu').innerHTML = GetObject.responseText;
    alert( dima.getElementById('NavigationNew').innerText);
    document.getElementById('Menu').innerHTML = dddd;
    
}