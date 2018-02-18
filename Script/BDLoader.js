var TempVersionBase;

if (sessionStorage.getItem('Base') == null)
{
    LoadBase();
}
else
{
    if (StartGetVersion().split(' ')[1] > sessionStorage.getItem('Base').split(' ')[1])
    {
        alert('Good work')
        LoadBase();
    }
    else
    {
        //alert('not');
    }
}

function LoadBase()
{
     sessionStorage.setItem('Base', StartGetVersion());
     GetBaseString();
}

function StartGetVersion()
{
    var GetVersionBd = new XMLHttpRequest;
    GetVersionBd.open('GET', '\Ver.txt', false);
    GetVersionBd.send(null);    
    return GetVersionBd.responseText;
}

function  GetBaseString()
{
    var GetBd = new XMLHttpRequest;
    GetBd.open('GET', '\BD.info', false);
    GetBd.send(null);
    var RazdelsBase = GetBd.responseText.split('\n')[0].split(',');
    alert(RazdelsBase[0].split('*'));
    //    1*2-5,6*6-10
    //    Menu.Names
    //    Новости
    //    Чат
    //    dds
    //    Материал
    //    Menu.Links
    //    /Index.html
    //    /New.html
    //    /Chat.html
    //    /Photo.html
    //    /Info.html
}
