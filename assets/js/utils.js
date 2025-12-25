import { checkGuess } from "./main.js";

export function normalizeName(name) {
    name = name.toLowerCase()
    .replace(/[-_.]/g, " ")
    .replace(/\s+/g, " ")
    .replace("%", "")
    .trim();

    let arrayName = name.split(" ");
    if(arrayName.includes("mime")){
     for (let i = 0; i < arrayName.length; i++)
       {
         if(arrayName[i] === "mr")
           {
             arrayName[i] = "mr.";
           }
       }
    }
    else if((arrayName.includes("tauros") && arrayName.includes("paldea")))
    {
      while(arrayName.length > 2)
        {
            arrayName.pop();
        }
    } 
    let trimmedName = arrayName.join(" ");
    return trimmedName;
}

function formatName(name) {
    let arrayName = name.split(" ");
    if(arrayName.includes("mega") || (arrayName.includes("zen") && arrayName.includes("galar")))
      {
        let temp = arrayName[0];
        arrayName[0] = arrayName[1];
        arrayName[1] = temp;
      }else if(arrayName.includes("mime") && arrayName.includes("galar")) // Mr. Mime Clause
      {
        let temp = arrayName.pop();
        arrayName.unshift(temp);
      }else if(arrayName.includes("minior") && arrayName.includes("meteor")){// Minior Meteor Clause
          let temp = arrayName.pop();
          arrayName[1] = temp;
          console.log(arrayName)
      }else if(arrayName.includes("minior") && !(arrayName.includes("meteor")))// Minior Core Clause
        {
          arrayName[1] = "core";
          console.log(arrayName)
        }else
        {
          arrayName.push(arrayName[0]);
          arrayName.shift();
        }
    let swappedName = ""
    for (let i = 0; i < arrayName.length; i++) {
      swappedName += arrayName[i] + " ";
    }
    swappedName = swappedName.trim();
    return swappedName;
}

function regionalName(name)
{
  if(name.includes("alola"))
    {
      name = name.replace("alola", "alolan");
    }
  else if(name.includes("galar"))
    {
      name = name.replace("galar", "galarian");
    }else if(name.includes("hisui"))
    {
      name = name.replace("hisui", "hisuian");
    }else if(name.includes("paldea"))
    {
      name = name.replace("paldea", "paldean");
    }
    return name;
}

export function answerName(name) {
  let arrayName = name.split(" ");
  for (let i = 0; i < arrayName.length; i++) {
    arrayName[i] = arrayName[i].charAt(0).toUpperCase() + arrayName[i].slice(1);
  }
  if(arrayName.length !== 1)
  {
    if(!arrayName.includes("Galarian") && !arrayName.includes("Alolan") && !arrayName.includes("Hisuian") && !arrayName.includes("Paldean") && !arrayName.includes("Mega") && !arrayName.includes("Primal") && !arrayName.includes("Female"))
      {
    arrayName[arrayName.length - 1] = "(" + arrayName[arrayName.length - 1] + ")";
      }
    arrayName = arrayName.join(" ");
  }
  return arrayName;
}

export async function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getArrayOfNames(data) {
    const names = 
    [
        data.name,
        normalizeName(data.name),
        regionalName(formatName(normalizeName(data.name))),
        formatName(regionalName(normalizeName(data.name)))
    ];
    return names;
}

export function answerToggle(name) {
  const sprite = document.getElementById("pokemonSprite")
  sprite.style.display = "block";

  const displayName = document.getElementById("displayName");
  displayName.innerText = name;
  displayName.style.display = "block";
}

export function answerResponse(isCorrect){
  const response = document.getElementById("guessResponse");
  if(isCorrect){
    response.innerText = "Correct!";
    response.style.display = "block";
    return;
  }
  response.innerText = "Incorrect! Try again!";
  response.style.display = "block";
}

export function submitGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  if (!userGuess) return;
  checkGuess(userGuess);
  guessInput.value = "";
}