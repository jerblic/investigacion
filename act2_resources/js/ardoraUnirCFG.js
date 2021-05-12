//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="¡Excelente! comprendiste muy bien la investigación Aplicada y Básica"; messageTime=""; messageError="Debes repasar los conceptos de investigación básica y aplicada."; messageErrorG="Debes repasar los conceptos de investigación básica y aplicada."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0Mg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["VXRpbGl6YWNp824gZGUgbWljcm9vcmdhbmlzbW9zIGVuIGxhIHJlY3VwZXJhY2nzbiBhbWJpZW50YWwgcG9yIG1lZGlvIGRlIGJpb3RlY25vbG9n7WEu", "SW52ZXN0aWdhY2nzbiBBcGxpY2FkYS4"],["RWZlY3RvcyBkZWwgbml2ZWwgZnJl4XRpY28gZW4gZWwgZGVzYXJyb2xsbyByYWRpY3VsYXIgZGUg4XJib2xlcyBj7XRyaWNvcy4", "SW52ZXN0aWdhY2nzbiBBcGxpY2FkYS4"],["TGEgZGV1ZGEgcPpibGljYSBjb2xvbWJpYW5hIGVuIGVsIGNvbnRleHRvIGRlIGxhcyBjcmlzaXMgZmluYW5jaWVyYXMgaW50ZXJuYWNpb25hbGVzIDEuOTIwLTEuOTg1Lg", "SW52ZXN0aWdhY2nzbiBBcGxpY2FkYS4"],["Q2FsY3VsYWRvcmFzLCBncuFmaWNvcyB5IHByZWPhbGN1bG8sIHVuIGFwb3J0ZSBhIGxhIGVuc2XxYW56YSB5IGVsIGFwcmVuZGl6YWplIGRlbCDhbGdlYnJhLg", "SW52ZXN0aWdhY2nzbiBBcGxpY2FkYS4"],["TGEgcGFydO1jdWxhIGVsZW1lbnRhbCBlbiBsYSB0ZW9y7WEgZXN0b2Phc3RpY2EgZGUgY2FtcG9zLg", "SW52ZXN0aWdhY2nzbiBC4XNpY2Eu"],["RXN0dWRpbyBm7XNpY28gZGUgbGFzIGVzdHJlbGxhcyBEZWx0YSBDZXBoZWkgeSBzdSB1c28gcGFyYSBsYSBkZXRlcm1pbmFjafNuIGRlIGxhcyBkaXN0aW50YXMgZGUgc2lzdGVtYXMgZXh0cmFnYWzhY3RpY29z", "SW52ZXN0aWdhY2nzbiBC4XNpY2Eu"]];
var c=[[87,23],[74,23],[97,23],[91,23],[58,21],[120,21]];
var con1=["Utilización de microorganismos en la recuperación ambiental por medio de biotecnología.","Efectos del nivel freático en el desarrollo radicular de árboles cítricos.","La deuda pública colombiana en el contexto de las crisis financieras internacionales 1.920-1.985.","Calculadoras, gráficos y precálculo, un aporte a la enseñanza y el aprendizaje del álgebra.","La partícula elemental en la teoría estocástica de campos.","Estudio físico de las estrellas Delta Cephei y su uso para la determinación de las distintas de sistemas extragalácticos"];
var con2=["Investigación Aplicada.","Investigación Básica."];
var sel1=""; join1=[]; join2=[];
