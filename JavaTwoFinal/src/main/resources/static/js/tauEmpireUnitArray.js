

const tauHQ = ["Cadre Fireblade : Cost- 3", "Commander Farsight : Cost- 7", "Darkstrider : Cost- 3"];

const tauTroops = ["Breacher Team : Cost- 5", "Kroot Carnivores : Cost- 3", "Strike Team : Cost- 4"];

const tauElites = ["Kroot Shaper : Cost- 2","Krootox Riders : Cost- 2", "Stealth Battlesuits : Cost- 4"];

const tauFastAttack = ["Kroot Hounds : Cost- 1", "Pathfinder Team : Cost- 5", "Piranhas : Cost- 4"];

const tauHeavySupport = ["Broadside Battlesuits : Cost- 5","Hammerhead Gunship : Cost- 8","Riptide Battlesuit  Cost-13"];

const tauLordOfWar = ["Stormsurge  : Cost-17"];


const tauTransport = ["Devil Fish : Cost- 6"];


const tauFlyer = ["Razorshark Strike Fighter : Cost- 8", "Sun Shark Bomber : Cost- 9"];


const tauFortification = ["Tidewell Droneport : Cost- 6", "Tidewall Gunrig : Cost- 4", "Tidewall Shieldline : Cost- 7"];



function fillTau(){
    //this selects the <select id = "unitDisplayer">
    const select = document.getElementById("unitDisplayer");
    //Do you like FOR LOOOOOPS?

    //reads the array
    for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHQ";
        opt.value = tauHQ[index];
        opt.innerText = tauHQ[index];
        select.appendChild(opt);

    }
    for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTroops";
        opt.value = tauTroops[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "theControllerVariableForElites";
        opt.value = tauElites[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFastAttk";
        opt.value = tauFastAttack[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHeavy";
        opt.value = tauHeavySupport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableforLordOfWar";
        opt.value = tauLordOfWar[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTransport";
        opt.value = tauTransport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFlyer";
        opt.value = tauFlyer[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of tauFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFort";
        opt.value = tauFortification[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }

}

