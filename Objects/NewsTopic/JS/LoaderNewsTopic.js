window.onload;

var GetObjectTopicNews = new XMLHttpRequest();

GetObjectTopicNews.addEventListener("load", LoadObject, false);
GetObjectTopicNews.open('GET', './Objects/NewsTopic/Index.html');
GetObjectTopicNews.send(null);

function LoadObject(HTMLINFO)
{
        window.onload
        {
            document.getElementById('BaseForm').innerHTML = GetObjectTopicNews.responseText + document.getElementById('BaseForm').innerHTML;        
        }
        
} 