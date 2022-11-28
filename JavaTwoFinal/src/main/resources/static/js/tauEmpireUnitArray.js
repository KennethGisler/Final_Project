const tauHQ=[
    ["Cadre Fireblade", 3],
    ["Commander Farsight", 7],
    ["Darkstrider", 3]
];
const tauTroops = [
    ["Breacher Team",5],
    ["Kroot Carnivores",3],
    ["Strike Team", 4]
];

const tauElites = [
    ["Kroot Shaper",2],
    ["Krootox Riders",2],
    ["Stealth Battlesuits",2],
    ["Test",999]
];

const tauFastAttack = [
["Kroot Hounds",1],
["Pathfinder Team",5],
["Piranhas",4],
];

const tauHeavySupport = [
["Broadside Battlesuits",5],
["Hammerhead Gunship",8],
["Riptide Battlesuit",13],
];

const tauLordOfWar = [
    ["Stormsurge",17],
    ["Test",999]
];


const tauTransport = [
    ["Devil Fish",6],
    ["Test",999]
];


const tauFlyer = [
    ["Razorshark Strike Figher", 8],
    ["Sun Shark Bomber",9]

];


const tauFortification =[
    ["Tidewell Droneport",6],
    ["Tidewall Gunrig",4],
    ["Tidewall Shieldline",7]
];


function fillTau(){
    //this selects the <select id = "unitDisplayer">
    const hq = document.getElementById("hq1");
    const troops = document.getElementById("troops1");
    const elites = document.getElementById("elites1");
    const fastattack = document.getElementById("fastattack1");
    const heavysupport = document.getElementById("heavysupport1");
    const lordofwar = document.getElementById("lordofwar1");
    const transport = document.getElementById("transport1");
    const flyer = document.getElementById("flyer1");
    const fortification = document.getElementById("fortification1");
    //Do you like FOR LOOOOOPS?

    //reads the array
    for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = tauHQ[index];
        hq.appendChild(opt);

    }
    for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops.appendChild(opt);
    }
    for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites.appendChild(opt);
    }
    for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack.appendChild(opt);
    }
    for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport.appendChild(opt);
    }
    for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar.appendChild(opt);
    }
    for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport.appendChild(opt);
    }
    for (const [index,a] of tauFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        flyer.appendChild(opt);
    }
    for (const [index,a] of tauFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "fortification";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fortification.appendChild(opt);
    }

fillTauCost();
}

function fillTauCost(){

   //this selects the <select id = "unitDisplayer">
   const hq = document.getElementById("hqCost1");
   const troops = document.getElementById("tCost1");
   const elites = document.getElementById("eCost1");
   const fastattack = document.getElementById("faCost1");
   const heavysupport = document.getElementById("hsCost1");
   const lordofwar = document.getElementById("lowCost1");
   const transport = document.getElementById("dtCost1");
  const flyer = document.getElementById("flCost1");
  const fortification = document.getElementById("ftCost1");
   //Do you like FOR LOOOOOPS?

   //HQ
   for (const [index,a] of tauHQ.entries()){
       const opt = document.createElement('option');
       opt.id = "hq";
       opt.value = tauHQ[index][1];
       opt.innerText = tauHQ[index][1];
       hq.appendChild(opt);

   }
   document.getElementById('hq1').addEventListener("change", function () {
    document.getElementById('hqCost1').selectedIndex = document.getElementById('hq1').selectedIndex;
}, false);

//TROOPS
for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops.appendChild(opt);
}
document.getElementById('troops1').addEventListener("change", function () {
    document.getElementById('tCost1').selectedIndex = document.getElementById('troops1').selectedIndex;
}, false);
//ELITES
for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites.appendChild(opt);
}
document.getElementById('elites1').addEventListener("change", function () {
    document.getElementById('eCost1').selectedIndex = document.getElementById('elites1').selectedIndex;
}, false);
//FA
for (const [index,a] of tauFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = tauFastAttack[index][1];
    opt.innerText = tauFastAttack[index][1];
    fastattack.appendChild(opt);
}
document.getElementById('fastattack1').addEventListener("change", function () {
    document.getElementById('faCost1').selectedIndex = document.getElementById('fastattack1').selectedIndex;
}, false);
//HS
for (const [index,a] of tauHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = tauHeavySupport[index][1];
    opt.innerText = tauHeavySupport[index][1];
    heavysupport.appendChild(opt);
}
document.getElementById('heavysupport1').addEventListener("change", function () {
    document.getElementById('hsCost1').selectedIndex = document.getElementById('heavysupport1').selectedIndex;
}, false);
//LoW
for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar.appendChild(opt);
}
document.getElementById('lordofwar1').addEventListener("change", function () {
    document.getElementById('lowCost1').selectedIndex = document.getElementById('lordofwar1').selectedIndex;
}, false);

for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport.appendChild(opt);
}
document.getElementById('transport1').addEventListener("change", function () {
    document.getElementById('dtCost1').selectedIndex = document.getElementById('transport1').selectedIndex;
}, false);

//Flyer
for (const [index,a] of tauFlyer.entries()){
    const opt = document.createElement('option');
    opt.id = "flyer";
    opt.value = tauFlyer[index][1];
    opt.innerText = tauFlyer[index][1];
    flyer.appendChild(opt);
}
document.getElementById('flyer1').addEventListener("change", function () {
    document.getElementById('flCost1').selectedIndex = document.getElementById('flyer1').selectedIndex;
}, false);
//Fort
for (const [index,a] of tauFortification.entries()){
    const opt = document.createElement('option');
    opt.id = "fortification";
    opt.value = tauFortification[index][1];
    opt.innerText = tauFortification[index][1];
    fortification.appendChild(opt);
}
document.getElementById('fortification1').addEventListener("change", function () {
    document.getElementById('ftCost1').selectedIndex = document.getElementById('fortification1').selectedIndex;
}, false);


}