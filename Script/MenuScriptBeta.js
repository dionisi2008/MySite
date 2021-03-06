window.onload;

export function LoadMenu(IdHtml) /* Прогрузка обьекта */
{
    window.onload;
    var HtmlTeg = document.getElementById(IdHtml).innerHTML
    var GetObject = new XMLHttpRequest()
    GetObject.open('GET', '/Objects/Menu.html');
    GetObject.send(null);
    document.getElementById(IdHtml).innerHTML = GetObject.responseText
}

export function MenuKlic(Razdel) /* Переход на нужный раздел */
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
