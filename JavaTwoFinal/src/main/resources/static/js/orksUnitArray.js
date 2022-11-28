

const orkHQ = ["Beastboss on Squigosaur : Cost- 8", "Beastboss : Cost- 5", "Big Mek in Mega Armour : Cost- 3"];

const orkTroops = ["Beast Snagga Boyz : Cost- 5", "Boyz : Cost- 5", "Gretchin : Cost- 2"];

const orkElites = ["Burna Boyz : Cost- 3","Kommandos : Cost- 4", "Mad Dok Grotsnik  : Cost- 5"];

const orkFastAttack = ["Boomdakka Snazzwagons : Cost- 5", "Kustom Boosta-blastas : Cost- 4", "Deffkoptas : Cost- 8"];

const orkHeavySupport = ["Bonebreaka : Cost-10","Gunwagon : Cost-10","Kill Rig  : Cost-10"];

const orkLordOfWar = ["Stompa  : Cost-34","Gorkanaut : Cost-19", "Morkanaut : Cost-19"];

const orkTransport = ["Trukk : Cost- 4"];

const orkFlyer = ["Blitza-bommer : Cost- 8", "Burna-bommer : Cost- 9"];

const orkFortification = ["Big'Ed Bossunka 5 : Cost- 5", "Mekboy Workshop : Cost- 4"];



function fillOrk(){
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
    for (const [index,a] of orkHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-9)];
        opt.innerText = orkHQ[index];
        hq.appendChild(opt);

    }
    for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        troops.appendChild(opt);
    }
    for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        elites.appendChild(opt);
    }
    for (const [index,a] of orkFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        fastattack.appendChild(opt);
    }
    for (const [index,a] of orkHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        heavysupport.appendChild(opt);
    }
    for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        lordofwar.appendChild(opt);
    }
    for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        transport.appendChild(opt);
    }
    for (const [index,a] of orkFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        flyer.appendChild(opt);
    }
    for (const [index,a] of orkFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "fortification";
        opt.value = [a.slice(0,-9)];
        opt.innerHTML = a;
        fortification.appendChild(opt);
    }

}

