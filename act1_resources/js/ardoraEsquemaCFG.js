//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien ¡Felicitaciones!"; messageTime=""; messageError="Analiza la lectura y contesta nuevamente"; messageErrorG="Analiza la lectura y contesta nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0MQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["SW52ZXN0aWdhY2nzbiBi4XNpY2E","UHVyYQ","UHVyYQ","SW52ZXN0aWdhY2nzbiBi4XNpY2E","RGlyaWdpZGEgbyBhcGxpY2FkYQ","RGlyaWdpZGEgbyBhcGxpY2FkYQ"];
var nodeFS=[22,4,4,22,19,19];
var nodeE=["UHVyYQ","SGFjZXIgY2llbmNpYQ","UHJvZHVjaXIgY29ub2NpbWllbnRv","RGlyaWdpZGEgbyBhcGxpY2FkYQ","UHJvZnVuZGl6YXI","VGVt4XRpY2FzIGVzcGVj7WZpY2Fz"];
var nodeES=[4,13,21,19,11,23];
var nodeCount=0;var ind=0;
