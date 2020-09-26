//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintbGame();$(".bGame").css("background",colorButton);
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function calcMaxWidth() {$("#ardoraAct").css("width", actMaxWidth + "px");$("#ardoraAct").css("height",actMaxHeight + "px");
var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": (parseInt(canWidth) + 20).toString(),"height": canHeight});}
function paintbGame() {var iW = [];var iWS = [];var oW = "";if (indexG==0){var actualW=words1G;}if (indexG==1){var actualW=words2G;}if (indexG==2){var actualW=words3G;}
for (i = 0; i < actualW.length; i++) {iW.push("");}for (i = 0; i < iW.length; i++) {var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {
ind++;if (ind == iW.length) {ind = 0;}}iW[ind]=oparWords(actualW[i]);}
var newHtml = "<ul id='sortable'>";for (i=0; i<iW.length; i++) {newHtml = newHtml + "<li id='cellG" + i.toString() + "' class='bGame'><p>" + iW[i] + "</p></li>";
}newHtml = newHtml + "</ul>";$("#ardoraActSort").html(newHtml);$("#sortable").sortable({revert: true});$("ul, li").disableSelection();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});
$(".bGame").mouseleave(function () {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});}
function randomSort() {}
function isCorrect(){
if (indexG==0){var actualW=words1G; var c=c1;}if (indexG==1){var actualW=words2G;var c=c2;}if (indexG==2){var actualW=words3G;var c=c3;}var correct = true;var i=0;
$("ul li").each(function (ind, e){
if (oparWords(actualW[i]).substring(0,c[i]).localeCompare($(e).text())!=0){correct=false;}i++;});
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexG++;var iEnd=false;if (indexG==3){iEnd=true}
else{if (indexG==1){if (words2G.length==0){if (words3G.length==0){iEnd=true;}else{indexG++;}}}else{if (words3G.length==0){iEnd=true}}}
if (iEnd) {showMessage("Ok");} else {paintbGame();$(".bGame").css("backgroundColor", colorButton);$(".bGame").css("color", colorBack);}
} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");
} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var iW = [];if (indexG==0){var actualW=words1G;}if (indexG==1){var actualW=words2G;}if (indexG==2){var actualW=words3G;}
for (i = 0; i < actualW.length; i++) {iW.push(oparWords(actualW[i]));}var i=0;$("ul li").each(function (ind, e) {$(e).html("<p>" + iW[i] + "</p>");i++;});
}
function paintBack(){}
function oparWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
