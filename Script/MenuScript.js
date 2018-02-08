window.onload;
function MenuKlic(Razdel)
{
    switch (Razdel)
        {
            case 'Home':
                location.href = 'http://localhost:8080/Index.html'
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
