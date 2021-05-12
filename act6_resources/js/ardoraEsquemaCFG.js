//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
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
var timeOnMessage=2; messageOk="¡Excelente! Organizaste correctamente los tipos de investigación"; messageTime=""; messageError="¡Sigue intentándolo! "; messageErrorG="¡Sigue intentándolo! "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0Ng"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["VGlwb3MgZGUgaW52ZXN0aWdhY2nzbg","SW52ZXN0aWdhY2nzbiBoaXN083JpY2E","SW52ZXN0aWdhY2nzbiBoaXN083JpY2E","SW52ZXN0aWdhY2nzbiBoaXN083JpY2E","VGlwb3MgZGUgaW52ZXN0aWdhY2nzbg","SW52ZXN0aWdhY2nzbiBkZXNjcmlwdGl2YQ","SW52ZXN0aWdhY2nzbiBkZXNjcmlwdGl2YQ","SW52ZXN0aWdhY2nzbiBkZXNjcmlwdGl2YQ","VGlwb3MgZGUgaW52ZXN0aWdhY2nzbg","SW52ZXN0aWdhY2nzbiBleHBlcmltZW50YWw","SW52ZXN0aWdhY2nzbiBleHBlcmltZW50YWw","SW52ZXN0aWdhY2nzbiBleHBlcmltZW50YWw"];
var nodeFS=[23,25,25,25,23,26,26,26,23,27,27,27];
var nodeE=["SW52ZXN0aWdhY2nzbiBoaXN083JpY2E","ZGVwZW5kZSBkZSBkYXRvcyBvYnNlcnZhZG9zIHBvciBvdHJvcw","ZnVlbnRlcyBwcmltYXJpYXMgeSBmdWVudGVzIHNlY3VuZGFyaWFz","Y3LtdGljYSBpbnRlcm5hIHkgZXh0ZXJuYQ","SW52ZXN0aWdhY2nzbiBkZXNjcmlwdGl2YQ","ZGVzY3JpYmlyIHNpdHVhY2lvbmVzIG8gYWNvbnRlY2ltaWVudG9z","bm8gc2UgaW50ZXJlc2EgZW4gY29tcHJvYmFyIGV4cGxpY2FjaW9uZXM","c2lydmVuIHBhcmEgcHJvYmFyIGhpcPN0ZXNpcyBlc3BlY+1maWNhcw","SW52ZXN0aWdhY2nzbiBleHBlcmltZW50YWw","bWFuaXB1bGFjafNuIHJpZ3Vyb3NhIGRlIGxhcyB2YXJpYWJsZXM","Z3J1cG8gZGUgY29udHJvbCBwYXJhIGNvbXBhcmFyIGxvcyByZXN1bHRhZG9z","aW52ZXN0aWdhciByZWxhY2lvbmVzIGRlIGNhdXNhLWVmZWN0bw"];
var nodeES=[25,37,39,26,26,39,41,42,27,39,45,37];
var nodeCount=0;var ind=0;
