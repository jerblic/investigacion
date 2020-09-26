//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#F8FA9A"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Excelente! esas son las acepciones del término investigación para Restrepo"; messageTime=""; messageError="¡Sigue intentándolo! "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>El mismo Restrepo nos habla de lo que él denomina, las tres acepciones del término investigación formativa: </p><p>  </p><p> 1. Investigación <select name="item1" id="item1" class="ardoraCombo"></select> </p><p> 2. Formación en y para la <select name="item2" id="item2" class="ardoraCombo"></select> </p><p> 3. Investigación para la <select name="item3" id="item3" class="ardoraCombo"></select> en la <select name="item4" id="item4" class="ardoraCombo"></select> </p><p> </p>'];
var b=["MTA","Mg","MTQ","Mw","NA","Nw","Mg","MTU","MQ","Mw","Ng","MTE"];
var c=[13,11,12,9,17,10,13,9,12,14,4,12];
var answers=["investigación","Descriptiva","cotidianidad","Histórica","acción o práctica","tecnología","investigación","educación","exploratoria","transformación","vida","construcción"];
var a=["3","1","4","1","4","2","2","4","1","3","2","3"];
var itemCorr=["0","0","0","0"];
var itemHelp=["","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="YWN0OA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
