

const orkHQ =[
    ["Beastboss on Squigosaur",8],
    ["Beastboss",5],
    ["Big Mek in Mega Armour",3],
    ["Big Mek with Shokk Attack Gun",4],
    ["Boss Snikrot",4],
    ["Boss Zagstruk",5],
    ["Kaptin Badrukk",5],
    ["War Boss", 2],
    ["Weirdboy",3],
    ["None",0]
]; 

const orkTroops =[
    ["Beast Snagga Boyz",5],
    ["Boyz", 5],
    ["Gretchin",2],
    ["None",0]
];


const orkElites = [    
    ["Burna Boyz",3],
    ["Kommandos", 4],
    ["Mad Dok Grotsni",5],
    ["Mek",2],
    ["Meganobz",6],
    ["Nobz",7],
    ["Nobz On Warbikes",7],
    ["Painboy",3],
    ["Runtherd",2],
    ["Tankbustas",4],
    ["None",0]
];


const orkFastAttack = [    
    ["Boomdakka Snazzwagons",5],
    ["Deffkoptas",8],
    ["Kustom Boosta-blasta", 4],
    ["Stormboyz",3],
    ["Warbikers",4],
    ["None",0]
];


const orkHeavySupport =[
	["Battlewagon",8],    
    ["Bonebreaka",10],
    ["Deff Dreads",5],
    ["Flash Gitz",7],
    ["Gunwagon", 10],
    ["Killa Kans",2],
    ["Kill Rig",10],
    ["Lootas",4],
    ["Mek Gunz",2],
    ["None",0]
];


const orkLordOfWar = [    
    ["Stompa",34],
    ["Gorkanaut", 19],
    ["Morkanaut",19],
    ["None",0]
];

const orkTransport = [    
    ["Trukk",4],
    ["None",0]
];

const orkFlyer = [    
    ["Blitza-bommer ",8],
    ["Burna-bommer", 9],
    ["Dakkajet",7],
    ["Wazbom Blastajet",8],
    ["None",0]
];

function fillOrk(){
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
    /*1*/for (const [index,a] of orkHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = orkHQ[index];
        hq.appendChild(opt);

    }
       /*2*/for (const [index,a] of orkHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = orkHQ[index];
        hq2.appendChild(opt);

    }
       /*3*/for (const [index,a] of orkHQ.entries()){
        const opt = document.createElement('option');
        opt.id = "hq";
        opt.value = [a.slice(0,-1)];
        opt.innerText = orkHQ[index];
        hq3.appendChild(opt);

    }
    //Troops
    /*1*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops.appendChild(opt);
    }
    /*2*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops2.appendChild(opt);
        }
    /*3*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops3.appendChild(opt);
            }
    /*4*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops4.appendChild(opt);
    }
    /*5*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops5.appendChild(opt);
        }
    /*6*/for (const [index,a] of orkTroops.entries()){
        const opt = document.createElement('option');
        opt.id = "troops";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        troops6.appendChild(opt);
            }
    //Elite
    /*1*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites.appendChild(opt);
    }
    /*2*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites2.appendChild(opt);
    }
    /*3*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites3.appendChild(opt);
    }
    /*4*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites4.appendChild(opt);
    }
    /*5*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites5.appendChild(opt);
    }
    /*6*/for (const [index,a] of orkElites.entries()){
        const opt = document.createElement
        ('option');
        opt.id = "elite";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        elites6.appendChild(opt);
    }
    //Fast Attack
    /*1*/for (const [index,a] of orkFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack.appendChild(opt);
    }
    /*2*/for (const [index,a] of orkFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack2.appendChild(opt);
    }
    /*3*/for (const [index,a] of orkFastAttack.entries()){
        const opt = document.createElement('option');
        opt.id = "fastattack";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        fastattack3.appendChild(opt);
    }
    //Heavy
    /*1*/for (const [index,a] of orkHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport.appendChild(opt);
    }
    /*2*/for (const [index,a] of orkHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport2.appendChild(opt);
    }
    /*3*/for (const [index,a] of orkHeavySupport.entries()){
        const opt = document.createElement('option');
        opt.id = "heavysupport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        heavysupport3.appendChild(opt);
    }
    //Lord of War
   /*1*/ for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar.appendChild(opt);
    }
       /*2*/ for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar2.appendChild(opt);
    }
       /*3*/ for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar3.appendChild(opt);
    }
       /*4*/ for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar4.appendChild(opt);
    }
       /*5*/ for (const [index,a] of orkLordOfWar.entries()){
        const opt = document.createElement('option');
        opt.id = "lordofwar";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        lordofwar5.appendChild(opt);
    }
    //Transport
   /*1*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport.appendChild(opt);
    }
    /*2*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport2.appendChild(opt);
    }
    /*3*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport3.appendChild(opt);
    }
    /*4*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport4.appendChild(opt);
    }
    /*5*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport5.appendChild(opt);
    }
    /*6*/ for (const [index,a] of orkTransport.entries()){
        const opt = document.createElement('option');
        opt.id = "transport";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        transport6.appendChild(opt);
    }
    //Flyer
   /*1*/ for (const [index,a] of orkFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        flyer.appendChild(opt);
    }
       /*2*/ for (const [index,a] of orkFlyer.entries()){
        const opt = document.createElement('option');
        opt.id = "flyer";
        opt.value = [a.slice(0,-1)];
        opt.innerHTML = a;
        flyer2.appendChild(opt);
    }

