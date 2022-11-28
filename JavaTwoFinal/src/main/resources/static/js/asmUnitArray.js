

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
      for (const [index,a] of asmHQ.entries()){
          const opt = document.createElement('option');
          opt.id = "hq";
          opt.value = [a.slice(0,-9)];
          opt.innerText = asmHQ[index];
          hq.appendChild(opt);
  
      }
      for (const [index,a] of asmTroops.entries()){
          const opt = document.createElement('option');
          opt.id = "troops";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          troops.appendChild(opt);
      }
      for (const [index,a] of asmElites.entries()){
          const opt = document.createElement
          ('option');
          opt.id = "elite";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          elites.appendChild(opt);
      }
      for (const [index,a] of asmFastAttack.entries()){
          const opt = document.createElement('option');
          opt.id = "fastattack";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          fastattack.appendChild(opt);
      }
      for (const [index,a] of asmHeavySupport.entries()){
          const opt = document.createElement('option');
          opt.id = "heavysupport";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          heavysupport.appendChild(opt);
      }
      for (const [index,a] of asmLordOfWar.entries()){
          const opt = document.createElement('option');
          opt.id = "lordofwar";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          lordofwar.appendChild(opt);
      }
      for (const [index,a] of asmTransport.entries()){
          const opt = document.createElement('option');
          opt.id = "transport";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          transport.appendChild(opt);
      }
      for (const [index,a] of asmFlyer.entries()){
          const opt = document.createElement('option');
          opt.id = "flyer";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          flyer.appendChild(opt);
      }
      for (const [index,a] of asmFortification.entries()){
          const opt = document.createElement('option');
          opt.id = "fortification";
          opt.value = [a.slice(0,-9)];
          opt.innerHTML = a;
          fortification.appendChild(opt);
      }

}

