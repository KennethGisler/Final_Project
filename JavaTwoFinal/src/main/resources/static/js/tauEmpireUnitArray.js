const tauHQ=[
	["Aun'Shi",5],
	["Aun'Va",4],
    ["Cadre Fireblade", 3],
    ["Commander in Coldstar Battlesuit",7],
    ["Commander in Crisis Battlesuit",7],
    ["Commander in Enforcer Battlesuit",8],
    ["Commander Farsight", 7],
    ["Commander Shadowsun",8],
    ["Darkstrider", 3],
    ["Ethereal",3],
    ["Kroot Shaper",2],
    ["Longstrike",9],
    ["None",0]
];
const tauTroops = [
    ["Breacher Team",5],
    ["Kroot Carnivores",3],
    ["Strike Team", 4],
    ["None",0]
];

const tauElites = [
    ["Crisis Battlesuits",9],
    ["Crisis Boddyguards",6],
    ["Firesight Marksman",3],
    ["Ghostkeel Battlesuit",9],
    ["Krootox Riders",2],
    ["Stealth Battlesuits",2],
    ["Tactical Drones",2],
    ["None",0]
];

const tauFastAttack = [
["Kroot Hounds",1],
["Pathfinder Team",5],
["Piranhas",4],
["Vespid Stingwings",3],
["None",0]
];

const tauHeavySupport = [
["Broadside Battlesuits",5],
["Hammerhead Gunship",8],
["Riptide Battlesuit",13],
["Sky Ray Gunship",7],
["None",0]
];

const tauLordOfWar = [
    ["Stormsurge",17],
    ["None",0]
];


const tauTransport = [
    ["Devil Fish",6],
    ["None",0]
];


const tauFlyer = [
    ["Razorshark Strike Figher", 8],
    ["Sun Shark Bomber",9],
	["None",0]
];

function fillTau(){
    //this selects the <select id = "unitDisplayer">
    //HQ
    const hq = document.getElementById("hq1");
    const hq2 = document.getElementById("hq2");
    const hq3 = document.getElementById("hq3");
    //Troops
    const troops = document.getElementById("troops1");
    const troops2 = document.getElementById("troops2");
    const troops3 = document.getElementById("troops3");
    const troops4 = document.getElementById("troops4");
    const troops5 = document.getElementById("troops5");
    const troops6 = document.getElementById("troops6");
    //Elites
    const elites = document.getElementById("elites1");
    const elites2 = document.getElementById("elites2");
    const elites3 = document.getElementById("elites3");
    const elites4 = document.getElementById("elites4");
    const elites5 = document.getElementById("elites5");
    const elites6 = document.getElementById("elites6");
    //FastAttack
    const fastattack = document.getElementById("fastattack1");
    const fastattack2 = document.getElementById("fastattack2");
    const fastattack3 = document.getElementById("fastattack3");
    //Heavy Support
    const heavysupport = document.getElementById("heavysupport1");
    const heavysupport2 = document.getElementById("heavysupport2");
    const heavysupport3 = document.getElementById("heavysupport3");
    //LoW
    const lordofwar = document.getElementById("lordofwar1");
    const lordofwar2 = document.getElementById("lordofwar2");
    const lordofwar3 = document.getElementById("lordofwar3");
    const lordofwar4 = document.getElementById("lordofwar4");
    const lordofwar5 = document.getElementById("lordofwar5");
    //Transport
    const transport = document.getElementById("transport1");
    const transport2 = document.getElementById("transport2");
    const transport3 = document.getElementById("transport3");
    const transport4 = document.getElementById("transport4");
    const transport5 = document.getElementById("transport5");
    const transport6 = document.getElementById("transport6");
    //Flyer
    const flyer = document.getElementById("flyer1");
    const flyer2 = document.getElementById("flyer2");

    //Do you like FOR LOOOOOPS?

    //reads the array
    /*1*/for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = tauHQ[index];
        hq.appendChild(opt);

    }
       /*2*/for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = tauHQ[index];
        hq2.appendChild(opt);

    }
       /*3*/for (const [index,a] of tauHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = tauHQ[index];
        hq3.appendChild(opt);

    }
    //Troops
    /*1*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops.appendChild(opt);
    }
    /*2*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops2.appendChild(opt);
        }
    /*3*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops3.appendChild(opt);
            }
    /*4*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops4.appendChild(opt);
    }
    /*5*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops5.appendChild(opt);
        }
    /*6*/for (const [index,a] of tauTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops6.appendChild(opt);
            }
    //Elite
    /*1*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites.appendChild(opt);
    }
    /*2*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites2.appendChild(opt);
    }
    /*3*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites3.appendChild(opt);
    }
    /*4*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites4.appendChild(opt);
    }
    /*5*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites5.appendChild(opt);
    }
    /*6*/for (const [index,a] of tauElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites6.appendChild(opt);
    }
    //Fast Attack
    /*1*/for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack.appendChild(opt);
    }
    /*2*/for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack2.appendChild(opt);
    }
    /*3*/for (const [index,a] of tauFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack3.appendChild(opt);
    }
    //Heavy
    /*1*/for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport.appendChild(opt);
    }
    /*2*/for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport2.appendChild(opt);
    }
    /*3*/for (const [index,a] of tauHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport3.appendChild(opt);
    }
    //Lord of War
   /*1*/ for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar.appendChild(opt);
    }
       /*2*/ for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar2.appendChild(opt);
    }
       /*3*/ for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar3.appendChild(opt);
    }
       /*4*/ for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar4.appendChild(opt);
    }
       /*5*/ for (const [index,a] of tauLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar5.appendChild(opt);
    }
    //Transport
   /*1*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport.appendChild(opt);
    }
    /*2*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport2.appendChild(opt);
    }
    /*3*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport3.appendChild(opt);
    }
    /*4*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport4.appendChild(opt);
    }
    /*5*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport5.appendChild(opt);
    }
    /*6*/ for (const [index,a] of tauTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport6.appendChild(opt);
    }
    //Flyer
   /*1*/ for (const [index,a] of tauFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        flyer.appendChild(opt);
    }
  /*2*/ for (const [index,a] of tauFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        flyer2.appendChild(opt);
    }
   
