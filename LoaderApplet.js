window.onload =
function LoadApplet(shablon)
{
    if (document.getElementById('ShablonInfo') != null)
    {
        //Если шаблон
        document.body.appendChild(ShablonInfo.import.body)
    }

        //Если аплет
        var listApplets = document.head.getElementsByClassName('Applet');
        for (let index = 0; index <= listApplets.length - 1; index++) 
        {
            var PasteTag = listApplets[index].getAttribute('Paste');
            document.getElementById(PasteTag).appendChild(listApplets[index].import.body);
        }
    }    


function tyu()
{

}