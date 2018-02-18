var TempInfo;

var GetObjectBd = new XMLHttpRequest;
GetObjectBd.addEventListener('load', LoadInfo, false);
GetObjectBd.open('GET', '/BD.Info');
GetObjectBd.send(null);


function LoadInfo(tempinfo)
{
    TempInfo = GetObjectBd.responseText.split('\n');
}