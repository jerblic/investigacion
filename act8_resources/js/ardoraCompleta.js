//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){if (tiAval){parent.iniciaActividade()}
if ((tiTime) && (tiButtonTime)){paintButtonTime();}else{showText();}}
function showText(){
document.getElementById("ardoraAct").innerHTML=txtC[indexTXT]+'<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas><canvas id="ardoraHelpCanvas" width="2px" height="2px"></canvas>';
for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();var theItem=document.getElementById(nameItem);var indexOptions=0;if (theItem != null){
indexOptions=0;var opt=new Array();for (i=0; i<a.length; i++){if (a[i]==numItem){opt[indexOptions]=answers[i];indexOptions++;}}
var opt2=new Array();for (i=0; i<opt.length; i++){ opt2[i]="~";}for (i=0; i<opt.length; i++){var num=Math.floor((Math.random()*opt.length));while (opt2[num]!="~"){num++;
if (num>opt.length-1){num=0;}}opt2[num]=opt[i];}for (i=0; i<opt.length; i++){opt[i]=opt2[i];}
for (i=0; i<opt.length; i++){var newOpt = new Option(opt[i],opt[i]);theItem.options[i]=newOpt;}}}
resizeCanvas();cssColors()
$(".ardoraCombo").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){paintHelp($(this));}
}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});
}
function paintHelp(item){document.getElementById("ardoraHelpCanvas").style.zIndex=3;var canvas = document.getElementById("ardoraHelpCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.font="14px " + fHelp; var indexHelp=parseInt($(item).attr("name").substring(4));var metricsW = contexto.measureText(itemHelp[indexHelp-1]).width+20;
var metricsH = 10+14+10;$("#ardoraHelpCanvas").attr({"width": metricsW,"height": metricsH});var topHelp=Math.round($(item).position().top)-metricsH;
var leftHelp=Math.round($(item).position().left)+10-(canvas.width/2);var xPoint=0;if (leftHelp<5){leftHelp=5;xPoint=Math.round($(item).position().left)+10;};
document.getElementById("ardoraHelpCanvas").style["visibility"]="visible";document.getElementById("ardoraHelpCanvas").style["position"]="absolute";document.getElementById("ardoraHelpCanvas").style["top"]=topHelp.toString()+"px";
document.getElementById("ardoraHelpCanvas").style["left"]=leftHelp.toString()+"px";
contexto.fillStyle=colorSele;var gcolorSele=colorSele;colorSele="#FF8000";paintBubble(contexto,0,0,canvas.width-10, canvas.height-3,xPoint,10);colorSele=gcolorSele;
contexto.beginPath();contexto.lineWidth="1";contexto.textAlign="left";
contexto.font="14px " + fHelp;contexto.shadowBlur = 0;contexto.shadowOffsetX = 0;contexto.shadowOffsetY = 0;
contexto.fillStyle="#000000";contexto.fillText(itemHelp[indexHelp-1],5,14);contexto.fill();}
function randomSort(){};
function resizeCanvas(){var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});$("#ardoraActCanvasAnim").attr({"width": canWidth,"height": canHeight});};
function isCorrect(){successes=consolidateSuccess;score=consolidateScore;var correct=true;for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();
var theItem=document.getElementById(nameItem);var ansCorrect="";if (theItem != null){
for (i=0; i<a.length; i++){if (a[i]==numItem){
if (parseInt(completaWords(b[i]))==numItem){ansCorrect=answers[i];}}}
if (theItem.value==ansCorrect && $.trim(theItem.value)!=""){
itemCorr[numItem-1]="1";consolidateSuccess++;consolidateScore=consolidateScore+scoreInc;
score = score + scoreInc;successes++;}
else{
consolidateScore=consolidateScore-scoreDec;
score = score - scoreDec;correct=false;}}}if (correct) {if (indexTXT==txtC.length-1){showMessage("Ok");}else{
indexTXT++;showText();consolidateSuccess=successes;consolidateScore=score;
timeAct = timeAct + timeBon;}}else{attempts++;if (tiAttempts) {
if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < itemCorr.length; i++) {itemCorr[i]="1";}showCorrect();}
function paintBack(){showText();}
function completaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function showCorrect(){var output="";var txtCorr=document.getElementById("ardoraAct").innerHTML;
for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {if (itemCorr[j-1]!="0"){var pos=txtCorr.indexOf(nameItem);var ans="";
posItem=txtCorr.indexOf("</select>",pos)+9;
for (i = 0; i < a.length; i++) {if (a[i] == numItem) {if (parseInt(completaWords(b[i])) == numItem) {ans = answers[i];}}}
output=[txtCorr.slice(0, posItem),"<b>"+ans+"</b>", txtCorr.slice(posItem)].join("");
var it="select#"+nameItem;
document.getElementById("ardoraAct").innerHTML=output;$(it).remove();txtCorr=document.getElementById("ardoraAct").innerHTML;}}}
$(".ardoraCombo").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){
paintHelp($(this));}}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});}
