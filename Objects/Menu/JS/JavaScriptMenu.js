
export default class LoadReszdel
{
    
    ListRezdel = ['Home', 'New', 'Chat', 'Photo', 'Info'];
    
}

 function MenuKlicer(Razdel) /* Переход на нужный раздел */
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
