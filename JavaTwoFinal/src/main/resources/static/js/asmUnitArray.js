

const asmHQ = ["Colonel 'Iron Hand' Straken : Cost- 4", "Commissar Yarrik : Cost- 6", "Company Commander : Cost- 2"];

const asmTroops = ["Conscripts : Cost- 5", "Infantry Squad : Cost- 3", "Militarum Tempestus Scion : Cost- 3"];

const asmElites = ["Astropath : Cost- 2","Bullgryns : Cost- 5", "Colour Sergeant Kell  : Cost- 3"];

const asmFastAttack = ["Armoured Sentinels : Cost- 3", "Hellhounds : Cost- 6", "Scout Sentinels : Cost- 3"];

const asmHeavySupport = ["Basilisks : Cost- 7","Deathstrike : Cost- 8","Heavy Weapons Squad  : Cost- 3"];

const asmLordOfWar = ["Baneblade  : Cost-30","Banehammer : Cost-29", "Banesword : Cost-29"];

const asmTransport = ["Chimera : Cost- 5","Taurox Prime : Cost- 7","Taurox : Cost- 5"];

const asmFlyer = ["Valkyries : Cost- 7"];

//No Fortifications
const asmFortification = [];



function fillAsm(){
    //this selects the <select id = "unitDisplayer">
    const select = document.getElementById("unitDisplayer");
    //Do you like FOR LOOOOOPS?

    //reads the array
    for (const [index,a] of asmHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHQ";
        opt.value = asmHQ[index];
        opt.innerText = asmHQ[index];
        select.appendChild(opt);

    }
    for (const [index,a] of asmTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTroops";
        opt.value = asmTroops[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "theControllerVariableForElites";
        opt.value = asmElites[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFastAttk";
        opt.value = asmFastAttack[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHeavy";
        opt.value = asmHeavySupport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableforLordOfWar";
        opt.value = asmLordOfWar[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTransport";
        opt.value = asmTransport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFlyer";
        opt.value = asmFlyer[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of asmFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFort";
        opt.value = asmFortification[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }

}

