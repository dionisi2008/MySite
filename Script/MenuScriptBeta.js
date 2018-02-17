window.onload;

function LoadMenu(IdHtml)
{
    window.onload;
    var HtmlTeg = document.getElementById(IdHtml).innerHTML
    var GetObject = new XMLHttpRequest()
    GetObject.open('GET', '/Objects/Menu.html');
    GetObject.send(null);
    document.getElementById(IdHtml).innerHTML = GetObject.responseText
}

function MenuKlic(Razdel)
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
