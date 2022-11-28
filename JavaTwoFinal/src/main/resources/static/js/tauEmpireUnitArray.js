

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
    const hq = document.getElementById("hq");
    const troops = document.getElementById("troops");
    const elites = document.getElementById("elites");
    const fastattack = document.getElementById("fastattack");
    const heavysupport = document.getElementById("heavysupport");
    const lordofwar = document.getElementById("lordofwar");
    const transport = document.getElementById("transport");
    const flyer = document.getElementById("flyer");
    const fortification = document.getElementById("fortification");
    //Do you like FOR LOOOOOPS?

    //reads the array
    for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-9)];
        opt.innerText = tauHQ[index];
        hq.appendChild(opt);

    }
    for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        troops.appendChild(opt);
    }
    for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        elites.appendChild(opt);
    }
    for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        fastattack.appendChild(opt);
    }
    for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        heavysupport.appendChild(opt);
    }
    for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        lordofwar.appendChild(opt);
    }
    for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        transport.appendChild(opt);
    }
    for (const [index,a] of tauFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        flyer.appendChild(opt);
    }
    for (const [index,a] of tauFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "fortification";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        fortification.appendChild(opt);
    }

}

