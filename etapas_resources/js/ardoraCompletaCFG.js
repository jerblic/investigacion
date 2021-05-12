//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
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
var timeOnMessage=2; messageOk="¡Excelente! esas son las étapas del método científico"; messageTime=""; messageError="¡Sigue intentándolo! "; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p><input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> El individuo encuentra algún problema que le preocupa, y se halla sin los medios para llegar al fin deseado. </p><p>  </p><p> <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> El individuo efectúa observaciones que le permiten definir la dificultad con mayor precisión. </p><p>  </p><p> <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> hipótesis. A partir del estudio de los hechos, el individuo formula conjeturas acerca de las posibles soluciones del problema, esto es, formula hipótesis. </p><p>  </p><p> <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> El individuo llega a la conclusión de que, si cada hipótesis es verdadera, le seguirán ciertas consecuencias. </p><p>  </p><p> <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> El individuo pone a prueba cada una de las hipótesis, buscando hechos observables que permitan confirmar si las consecuencias que deberían seguir se producen o no. </p><p> </p>'];
var answers=["Soluciones propuestas para el problema:","Deducción de las consecuencias de las soluciones propuestas:","Verificación de las hipótesis mediante la acción:","Percepción de una dificultad:","Identificación y definición de la dificultad:"];
var a=["Mw","NA","NQ","MQ","Mg"];
var itemCorr=["0","0","0","0","0"];
var itemHelp=["","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="ZXRhcGFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
