
var GetObject = new XMLHttpRequest();

GetObject.addEventListener("load", LoadObject, false);
GetObject.open('GET', '/Objects/Menu/Menu.html');
GetObject.send(null);

var DateLoad = false;
var StringRazdels;

function LoadObject(HTMLINFO)
{
        window.onload
        {
            document.getElementById('BaseForm').innerHTML = GetObject.responseText + document.getElementById('BaseForm').innerHTML;        
        }
        
}


function WriteInfiObject(CollectionObject)
{    
    CollectionObject.NavigationNew.innerText = StringRazdels[0]
    CollectionObject.NavigationPhoto.innerText = StringRazdels[1]
    CollectionObject.NavigationChat.innerText = StringRazdels[2]
    CollectionObject.NavigationFaq.innerText = StringRazdels[3]
}

function MenuKlic(Razdel) /* Переход на нужный раздел */
{  
    switch (Razdel)
        {
            case 'Home':
            location.href = '/Index.html'
            break;
            case 'New':
            location.href = '/New.html'
            break;
            case 'Chat':
                location.href = '/Chat.html'
            break;
            case 'Photo':
                location.href = '/Photo.html'
            break;
            case 'Info':
                location.href = '/Info.html'
            break;
            default:
                MenuKlic('Home');
            break;
        }
}