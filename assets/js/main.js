import { getData } from "./api.js";
import { normalizeName, getRandomInt, getArrayOfNames, submitGuess, answerToggle, answerName} from "./utils.js";
const output = document.getElementById("output");

const randomBtn = document.getElementById("random-btn");
randomBtn.addEventListener("click", async () => {
  const randomId = await getRandomInt(1026, 1098); // total Pokémon count
  if(randomId > 1025){
        const altForms = {
            1028:"kyogre-primal",
            1029:"groudon-primal",
            1030:"deoxys-attack",
            1031:"deoxys-defense",
            1032:"deoxys-speed",
            1033:"wormadam-plant",
            1034:"wormadam-sandy",
            1035:"wormadam-trash",
            1036:"dialga-origin",
            1037:"palkia-origin",
            1038:"giratina-origin",
            1039:"shaymin-sky",
            1040:"basculegion-female",
            1041:"darmanitan-zen",
            1042:"tornadus-therian",
            1043:"thundurus-therian",
            1044:"landorus-therian",
            1045:"enamorus-therian",
            1046:"kyurem-white",
            1047:"kyurem-black",
            1048:"meloetta-pirouette",
            1049:"floette-eternal",
            1050:"aegislash-blade",
            1051:"zygarde-10",
            1052:"zygarde-50",
            1053:"zygarde-complete",
            1054:"hoopa-unbound",
            1055:"lycanroc-midnight",
            1056:"lycanroc-dusk",
            1057:"minior-red",
            1058:"necrozma-dusk",
            1059:"necrozma-dawn",
            1060:"necrozma-ultra",
            1061:"eiscue-noice",
            1062:"indeedee-female",
            1063:"zacian-crowned",
            1064:"zamazenta-crowned",
            1065:"eternatus-eternamax",
            1066:"calyrex-ice",
            1067:"calyrex-shadow",
            1068:"ursaluna-bloodmoon",
            1069:"oinkologne-female",
            1070:"palafin-hero",
            1071:"terapagos-terastal",
            1072:"terapagos-stellar",
            1073:"raticate-alola",
            1074:"raichu-alola",
            1075:"sandshrew-alola",
            1076:"sandslash-alola",
            1077:"ninetales-alola",
            1078:"diglett-alola",
            1079:"dugtrio-alola",
            1080:"meowth-alola",
            1081:"meowth-galar",
            1082:"persian-alola",
            1083:"growlithe-hisui",
            1084:"arcanine-hisui",
            1085:"slowbro-galar",
            1086:"farfetchd-galar",
            1087:"exeggutor-alola",
            1088:"mr-mime-galar",
            1089:"tauros-paldea-combat-breed",
            1090:"articuno-galar",
            1091:"zapdos-galar",
            1092:"moltres-galar",
            1093:"typhlosion-hisui",
            1094:"slowking-galar",
            1095:"corsola-galar",
            1096:"samurott-hisui",
            1097:"lilligant-hisui",
            1098:"darmanitan-galar-zen",
            1099:"yamask-galar",
            1100:"zorua-hisui",
            1101:"zoroark-hisui",
            1102:"stunfisk-galar",
            1103:"braviary-hisui",
            1104:"sliggoo-hisui",
            1105:"goodra-hisui",
            1106:"avalugg-hisui",
            1107:"decidueye-hisui",
            1108:"venusaur-mega",
            1109:"charizard-mega-x",
            1110:"charizard-mega-y",
            1111:"blastoise-mega",
            1112:"beedrill-mega",
            1113:"pidgeot-mega",
            1114:"raichu-mega-x",
            1115:"raichu-mega-y",
            1116:"clefable-mega",
            1117:"alakazam-mega",
            1118:"victreebel-mega",
            1119:"slowbro-mega",
            1120:"gengar-mega",
            1121:"kangaskhan-mega",
            1122:"starmie-mega",
            1123:"pinsir-mega",
            1124:"gyarados-mega",
            1125:"aerodactyl-mega",
            1126:"dragonite-mega",
            1127:"mewtwo-mega-x",
            1128:"mewtwo-mega-y",
            1129:"meganium-mega",
            1130:"feraligatr-mega",
            1131:"ampharos-mega",
            1132:"steelix-mega",
            1133:"scizor-mega",
            1134:"heracross-mega",
            1135:"skarmory-mega",
            1136:"houndoom-mega",
            1137:"tyranitar-mega",
            1138:"blaziken-mega",
            1139:"swampert-mega",
            1140:"gardevoir-mega",
            1141:"mawile-mega",
            1142:"aggron-mega",
            1143:"medicham-mega",
            1144:"manectric-mega",
            1145:"sharpedo-mega",
            1146:"camerupt-mega",
            1147:"altaria-mega",
            1148:"banette-mega",
            1149:"chimecho-mega",
            1150:"absol-mega",
            1151:"absol-mega-z",
            1152:"glalie-mega",
            1153:"salamence-mega",
            1154:"metagross-mega",
            1155:"latias-mega",
            1156:"latios-mega",
            1157:"rayquaza-mega",
            1158:"staraptor-mega",
            1159:"lopunny-mega",
            1160:"garchomp-mega",
            1161:"garchomp-mega-z",
            1162:"lucario-mega",
            1163:"lucario-mega-z",
            1164:"abomasnow-mega",
            1165:"gallade-mega",
            1166:"froslass-mega",
            1167:"heatran-mega",
            1168:"darkrai-mega",
            1169:"emboar-mega",
            1170:"excadrill-mega",
            1171:"audino-mega",
            1172:"scolipede-mega",
            1173:"scrafty-mega",
            1174:"eelektross-mega",
            1175:"chandelure-mega",
            1176:"golurk-mega",
            1177:"chesnaught-mega",
            1178:"delphox-mega",
            1179:"greninja-mega",
            1180:"pyroar-mega",
            1181:"floette-mega",
            1182:"meowstic-mega",
            1183:"malamar-mega",
            1184:"barbaracle-mega",
            1185:"dragalge-mega",
            1186:"hawlucha-mega",
            1187:"zygarde-mega",
            1188:"diancie-mega",
            1189:"crabomble-mega",
            1190:"golisopod-mega",
            1191:"drampa-mega",
            1192:"magearna-mega",
            1193:"zeraora-mega",
            1194:"falinks-mega",
            1195:"scovillain-mega",
            1196:"glimmora-mega",
            1197:"tatsugiri-mega",
            1198:"baxcalibur-mega",
        };
    loadPokemon(altForms[randomId]);
  }
  else{
    loadPokemon(randomId);
  }
});

