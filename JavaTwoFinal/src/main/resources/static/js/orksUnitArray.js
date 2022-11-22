

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
    const select = document.getElementById("unitDisplayer");
    //Do you like FOR LOOOOOPS?

    //reads the array
    for (const [index,a] of orkHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHQ";
        opt.value = orkHQ[index];
        opt.innerText = orkHQ[index];
        select.appendChild(opt);

    }
    for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTroops";
        opt.value = orkTroops[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "theControllerVariableForElites";
        opt.value = orkElites[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFastAttk";
        opt.value = orkFastAttack[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForHeavy";
        opt.value = orkHeavySupport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableforLordOfWar";
        opt.value = orkLordOfWar[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForTransport";
        opt.value = orkTransport[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFlyer";
        opt.value = orkFlyer[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }
    for (const [index,a] of orkFortification.entries()){
        const opt = document.createElement('option');
        opt.id = "theControllerVariableForFort";
        opt.value = orkFortification[index];
        opt.innerHTML = a;
        select.appendChild(opt);
    }

}

