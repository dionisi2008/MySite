window.onload = 
function LoadApplet()
{
    var listApplets = document.head.getElementsByClassName('Applet');
    for (let index = 0; index <= listApplets.length - 1; index++) 
    {
        var PasteTag = listApplets[index].getAttribute('paste');
        document.getElementById(PasteTag).appendChild(listApplets[index].import.body);
    }
}