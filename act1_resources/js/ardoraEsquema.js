//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
// Based on the work of Mark Lee http://www.capricasoftware.co.uk
// and Wes Nolte http://twitter.com/wesnolte
function initAct(){
if (tiAval){parent.iniciaActividade()}
makeChart($("#org"),depth);
$(".nodeNew").draggable({cursor:"move",distance: 40,helper:"clone",opacity:0.8,revert:"invalid",revertDuration:100,snap:"div.node.expanded",snapMode:"inner",stack:"div.node"});
}
function randomSort(){
var opt2=new Array();for (i=0;i<nodeES.length;i++){opt2[i]="~";}for (i=0;i<nodeES.length;i++){var num=Math.floor((Math.random()*nodeES.length));
while (opt2[num]!="~"){num++;if (num>nodeES.length-1){num = 0;}}opt2[num]=EsquemaWords(nodeE[i]).substring(0,nodeES[i]);}
var lineHtml="";for (i=0;i<nodeES.length;i++){lineHtml = lineHtml + "<div id='n" + i.toString() + "' class='nodeNew'>" + opt2[i] + "</div>";}
$("#nodesBar").html(lineHtml);}
function isCorrect(){
var correct=true;for (k=0;k<nodeES.length;k++) {var tablinks=document.getElementById("org").getElementsByTagName("li");
for (var i=0;i<tablinks.length;i++){var nodeHtml=tablinks[i].innerHTML;var nodeName="";if (nodeHtml.indexOf("<ul>")!=-1){
nodeName=nodeHtml.substring(0,nodeHtml.indexOf("<ul>"));nodeHtml=nodeHtml.substring(nodeHtml.indexOf("<ul>")+4,nodeHtml.length);}else{nodeName=nodeHtml;nodeHtml="";}
if (nodeName.localeCompare(EsquemaWords(nodeF[k]).substring(0,nodeFS[k]))==0){var deep=0;var nodeChild="";var z=0;
while ( z<nodeHtml.length){if (nodeHtml.substr(z,4).localeCompare("<ul>")==0){deep++; z=z+4;}if (nodeHtml.substr(z,5).localeCompare("</ul>")==0){deep--; z=z+5;}
if (deep==0){nodeChild=nodeChild+nodeHtml.substr(z,1);}z++;}
nodeChild=$.trim(nodeChild);nodeChild=nodeChild.replace(/ /g,"+");nodeChild=nodeChild.replace(/<li>/g,"");var nodesChilds=nodeChild.split("</li>");
var nodeTest=$.trim(EsquemaWords(nodeE[k]).substring(0, nodeES[k]));nodeTest=nodeTest.replace(/ /g,"+");var isSol=false;for (t=0;t<nodesChilds.length;t++){
if (nodeTest.localeCompare(nodesChilds[t])==0){isSol=true;}}if (!isSol){correct = false;}}}}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;showMessage("Ok");} else {attempts++;score=score-scoreDec;
if (tiAttempts) {if (attempts>attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function EsquemaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function makeChart(idDiv, depth){nodeCount=0;var $appendTo=$("#chart");var $container=$("<div class='cChart'/>");buildNode(idDiv.find("li:first"), $container, 0, depth);$appendTo.append($container);clearTree();
$("div.node").draggable({cursor: "move",distance: 40,helper: "clone",opacity: 0.8,revert: "invalid",revertDuration: 100,snap: "div.node.expanded",snapMode: "inner",stack: "div.node"});
$("div.node").droppable({accept: ".node,.nodeNew",activeClass: "drag-active",hoverClass: "drop-hover"});
$("div.node").bind("dragstop", function handleDragStop(event, ui) {$("#chart").children().remove();makeChart(idDiv, depth);});
$("div.node").bind("drop", function handleDropEvent(event, ui) {if ($(ui.draggable).hasClass("node")) {var nodeDragg=$(ui.draggable);$("li").each(function(i, e) {
if ($(this).html().trim().indexOf("<ul>")==-1) {var nT=$(e).text().trim();} else { var nT = $(e).html().trim().substr(0, $(e).html().trim().indexOf("<ul>")).trim();} if ($(ui.draggable).text().localeCompare(nT)==0) {nodeDragg=$(e);}})
if ($(this).html().trim().indexOf("<ul>")==-1){var nodeDrop = $(this).text().trim();} else {var nodeDrop = $(this).html().trim().substr(0, $(this).html().trim().indexOf("<ul>")).trim();}
$("li").each(function(i, e) {if ($(this).html().trim().indexOf("<ul>") == -1) {var nodeText = $(e).text().trim();} else {var nodeText = $(e).html().trim().substr(0, $(e).html().trim().indexOf("<ul>")).trim();}
if (nodeDrop.localeCompare(nodeText)==0) {var targetUl = $(e).children("ul");if (targetUl.length > 0) {targetUl.append(nodeDragg);} else { $(e).append("<ul></ul>"); $(e).children("ul").append(nodeDragg);} $("#chart").html("");makeChart($("#org"), depth);}});}
if ($(ui.draggable).hasClass("nodeNew")) {if ($(this).html().trim().indexOf("<ul>")==-1) {var nodeDrop = $(this).text().trim();} else {var nodeDrop = $(this).html().trim().substr(0, $(this).html().trim().indexOf("<ul>")).trim();}
$("li").each(function(i, e) {if ($(this).html().trim().indexOf("<ul>") == -1) {var nodeText = $(e).text().trim();} else {var nodeText = $(e).html().trim().substr(0, $(e).html().trim().indexOf("<ul>")).trim();}
if (nodeDrop.localeCompare(nodeText)==0) {var targetUl=$(e).children("ul");if (targetUl.length > 0) {targetUl.append("<li>" + $(ui.draggable).text() + "</li>");} else {$(e).append("<ul></ul>");$(e).children("ul").append("<li>" + $(ui.draggable).text() + "</li>");}
$(ui.draggable).remove();$("#chart").html("");makeChart($("#org"), depth);}});}});}
function clearTree(){$("table").each(function() {$table=$(this);$firstTR=$table.find("td:last-child").find("tr:first");if ($firstTR.hasClass("node-container")){
$firstTD=$firstTR.find("td:first");var changeLine=true;$firstTD.children("tr").each(function(){if (changeLine){if ($(this).hasClass("top")){changeLine=false;}else{$(this).removeClass("right");}}})}})
$("table").each(function() {$table=$(this);$lastTR=$table.find("td:last-child").find("tr:last-child");if ($lastTR.hasClass("node-container")){$firstTD=$lastTR.find("td:first");
var changeLine=false;$firstTD.children("tr").each(function(){if ($(this).hasClass("top")){changeLine=true;}
if (changeLine){$(this).removeClass("right");if ($(this).next().is("tr")){var nextTR=$(this);while (nextTR.next().is("tr")){nextTR.next().removeClass("right");nextTR=nextTR.next();}}} changeLine=false;})}})}
function buildNode($node, $appendTo, level, depth) {var $table = $("<table cellpadding='0' cellspacing='0' border='0'/>");var $tbody = $("<tbody/>");
var $nodeCell = $("<tr/>").addClass("node-cells");var $nodeRow = $("<td/>").addClass("node-cell").attr("colspan", 2);var $childNodes = $node.children("ul:first").children("li");var $nodeDiv;
if ($childNodes.length > 1) {$nodeCell.attr("rowspan", $childNodes.length * 2);}var $nodeContent = $node.clone().children("ul,li").remove().end().html();nodeCount++;
$node.data("tree-node",nodeCount);var $linesRow=$("<td/>");$linesRow.css("height","100%");$linesRow.css("width","8px");$linesRow.css("display","list");
if ($childNodes.length==0){var $left = $("<tr></tr>").addClass("line right");var $right = $("<tr></tr>").addClass("line right top");$linesRow.append($left).append($right);$left.append("&nbsp;");$right.append("&nbsp;");}
var ind=0;var mid=$childNodes.length / 2;$childNodes.each(function() {if (ind<mid){var $left = $("<tr></tr>").addClass("line right");var $right = $("<tr></tr>").addClass("line right ");}
if (ind==mid){var $left = $("<tr></tr>").addClass("line right top");var $right = $("<tr></tr>").addClass("line right");}
if ($childNodes.length%2==1){if (ind==Math.floor(mid)){var $left = $("<tr></tr>").addClass("line right");var $right = $("<tr></tr>").addClass("line right top");}}
if (ind>mid){var $left = $("<tr></tr>").addClass("line right");var $right = $("<tr></tr>").addClass("line right");}
$linesRow.append($left).append($right);$left.append("&nbsp;");$right.append("&nbsp;");$left.css("height",(50 / $childNodes.length).toString()+"%");$right.css("height",(50 / $childNodes.length).toString()+"%");ind++;});
if (nodeCount>1){$tbody.append($linesRow);}var $childNodesRow = $("<td/>");$childNodes.each(function() {var $td = $("<tr class='node-container'/>");$td.attr("rowspan", 2);buildNode($(this), $td, level + 1, depth);$childNodesRow.append($td);});
$nodeDiv = $("<div>").addClass("node").data("tree-node",nodeCount).append($nodeContent);if ($childNodes.length > 0) {
$nodeDiv.click(function() {var $this = $(this);var $tr = $this.closest("td");if ($tr.hasClass("contracted")) {$this.css("cursor", "n-resize");$tr.removeClass("contracted").addClass("expanded");$tr.nextAll("td").css("visibility", "");$node.removeClass("collapsed");
} else {$this.css("cursor", "s-resize");$tr.removeClass("expanded").addClass("contracted");$tr.nextAll("td").css("visibility", "hidden");$node.addClass("collapsed");}});}
$nodeCell.append($nodeDiv);$nodeRow.append($nodeCell);$tbody.append($nodeRow);if ($childNodes.length > 0) {$nodeDiv.css("cursor", "n-resize");
if (depth == -1 || (level + 1 < depth)) {var $downLineCell = $("<tr/>");var $downLineRow = $("<td/>").attr("rowspan", $childNodes.length * 2);$downLineRow.append($downLineCell);$downLine = $("<div></div>").addClass("line down");$downLineCell.append($downLine);$tbody.append($downLineRow);} $tbody.append($childNodesRow);}
if ($node.attr("class") != undefined) {var classList = $node.attr("class").split(/\s+/);$.each(classList, function(index, item) {if (item == "collapsed") {console.log($node);$nodeRow.nextAll("td").css("visibility", "hidden");$nodeRow.removeClass("expanded");
$nodeRow.addClass("contracted");$nodeDiv.css("cursor", "s-resize");} else {$nodeDiv.addClass(item);}});}
$table.append($tbody);$appendTo.append($table);$nodeDiv.children("a").click(function(e) {console.log(e);e.stopPropagation();});};
