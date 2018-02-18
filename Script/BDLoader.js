var GetObjectBd = new XMLHttpRequest;
GetObjectBd.open('GET', '/BD.Info', false);
GetObjectBd.send(null);
var TempInfo = GetObjectBd.responseText.split('\n');
var n1 = [TempInfo[TempInfo.length - 1].split(',').length];
for (let Shag = 0; Shag <= n1.length - 1; Shag++)
{
    var gr = TempInfo[TempInfo.length - 1].split(',')[Shag].split('*')[1].split('-');
       sessionStorage.setItem(TempInfo[TempInfo.length - 1].split(',')[Shag].split('*')[0], TempInfo.slice(gr[0], gr[1]));
}