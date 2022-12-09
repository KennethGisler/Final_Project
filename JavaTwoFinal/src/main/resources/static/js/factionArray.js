//Array For Faction values
const factions = ["Choose a Faction","Tau Empire","Orks","Astram Militarm"];
const factionValue = ["none","Tau", "Orks", "Astram"]

const unitAmt = ["1","2","3","2","3","2","3","2","3","2","3"]

const myUnitList =[];
const myUnitCost =[];
const myCostTotal=[];

//This loads the factions up.
function loadFactions(){
for(var x=0; x<factions.length;x++){
    document.write("<option id="+"factionName"+" name="+"factionName" + " value=" + factionValue[x]+">" + factions[x]+"</options>");
}
}

function chooseUnitsToList(){

//checks the faction value
var factionValue = document.getElementById("factionName").value;

//if a faction is selected
if(factionValue === "Tau" || factionValue === "Orks" || factionValue === "Astram"){
//Creates the <select id=unitDisplayer></select>

document.getElementById("HQBox").innerHTML = 
//HQ SELECT
"HQ: <td><select id ="+"hq1 "+"name="+"hq.hq1"+"></select> "+
"  <select id ="+"hqCost1 "+"name="+"hq.hqCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"hq2 "+"name="+"hq.hq2"+"></select> "+
"  <select id ="+"hqCost2 "+"name="+"hq.hqCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"hq3 "+"name="+"hq.hq3"+"></select> "+
"  <select id ="+"hqCost3 "+"name="+"hq.hqCost3"+" hidden></select></td></br>";
document.getElementById("TroopBox").innerHTML = 
//TROOP SELECT
"Troops: <td><select id ="+"troops1 "+"name="+"troops.troop1"+"></select>"+
"  <select id ="+"tCost1 "+"name="+"troops.tCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"troops2 "+"name="+"troops.troop2"+"></select>"+
"  <select id ="+"tCost2 "+"name="+"troops.tCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"troops3 "+"name="+"troops.troop3"+"></select>"+
"  <select id ="+"tCost3 "+"name="+"troops.tCost3"+" hidden></select></td>"+
/*4*/"<td><select id ="+"troops4 "+"name="+"troops.troop4"+"></select>"+
"  <select id ="+"tCost4 "+"name="+"troops.tCost4"+" hidden></select></td>"+
/*5*/"<td><select id ="+"troops5 "+"name="+"troops.troop5"+"></select>"+
"  <select id ="+"tCost5 "+"name="+"troops.tCost5"+" hidden></select></td>"+
/*6*/"<td><select id ="+"troops6 "+"name="+"troops.troop6"+"></select>"+
"  <select id ="+"tCost6 "+"name="+"troops.tCost6"+" hidden></select></td></br>";
document.getElementById("EliteBox").innerHTML = 
//ELITE SELECT
"Elites: <td><select id ="+"elites1 "+"name="+"e.elite1"+"></select>"+
"  <select id ="+"eCost1 "+"name="+"e.eCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"elites2 "+"name="+"e.elite2"+"></select>"+
"  <select id ="+"eCost2 "+"name="+"e.eCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"elites3 "+"name="+"e.elite3"+"></select>"+
"  <select id ="+"eCost3 "+"name="+"e.eCost3"+" hidden></select></td>"+
/*4*/"<td><select id ="+"elites4 "+"name="+"e.elite4"+"></select>"+
"  <select id ="+"eCost4 "+"name="+"e.eCost4"+" hidden></select></td>"+
/*5*/"<td><select id ="+"elites5 "+"name="+"e.elite5"+"></select>"+
"  <select id ="+"eCost5 "+"name="+"e.eCost5"+" hidden></select></td>"+
/*6*/"<td><select id ="+"elites6 "+"name="+"e.elite6"+"></select>"+
"  <select id ="+"eCost6 "+"name="+"e.eCost6"+" hidden></select></td></br>";
document.getElementById("FastBox").innerHTML = 
//FAST ATTACK
/*1*/"Fast Attack: <td><select id ="+"fastattack1 "+"name="+"fa.fa1"+"></select>"+
"  <select id ="+"faCost1 "+"name="+"fa.faCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"fastattack2 "+"name="+"fa.fa2"+"></select>"+
"  <select id ="+"faCost2 "+"name="+"fa.faCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"fastattack3 "+"name="+"fa.fa3"+"></select>"+
"  <select id ="+"faCost3 "+"name="+"fa.faCost3"+" hidden></select></td></br>";
document.getElementById("HeavyBox").innerHTML = 
//HEAVY
/*1*/"Heavy Support: <td><select id ="+"heavysupport1 "+"name="+"hs.hs1"+"></select>"+
"  <select id ="+"hsCost1 "+"name="+"hs.hsCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"heavysupport2 "+"name="+"hs.hs2"+"></select>"+
"  <select id ="+"hsCost2 "+"name="+"hs.hsCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"heavysupport3 "+"name="+"hs.hs3"+"></select>"+
"  <select id ="+"hsCost3 "+"name="+"hs.hsCost3"+" hidden></select></td></br>";
document.getElementById("LowBox").innerHTML = 
//LoW
/*1*/"Lord of War: <td><select id ="+"lordofwar1 "+"name="+"low.low1"+"></select>"+
"  <select id ="+"lowCost1 "+"name="+"low.lowCost1"+" hidden></td></select>"+
/*2*/"<td><select id ="+"lordofwar2 "+"name="+"low.low2"+"></select>"+
"  <select id ="+"lowCost2 "+"name="+"low.lowCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"lordofwar3 "+"name="+"low.low3"+"></select>"+
"  <select id ="+"lowCost3 "+"name="+"low.lowCost3"+" hidden></select></td>"+
/*4*/"<td><select id ="+"lordofwar4 "+"name="+"low.low4"+"></select>"+
"  <select id ="+"lowCost4 "+"name="+"low.lowCost4"+" hidden></select></td>"+
/*5*/"<td><select id ="+"lordofwar5 "+"name="+"low.low5"+"></select>"+
"  <select id ="+"lowCost5 "+"name="+"low.lowCost5"+" hidden></select></td></br>";
document.getElementById("TransportBox").innerHTML = 
//Transport
/*1*/"Select Transport:<td><select id ="+"transport1 "+"name="+"dt.dt1"+"></select>"+
"  <select id ="+"dtCost1 "+"name="+"dt.tdCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"transport2 "+"name="+"dt.dt2"+"></select>"+
"  <select id ="+"dtCost2 "+"name="+"dt.tdCost2"+" hidden></select></td>"+
/*3*/"<td><select id ="+"transport3 "+"name="+"dt.dt3"+"></select>"+
"  <select id ="+"dtCost3 "+"name="+"dt.tdCost3"+" hidden></select></td>"+
/*4*/"<td><select id ="+"transport4 "+"name="+"dt.dt4"+"></select>"+
"  <select id ="+"dtCost4 "+"name="+"dt.tdCost4"+" hidden></select></td>"+
/*5*/"<td><select id ="+"transport5 "+"name="+"dt.dt5"+"></select>"+
"  <select id ="+"dtCost5 "+"name="+"dt.tdCost5"+" hidden></select></td>"+
/*6*/"<td><select id ="+"transport6 "+"name="+"dt.dt6"+"></select>"+
"  <select id ="+"dtCost6 "+"name="+"dt.tdCost6"+" hidden></select></td></br>";
document.getElementById("flyerBox").innerHTML = 
//Flyer
/*1*/"Flyer: <td><select id ="+"flyer1 "+"name="+"fl.flyer1"+"></select>"+
"  <select id ="+"flCost1 "+"name="+"fl.flCost1"+" hidden></select></td>"+
/*2*/"<td><select id ="+"flyer2 "+"name="+"fl.flyer2"+"></select>"+
"  <select id ="+"flCost2 "+"name="+"fl.flCost2"+" hidden></select></td>";
//Fort -- Disabled because error
/*1"Select fortification: <select id ="+"fortification1 "+"name="+"ft.ft1"+"></select>"+
"  <select id ="+"ftCost1 "+"name="+"ft.ftCost1"+" hidden></select>"+
/*2"<select id ="+"fortification2 "+"name="+"ft.ft2"+"></select>"+
"  <select id ="+"ftCost2 "+"name="+"ft.ftCost2"+" hidden></select>>"+
/*3"<select id ="+"fortification3 "+"name="+"ft.ft3"+"></select>"+
"  <select id ="+"ftCost3 "+"name="+"ft.ftCost3"+" hidden></select></br></br>"
;*/
//Also erases error if proper option is selected
document.getElementById("error").innerHTML = "";
//Now we populate id unitDisplayer with a new function
populateFactionUnitList();
} else {
//returns error
document.getElementById("error").innerHTML ="<h1>Pick a Faction</h1>"
//gets rid of <select>
document.getElementById("unitBox").innerHTML="";
}

}
//This is the one that will check which faction you have and pull up a method to each individual faction unit list. Add more factions by filling out if statements and making a new "fillXXX()".
function populateFactionUnitList(){

//checks the faction value
var factionValue = document.getElementById("factionName").value;
if (factionValue==="Tau"){
fillTau();
} if(factionValue==="Astram"){
fillAsm();
} if(factionValue==="Orks"){
fillOrk();
}
}

//Changes our secret box that contains the value of the unit. This is sample code. Check the unit arrays for how it's used.
/*function changeBoxAtSameTime(){
document.getElementById('hq').addEventListener("change", function () {
document.getElementById('hqCost').selectedIndex = document.getElementById('hq').selectedIndex;
}, false);
}*/