const sprite = document.getElementById("pokemonSprite")
const displayName = document.getElementById("displayName");
let currentPokemonNames = [];
let displayNameText = "";

const guessInput = document.getElementById("guessInput");
guessInput.addEventListener("keydown", (e) => {if (e.key === "Enter") submitGuess();});

async function renderStats(data) {
    try {
        const stats = {};
        data.stats.forEach(({ base_stat, stat }) => {
            stats[stat.name] = base_stat;
        });
        const {
            hp,
            attack,
            defense,
            "special-attack": specialAttack,
            "special-defense": specialDefense,
            speed
        } = stats;
        const statLabels = {
            hp: "HP",
            attack: "Atk",
            defense: "Def",
            "special-attack": "Sp.Atk",
            "special-defense": "Sp.Def",
            speed: "Spe"
        };

        const colors = {
            hp: "#66dd11",
            attack: "#efcb19",
            defense: "#e86412",
            "special-attack": "#16c2f0",
            "special-defense": "#4a6adf",
            speed: "#d41eac"
        };
        const bgcolors = {
            hp: "#9de765",
            attack: "#f5de69",
            defense: "#ef9a65",
            "special-attack": "#64d9f7",
            "special-defense": "#879fe9",
            speed: "#e46bc9"
        };
        const oColors = {
            hp: "#49990b",
            attack: "#a58d11",
            defense: "#a1460c",
            "special-attack": "#0e87a6",
            "special-defense": "#334a9b",
            speed: "#931576"
        };

        const bst = hp + attack + defense + specialAttack + specialDefense + speed;

        output.innerHTML = data.stats.map(({ base_stat, stat }) => 
        {
            return `
                <div class="stat">
                    <div class="stat-name">${statLabels[stat.name] || stat.name}</div>
                    <span class="stat-value" style="background-color: ${bgcolors[stat.name] || "#e5e7eb"};border: 2px solid ${oColors[stat.name] || "#16a34a"};">${base_stat}</span>
                    <div class="stat-bar" style="background-color: ${bgcolors[stat.name] || "#16a34a"};">
                        <div class="stat-fill" style="background-color: ${colors[stat.name] || "#22c55e"}; border: 2px solid ${oColors[stat.name] || "#16a34a"};"></div>
                    </div>
                </div>`;
        }).join("");
        output.innerHTML = output.innerHTML +
        `<div class="bst">
            <div class="bst-name">BST</div>
            <span class="bst-value" style="border: 2px solid #8d8d8dff;">${bst}</span>
        </div>`;
document.querySelectorAll(".stat-fill").forEach((bar, i) => {
  const baseStat = data.stats[i].base_stat;
  const maxStat = 255; // max for scaling
  const percent = Math.min(((baseStat)/ maxStat) * 100, 100);

  requestAnimationFrame(() => {
    bar.style.width = `${percent}%`;
  });
});
    } catch (error) {
        output.textContent = "Error fetching data: RenderStats function";
        console.error(error);
    }
}

export function checkGuess(userGuess) {
  const normalizedGuess = normalizeName(userGuess);
  console.log("User Guess:", normalizedGuess);
  console.log("Possible Names:", currentPokemonNames);
  if (currentPokemonNames.includes(normalizedGuess)) {
    answerToggle(displayNameText);
  }
}

async function loadPokemon(dex) {
    try {
        const data = await getData(dex);

        currentPokemonNames = getArrayOfNames(data);
        console.log(currentPokemonNames);

        sprite.src = data.sprites.front_default || data.sprites.front_shiny;
        sprite.style.display = "none";

        displayNameText = answerName(currentPokemonNames[1]);
        displayName.style.display = "none";

        renderStats(data);

    } catch (error) {
        output.textContent = "Error loading next Pokemon. Please try again.";
        console.error(error);
    }
}