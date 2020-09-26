//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente! Organizaste de forma lógica las cinco etapas del método científico."; messageTime=""; messageError="¡Sigue intentándolo!"; messageErrorG="¡Sigue intentándolo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0NA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="act4_resources/media/";
var indexG=0;
var words1G=["UGVyY2VwY2nzbiBkZSB1bmEgZGlmaWN1bHRhZDogRWwgaW5kaXZpZHVvIGVuY3VlbnRyYSBhbGf6biBwcm9ibGVtYSBxdWUgbGUgcHJlb2N1cGEsIHkgc2UgaGFsbGEgc2luIGxvcyBtZWRpb3MgcGFyYSBsbGVnYXIgYWwgZmluIGRlc2VhZG8u","SWRlbnRpZmljYWNp824geSBkZWZpbmljafNuIGRlIGxhIGRpZmljdWx0YWQ6IEVsIGluZGl2aWR1byBlZmVjdPphIG9ic2VydmFjaW9uZXMgcXVlIGxlIHBlcm1pdGVuIGRlZmluaXIgbGEgZGlmaWN1bHRhZCBjb24gbWF5b3IgcHJlY2lzafNuLg","U29sdWNpb25lcyBwcm9wdWVzdGFzIHBhcmEgZWwgcHJvYmxlbWE6IGhpcPN0ZXNpcy4gQSBwYXJ0aXIgZGVsIGVzdHVkaW8gZGUgbG9zIGhlY2hvcywgZWwgaW5kaXZpZHVvIGZvcm11bGEgY29uamV0dXJhcyBhY2VyY2EgZGUgbGFzIHBvc2libGVzIHNvbHVjaW9uZXMgZGVsIHByb2JsZW1hLCBlc3RvIGVzLCBmb3JtdWxhIGhpcPN0ZXNpcy4","RGVkdWNjafNuIGRlIGxhcyBjb25zZWN1ZW5jaWFzIGRlIGxhcyBzb2x1Y2lvbmVzIHByb3B1ZXN0YXM6IEVsIGluZGl2aWR1byBsbGVnYSBhIGxhIGNvbmNsdXNp824gZGUgcXVlLCBzaSBjYWRhIGhpcPN0ZXNpcyBlcyB2ZXJkYWRlcmEsIGxlIHNlZ3VpcuFuIGNpZXJ0YXMgY29uc2VjdWVuY2lhcy4","VmVyaWZpY2FjafNuIGRlIGxhcyBoaXDzdGVzaXMgbWVkaWFudGUgbGEgYWNjafNuOiBFbCBpbmRpdmlkdW8gcG9uZSBhIHBydWViYSBjYWRhIHVuYSBkZSBsYXMgaGlw83Rlc2lzLCBidXNjYW5kbyBoZWNob3Mgb2JzZXJ2YWJsZXMgcXVlIHBlcm1pdGFuIGNvbmZpcm1hciBzaSBsYXMgY29uc2VjdWVuY2lhcyBxdWUgZGViZXLtYW4gc2VndWlyIHNlIHByb2R1Y2VuIG8gbm8u"];
var words2G=[];
var words3G=[];
var c1=[138,139,194,170,213];
var c2=[];
var c3=[];
