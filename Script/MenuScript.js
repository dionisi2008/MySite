window.onload;
function MenuKlic(Razdel)
{
    switch (Razdel)
        {
            case 'Home':
                window.open('http://localhost:8080/Index.html');
            break;
            case 'New':
                document.open('http://localhost:8080/Index.html');
                //location.href = '/New.html'
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