fillorkCost();
}

function fillorkCost(){

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
   const flyer2 = document.getElementById("flCost2");


   //HQ
   for (const [index,a] of orkHQ.entries()){
       const opt = document.createElement('option');
       opt.id = "hq";
       opt.value = orkHQ[index][1];
       opt.innerText = orkHQ[index][1];
       hq.appendChild(opt);

   }
   document.getElementById('hq1').addEventListener("change", function () {
    document.getElementById('hqCost1').selectedIndex = document.getElementById('hq1').selectedIndex;
}, false);


/*2*/ for (const [index,a] of orkHQ.entries()){
    const opt = document.createElement('option');
    opt.id = "hq";
    opt.value = orkHQ[index][1];
    opt.innerText = orkHQ[index][1];
    hq2.appendChild(opt);


}
document.getElementById('hq2').addEventListener("change", function () {
 document.getElementById('hqCost2').selectedIndex = document.getElementById('hq2').selectedIndex;
}, false);

/*3*/for (const [index,a] of orkHQ.entries()){
    const opt = document.createElement('option');
    opt.id = "hq";
    opt.value = orkHQ[index][1];
    opt.innerText = orkHQ[index][1];
    hq3.appendChild(opt);

}

document.getElementById('hq3').addEventListener("change", function () {
 document.getElementById('hqCost3').selectedIndex = document.getElementById('hq3').selectedIndex;
}, false);

//TROOPS
for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops1.appendChild(opt);
}
document.getElementById('troops1').addEventListener("change", function () {
    document.getElementById('tCost1').selectedIndex = document.getElementById('troops1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops2.appendChild(opt);
}
document.getElementById('troops2').addEventListener("change", function () {
    document.getElementById('tCost2').selectedIndex = document.getElementById('troops2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops3.appendChild(opt);
}
document.getElementById('troops3').addEventListener("change", function () {
    document.getElementById('tCost3').selectedIndex = document.getElementById('troops3').selectedIndex;
}, false);
/*4*/for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops4.appendChild(opt);
}
document.getElementById('troops4').addEventListener("change", function () {
    document.getElementById('tCost4').selectedIndex = document.getElementById('troops4').selectedIndex;
}, false);
/*5*/for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops5.appendChild(opt);
}
document.getElementById('troops5').addEventListener("change", function () {
    document.getElementById('tCost5').selectedIndex = document.getElementById('troops5').selectedIndex;
}, false);
/*6*/for (const [index,a] of orkTroops.entries()){
    const opt = document.createElement('option');
    opt.id = "troops";
    opt.value = orkTroops[index][1];
    opt.innerText = orkTroops[index][1];
    troops6.appendChild(opt);
}
document.getElementById('troops6').addEventListener("change", function () {
    document.getElementById('tCost6').selectedIndex = document.getElementById('troops6').selectedIndex;
}, false);

//ELITES
/*1*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites1.appendChild(opt);
}
document.getElementById('elites1').addEventListener("change", function () {
    document.getElementById('eCost1').selectedIndex = document.getElementById('elites1').selectedIndex;
}, false);

/*2*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites2.appendChild(opt);
}
document.getElementById('elites2').addEventListener("change", function () {
    document.getElementById('eCost2').selectedIndex = document.getElementById('elites2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites3.appendChild(opt);
}
document.getElementById('elites3').addEventListener("change", function () {
    document.getElementById('eCost3').selectedIndex = document.getElementById('elites3').selectedIndex;
}, false);
/*4*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites4.appendChild(opt);
}
document.getElementById('elites4').addEventListener("change", function () {
    document.getElementById('eCost4').selectedIndex = document.getElementById('elites4').selectedIndex;
}, false);
/*5*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites5.appendChild(opt);
}
document.getElementById('elites5').addEventListener("change", function () {
    document.getElementById('eCost5').selectedIndex = document.getElementById('elites5').selectedIndex;
}, false);
/*6*/for (const [index,a] of orkElites.entries()){
    const opt = document.createElement
    ('option');
    opt.id = "elite";
    opt.value = orkElites[index][1];
    opt.innerText = orkElites[index][1];
    elites6.appendChild(opt);
}
document.getElementById('elites6').addEventListener("change", function () {
    document.getElementById('eCost6').selectedIndex = document.getElementById('elites6').selectedIndex;
}, false);
//FA
/*1*/for (const [index,a] of orkFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = orkFastAttack[index][1];
    opt.innerText = orkFastAttack[index][1];
    fastattack1.appendChild(opt);
}
document.getElementById('fastattack1').addEventListener("change", function () {
    document.getElementById('faCost1').selectedIndex = document.getElementById('fastattack1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = orkFastAttack[index][1];
    opt.innerText = orkFastAttack[index][1];
    fastattack2.appendChild(opt);
}
document.getElementById('fastattack2').addEventListener("change", function () {
    document.getElementById('faCost2').selectedIndex = document.getElementById('fastattack2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkFastAttack.entries()){
    const opt = document.createElement('option');
    opt.id = "fastattack";
    opt.value = orkFastAttack[index][1];
    opt.innerText = orkFastAttack[index][1];
    fastattack3.appendChild(opt);
}
document.getElementById('fastattack3').addEventListener("change", function () {
    document.getElementById('faCost3').selectedIndex = document.getElementById('fastattack3').selectedIndex;
}, false);
//HS
/*1*/for (const [index,a] of orkHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = orkHeavySupport[index][1];
    opt.innerText = orkHeavySupport[index][1];
    heavysupport1.appendChild(opt);
}
document.getElementById('heavysupport1').addEventListener("change", function () {
    document.getElementById('hsCost1').selectedIndex = document.getElementById('heavysupport1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = orkHeavySupport[index][1];
    opt.innerText = orkHeavySupport[index][1];
    heavysupport2.appendChild(opt);
}
document.getElementById('heavysupport2').addEventListener("change", function () {
    document.getElementById('hsCost2').selectedIndex = document.getElementById('heavysupport2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkHeavySupport.entries()){
    const opt = document.createElement('option');
    opt.id = "heavysupport";
    opt.value = orkHeavySupport[index][1];
    opt.innerText = orkHeavySupport[index][1];
    heavysupport3.appendChild(opt);
}
document.getElementById('heavysupport3').addEventListener("change", function () {
    document.getElementById('hsCost3').selectedIndex = document.getElementById('heavysupport3').selectedIndex;
}, false);
//LoW
/*1*/for (const [index,a] of orkLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = orkLordOfWar[index][1];
    opt.innerText = orkLordOfWar[index][1];
    lordofwar1.appendChild(opt);
}
document.getElementById('lordofwar1').addEventListener("change", function () {
    document.getElementById('lowCost1').selectedIndex = document.getElementById('lordofwar1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = orkLordOfWar[index][1];
    opt.innerText = orkLordOfWar[index][1];
    lordofwar2.appendChild(opt);
}
document.getElementById('lordofwar2').addEventListener("change", function () {
    document.getElementById('lowCost2').selectedIndex = document.getElementById('lordofwar2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = orkLordOfWar[index][1];
    opt.innerText = orkLordOfWar[index][1];
    lordofwar3.appendChild(opt);
}
document.getElementById('lordofwar3').addEventListener("change", function () {
    document.getElementById('lowCost3').selectedIndex = document.getElementById('lordofwar3').selectedIndex;
}, false);
/*4*/for (const [index,a] of orkLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = orkLordOfWar[index][1];
    opt.innerText = orkLordOfWar[index][1];
    lordofwar4.appendChild(opt);
}
document.getElementById('lordofwar4').addEventListener("change", function () {
    document.getElementById('lowCost4').selectedIndex = document.getElementById('lordofwar4').selectedIndex;
}, false);
/*5*/for (const [index,a] of orkLordOfWar.entries()){
    const opt = document.createElement('option');
    opt.id = "lordofwar";
    opt.value = orkLordOfWar[index][1];
    opt.innerText = orkLordOfWar[index][1];
    lordofwar5.appendChild(opt);
}
document.getElementById('lordofwar5').addEventListener("change", function () {
    document.getElementById('lowCost5').selectedIndex = document.getElementById('lordofwar5').selectedIndex;
}, false);

//Transport
/*1*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport1.appendChild(opt);
}
document.getElementById('transport1').addEventListener("change", function () {
    document.getElementById('dtCost1').selectedIndex = document.getElementById('transport1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport2.appendChild(opt);
}
document.getElementById('transport2').addEventListener("change", function () {
    document.getElementById('dtCost2').selectedIndex = document.getElementById('transport2').selectedIndex;
}, false);
/*3*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport3.appendChild(opt);
}
document.getElementById('transport3').addEventListener("change", function () {
    document.getElementById('dtCost3').selectedIndex = document.getElementById('transport3').selectedIndex;
}, false);
/*4*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport4.appendChild(opt);
}
document.getElementById('transport4').addEventListener("change", function () {
    document.getElementById('dtCost4').selectedIndex = document.getElementById('transport4').selectedIndex;
}, false);
/*5*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport5.appendChild(opt);
}
document.getElementById('transport5').addEventListener("change", function () {
    document.getElementById('dtCost5').selectedIndex = document.getElementById('transport5').selectedIndex;
}, false);
/*6*/for (const [index,a] of orkTransport.entries()){
    const opt = document.createElement('option');
    opt.id = "transport";
    opt.value = orkTransport[index][1];
    opt.innerText = orkTransport[index][1];
    transport6.appendChild(opt);
}
document.getElementById('transport6').addEventListener("change", function () {
    document.getElementById('dtCost6').selectedIndex = document.getElementById('transport6').selectedIndex;
}, false);

//Flyer
/*1*/for (const [index,a] of orkFlyer.entries()){
    const opt = document.createElement('option');
    opt.id = "flyer";
    opt.value = orkFlyer[index][1];
    opt.innerText = orkFlyer[index][1];
    flyer.appendChild(opt);
}
document.getElementById('flyer1').addEventListener("change", function () {
    document.getElementById('flCost1').selectedIndex = document.getElementById('flyer1').selectedIndex;
}, false);
/*2*/for (const [index,a] of orkFlyer.entries()){
    const opt = document.createElement('option');
    opt.id = "flyer";
    opt.value = orkFlyer[index][1];
    opt.innerText = orkFlyer[index][1];
    flyer2.appendChild(opt);
}
document.getElementById('flyer2').addEventListener("change", function () {
    document.getElementById('flCost2').selectedIndex = document.getElementById('flyer2').selectedIndex;
}, false);



}