fillTauCost();
}

function fillTauCost(){

   //this selects the <select id = "unitDisplayer">
   //HQ
   const hq = document.getElementById("hqCost1");
   const hq2 = document.getElementById("hqCost2");
   const hq3 = document.getElementById("hqCost3");
   //Troops
   const troops1 = document.getElementById("tCost1");
   const troops2 = document.getElementById("tCost2");
   const troops3 = document.getElementById("tCost3");
   const troops4 = document.getElementById("tCost4");
   const troops5 = document.getElementById("tCost5");
   const troops6 = document.getElementById("tCost6");
  //elites 
   const elites1 = document.getElementById("eCost1");
   const elites2 = document.getElementById("eCost2");
   const elites3 = document.getElementById("eCost3");
   const elites4 = document.getElementById("eCost4");
   const elites5 = document.getElementById("eCost5");
   const elites6 = document.getElementById("eCost6");
   //fastattack
   const fastattack1 = document.getElementById("faCost1");
   const fastattack2 = document.getElementById("faCost2");
   const fastattack3 = document.getElementById("faCost3");
   //heavysup
   const heavysupport1 = document.getElementById("hsCost1");
   const heavysupport2 = document.getElementById("hsCost2");
   const heavysupport3 = document.getElementById("hsCost3");
   //lordofwar
   const lordofwar1 = document.getElementById("lowCost1");
   const lordofwar2 = document.getElementById("lowCost2");
   const lordofwar3 = document.getElementById("lowCost3");
   const lordofwar4 = document.getElementById("lowCost4");
   const lordofwar5 = document.getElementById("lowCost5");
   //dedtrans
   const transport1 = document.getElementById("dtCost1");
   const transport2 = document.getElementById("dtCost2");
   const transport3 = document.getElementById("dtCost3");
   const transport4 = document.getElementById("dtCost4");
   const transport5 = document.getElementById("dtCost5");
   const transport6 = document.getElementById("dtCost6");
   
    //flyer
   const flyer = document.getElementById("flCost1");
   const flyer2 = document.getElementById("flCost1");
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


/*2*/ for (const [index,a] of tauHQ.entries()){
    const opt = document.createElement('option');
    opt.id = "hq";
    opt.value = tauHQ[index][1];
    opt.innerText = tauHQ[index][1];
    hq2.appendChild(opt);


}
document.getElementById('hq2').addEventListener("change", function () {
 document.getElementById('hqCost2').selectedIndex = document.getElementById('hq2').selectedIndex;
}, false);

/*3*/for (const [index,a] of tauHQ.entries()){
    const opt = document.createElement('option');
    opt.id = "hq";
    opt.value = tauHQ[index][1];
    opt.innerText = tauHQ[index][1];
    hq3.appendChild(opt);

}

document.getElementById('hq3').addEventListener("change", function () {
 document.getElementById('hqCost3').selectedIndex = document.getElementById('hq3').selectedIndex;
}, false);

//TROOPS
for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops1.appendChild(opt);
}
document.getElementById('troops1').addEventListener("change", function () {
    document.getElementById('tCost1').selectedIndex = document.getElementById('troops1').selectedIndex;
}, false);
/*2*/for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops2.appendChild(opt);
}
document.getElementById('troops2').addEventListener("change", function () {
    document.getElementById('tCost2').selectedIndex = document.getElementById('troops2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops3.appendChild(opt);
}
document.getElementById('troops3').addEventListener("change", function () {
    document.getElementById('tCost3').selectedIndex = document.getElementById('troops3').selectedIndex;
}, false);
/*4*/for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops4.appendChild(opt);
}
document.getElementById('troops4').addEventListener("change", function () {
    document.getElementById('tCost4').selectedIndex = document.getElementById('troops4').selectedIndex;
}, false);
/*5*/for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops5.appendChild(opt);
}
document.getElementById('troops5').addEventListener("change", function () {
    document.getElementById('tCost5').selectedIndex = document.getElementById('troops5').selectedIndex;
}, false);
/*6*/for (const [index,a] of tauTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = tauTroops[index][1];
    opt.innerText = tauTroops[index][1];
    troops6.appendChild(opt);
}
document.getElementById('troops6').addEventListener("change", function () {
    document.getElementById('tCost6').selectedIndex = document.getElementById('troops6').selectedIndex;
}, false);

