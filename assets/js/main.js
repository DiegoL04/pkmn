import { getData } from "./api.js";
import { normalizeName, getRandomInt, getArrayOfNames, submitGuess, answerToggle, answerName, answerResponse} from "./utils.js";
const output = document.getElementById("output");

const randomBtn = document.getElementById("random-btn");
randomBtn.addEventListener("click", async () => {
  const randomId = await getRandomInt(1026, 1196); // total Pokémon count
  console.log("Generated ID:", randomId);
  if(randomId > 1025){
        const altForms = {
            1026:"kyogre-primal",
            1027:"groudon-primal",
            1028:"deoxys-attack",
            1029:"deoxys-defense",
            1030:"deoxys-speed",
            1031:"wormadam-plant",
            1032:"wormadam-sandy",
            1033:"wormadam-trash",
            1034:"dialga-origin",
            1035:"palkia-origin",
            1036:"giratina-origin",
            1037:"shaymin-sky",
            1038:"basculegion-female",
            1039:"darmanitan-zen",
            1040:"tornadus-therian",
            1041:"thundurus-therian",
            1042:"landorus-therian",
            1043:"enamorus-therian",
            1044:"kyurem-white",
            1045:"kyurem-black",
            1046:"meloetta-pirouette",
            1047:"floette-eternal",
            1048:"aegislash-blade",
            1049:"zygarde-10",
            1050:"zygarde-50",
            1051:"zygarde-complete",
            1052:"hoopa-unbound",
            1053:"lycanroc-midnight",
            1054:"lycanroc-dusk",
            1055:"minior-red",
            1056:"necrozma-dusk",
            1057:"necrozma-dawn",
            1058:"necrozma-ultra",
            1059:"eiscue-noice",
            1060:"indeedee-female",
            1061:"zacian-crowned",
            1062:"zamazenta-crowned",
            1063:"eternatus-eternamax",
            1064:"calyrex-ice",
            1065:"calyrex-shadow",
            1066:"ursaluna-bloodmoon",
            1067:"oinkologne-female",
            1068:"palafin-hero",
            1069:"terapagos-terastal",
            1070:"terapagos-stellar",
            1071:"raticate-alola",
            1072:"raichu-alola",
            1073:"sandshrew-alola",
            1074:"sandslash-alola",
            1075:"ninetales-alola",
            1076:"diglett-alola",
            1077:"dugtrio-alola",
            1078:"meowth-alola",
            1079:"meowth-galar",
            1080:"persian-alola",
            1081:"growlithe-hisui",
            1082:"arcanine-hisui",
            1083:"slowbro-galar",
            1084:"farfetchd-galar",
            1085:"exeggutor-alola",
            1086:"mr-mime-galar",
            1087:"tauros-paldea-combat-breed",
            1088:"articuno-galar",
            1089:"zapdos-galar",
            1090:"moltres-galar",
            1091:"typhlosion-hisui",
            1092:"slowking-galar",
            1093:"corsola-galar",
            1094:"samurott-hisui",
            1095:"lilligant-hisui",
            1096:"darmanitan-galar-zen",
            1097:"yamask-galar",
            1098:"zorua-hisui",
            1099:"zoroark-hisui",
            1100:"stunfisk-galar",
            1101:"braviary-hisui",
            1102:"sliggoo-hisui",
            1103:"goodra-hisui",
            1104:"avalugg-hisui",
            1105:"decidueye-hisui",
            1106:"venusaur-mega",
            1107:"charizard-mega-x",
            1108:"charizard-mega-y",
            1109:"blastoise-mega",
            1110:"beedrill-mega",
            1111:"pidgeot-mega",
            1112:"raichu-mega-x",
            1113:"raichu-mega-y",
            1114:"clefable-mega",
            1115:"alakazam-mega",
            1116:"victreebel-mega",
            1117:"slowbro-mega",
            1118:"gengar-mega",
            1119:"kangaskhan-mega",
            1120:"starmie-mega",
            1121:"pinsir-mega",
            1122:"gyarados-mega",
            1123:"aerodactyl-mega",
            1124:"dragonite-mega",
            1125:"mewtwo-mega-x",
            1126:"mewtwo-mega-y",
            1127:"meganium-mega",
            1128:"feraligatr-mega",
            1129:"ampharos-mega",
            1130:"steelix-mega",
            1131:"scizor-mega",
            1132:"heracross-mega",
            1133:"skarmory-mega",
            1134:"houndoom-mega",
            1135:"tyranitar-mega",
            1136:"blaziken-mega",
            1137:"swampert-mega",
            1138:"gardevoir-mega",
            1139:"mawile-mega",
            1140:"aggron-mega",
            1141:"medicham-mega",
            1142:"manectric-mega",
            1143:"sharpedo-mega",
            1144:"camerupt-mega",
            1145:"altaria-mega",
            1146:"banette-mega",
            1147:"chimecho-mega",
            1148:"absol-mega",
            1149:"absol-mega-z",
            1150:"glalie-mega",
            1151:"salamence-mega",
            1152:"metagross-mega",
            1153:"latias-mega",
            1154:"latios-mega",
            1155:"rayquaza-mega",
            1156:"staraptor-mega",
            1157:"lopunny-mega",
            1158:"garchomp-mega",
            1159:"garchomp-mega-z",
            1160:"lucario-mega",
            1161:"lucario-mega-z",
            1162:"abomasnow-mega",
            1163:"gallade-mega",
            1164:"froslass-mega",
            1165:"heatran-mega",
            1166:"darkrai-mega",
            1167:"emboar-mega",
            1168:"excadrill-mega",
            1169:"audino-mega",
            1170:"scolipede-mega",
            1171:"scrafty-mega",
            1172:"eelektross-mega",
            1173:"chandelure-mega",
            1174:"golurk-mega",
            1175:"chesnaught-mega",
            1176:"delphox-mega",
            1177:"greninja-mega",
            1178:"pyroar-mega",
            1179:"floette-mega",
            1180:"meowstic-mega",
            1181:"malamar-mega",
            1182:"barbaracle-mega",
            1183:"dragalge-mega",
            1184:"hawlucha-mega",
            1185:"zygarde-mega",
            1186:"diancie-mega",
            1187:"crabomble-mega",
            1188:"golisopod-mega",
            1189:"drampa-mega",
            1190:"magearna-mega",
            1191:"zeraora-mega",
            1192:"falinks-mega",
            1193:"scovillain-mega",
            1194:"glimmora-mega",
            1195:"tatsugiri-mega",
            1196:"baxcalibur-mega",
        };
    loadPokemon(altForms[randomId]);
  } else{
    loadPokemon(randomId);
  }
});

const sprite = document.getElementById("pokemonSprite")
const displayName = document.getElementById("displayName");
const response = document.getElementById("guessResponse");
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
  let isCorrect = false;
  if (currentPokemonNames.includes(normalizedGuess)) {
    answerToggle(displayNameText);
    isCorrect = true;
  }
    answerResponse(isCorrect);
}

async function loadPokemon(dex) {
    try {
        console.log("Loading Pokémon with dex:", dex);
        const data = await getData(dex);

        currentPokemonNames = getArrayOfNames(data);
        console.log(currentPokemonNames);

        sprite.src = data.sprites.front_default || data.sprites.front_shiny;
        sprite.style.display = "none";

        displayNameText = answerName(currentPokemonNames[3]);
        displayName.style.display = "none";

        response.style.display = "none";

        renderStats(data);

    } catch (error) {
        output.textContent = "Error loading next Pokemon. Please try again.";
        console.error(error);
    }
}