//ELITES
/*1*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites1.appendChild(opt);
}
document.getElementById('elites1').addEventListener("change", function () {
    document.getElementById('eCost1').selectedIndex = document.getElementById('elites1').selectedIndex;
}, false);

/*2*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites2.appendChild(opt);
}
document.getElementById('elites2').addEventListener("change", function () {
    document.getElementById('eCost2').selectedIndex = document.getElementById('elites2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites3.appendChild(opt);
}
document.getElementById('elites3').addEventListener("change", function () {
    document.getElementById('eCost3').selectedIndex = document.getElementById('elites3').selectedIndex;
}, false);
/*4*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites4.appendChild(opt);
}
document.getElementById('elites4').addEventListener("change", function () {
    document.getElementById('eCost4').selectedIndex = document.getElementById('elites4').selectedIndex;
}, false);
/*5*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites5.appendChild(opt);
}
document.getElementById('elites5').addEventListener("change", function () {
    document.getElementById('eCost5').selectedIndex = document.getElementById('elites5').selectedIndex;
}, false);
/*6*/for (const [index,a] of tauElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = tauElites[index][1];
    opt.innerText = tauElites[index][1];
    elites6.appendChild(opt);
}
document.getElementById('elites6').addEventListener("change", function () {
    document.getElementById('eCost6').selectedIndex = document.getElementById('elites6').selectedIndex;
}, false);
//FA
/*1*/for (const [index,a] of tauFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = tauFastAttack[index][1];
    opt.innerText = tauFastAttack[index][1];
    fastattack1.appendChild(opt);
}
document.getElementById('fastattack1').addEventListener("change", function () {
    document.getElementById('faCost1').selectedIndex = document.getElementById('fastattack1').selectedIndex;
}, false);
/*2*/for (const [index,a] of tauFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = tauFastAttack[index][1];
    opt.innerText = tauFastAttack[index][1];
    fastattack2.appendChild(opt);
}
document.getElementById('fastattack2').addEventListener("change", function () {
    document.getElementById('faCost2').selectedIndex = document.getElementById('fastattack2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = tauFastAttack[index][1];
    opt.innerText = tauFastAttack[index][1];
    fastattack3.appendChild(opt);
}
document.getElementById('fastattack3').addEventListener("change", function () {
    document.getElementById('faCost3').selectedIndex = document.getElementById('fastattack3').selectedIndex;
}, false);
//HS
/*1*/for (const [index,a] of tauHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = tauHeavySupport[index][1];
    opt.innerText = tauHeavySupport[index][1];
    heavysupport1.appendChild(opt);
}
document.getElementById('heavysupport1').addEventListener("change", function () {
    document.getElementById('hsCost1').selectedIndex = document.getElementById('heavysupport1').selectedIndex;
}, false);
/*2*/for (const [index,a] of tauHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = tauHeavySupport[index][1];
    opt.innerText = tauHeavySupport[index][1];
    heavysupport2.appendChild(opt);
}
document.getElementById('heavysupport2').addEventListener("change", function () {
    document.getElementById('hsCost2').selectedIndex = document.getElementById('heavysupport2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = tauHeavySupport[index][1];
    opt.innerText = tauHeavySupport[index][1];
    heavysupport3.appendChild(opt);
}
document.getElementById('heavysupport3').addEventListener("change", function () {
    document.getElementById('hsCost3').selectedIndex = document.getElementById('heavysupport3').selectedIndex;
}, false);
//LoW
/*1*/for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar1.appendChild(opt);
}
document.getElementById('lordofwar1').addEventListener("change", function () {
    document.getElementById('lowCost1').selectedIndex = document.getElementById('lordofwar1').selectedIndex;
}, false);
/*2*/for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar2.appendChild(opt);
}
document.getElementById('lordofwar2').addEventListener("change", function () {
    document.getElementById('lowCost2').selectedIndex = document.getElementById('lordofwar2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar3.appendChild(opt);
}
document.getElementById('lordofwar3').addEventListener("change", function () {
    document.getElementById('lowCost3').selectedIndex = document.getElementById('lordofwar3').selectedIndex;
}, false);
/*4*/for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar4.appendChild(opt);
}
document.getElementById('lordofwar4').addEventListener("change", function () {
    document.getElementById('lowCost4').selectedIndex = document.getElementById('lordofwar4').selectedIndex;
}, false);
/*5*/for (const [index,a] of tauLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = tauLordOfWar[index][1];
    opt.innerText = tauLordOfWar[index][1];
    lordofwar5.appendChild(opt);
}
document.getElementById('lordofwar5').addEventListener("change", function () {
    document.getElementById('lowCost5').selectedIndex = document.getElementById('lordofwar5').selectedIndex;
}, false);

//Transport
/*1*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport1.appendChild(opt);
}
document.getElementById('transport1').addEventListener("change", function () {
    document.getElementById('dtCost1').selectedIndex = document.getElementById('transport1').selectedIndex;
}, false);
/*2*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport2.appendChild(opt);
}
document.getElementById('transport2').addEventListener("change", function () {
    document.getElementById('dtCost2').selectedIndex = document.getElementById('transport2').selectedIndex;
}, false);
/*3*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport3.appendChild(opt);
}
document.getElementById('transport3').addEventListener("change", function () {
    document.getElementById('dtCost3').selectedIndex = document.getElementById('transport3').selectedIndex;
}, false);
/*4*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport4.appendChild(opt);
}
document.getElementById('transport4').addEventListener("change", function () {
    document.getElementById('dtCost4').selectedIndex = document.getElementById('transport4').selectedIndex;
}, false);
/*5*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport5.appendChild(opt);
}
document.getElementById('transport5').addEventListener("change", function () {
    document.getElementById('dtCost5').selectedIndex = document.getElementById('transport5').selectedIndex;
}, false);
/*6*/for (const [index,a] of tauTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = tauTransport[index][1];
    opt.innerText = tauTransport[index][1];
    transport6.appendChild(opt);
}
document.getElementById('transport6').addEventListener("change", function () {
    document.getElementById('dtCost6').selectedIndex = document.getElementById('transport6').selectedIndex;
}, false);

//Flyer
/*1*/for (const [index,a] of tauFlyer.entries()){
    const opt = document.createElement('option');
    opt.id = "flyer";
    opt.value = tauFlyer[index][1];
    opt.innerText = tauFlyer[index][1];
    flyer.appendChild(opt);
}
document.getElementById('flyer1').addEventListener("change", function () {
    document.getElementById('flCost1').selectedIndex = document.getElementById('flyer1').selectedIndex;
}, false);

/*2*/for (const [index,a] of tauFlyer.entries()){
    const opt = document.createElement('option');
    opt.id = "flyer";
    opt.value = tauFlyer[index][1];
    opt.innerText = tauFlyer[index][1];
    flyer2.appendChild(opt);
}
document.getElementById('flyer2').addEventListener("change", function () {
    document.getElementById('flCost2').selectedIndex = document.getElementById('flyer2').selectedIndex;
}, false);

}