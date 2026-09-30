/*Add your JavaScript here*/
/* Global const for ALL characters and their description */

const characters = {
  jane: {
    name: "Jane Eyre",
    desc: "Yeah… okay, it’s a bit basic to get the main character, but listen: you are pure granite. You have this polite, quiet exterior, but inside? A terrifying steel core. You deeply value your independence and would rather run away into a freezing fog with zero pounds in your pocket than betray your moral compass. You can survive literally anything, but please, remember to let people love you sometimes."
  },
  rochester: {
    name: "Edward Rochester",
    desc: "Congratulations, you are a walking red flag with a very dramatic past. You have that ultimate Byronic hero energy—brooding, passionate, impulsive, and constantly making questionable life choices because of 'secrets.' You love to fight against fate and yell at the sky. People are weirdly drawn to your chaotic charisma, but honey, maybe try some therapy instead of hiding your problems on the roof."
  },
  stjohn: {
    name: "St. John Rivers",
    desc: "You are literally ice-cold. If discipline, ambition, and a relentless sense of duty had a human face, it would be yours. When you have a goal, you march toward it like a robot, completely ready to sacrifice your own happiness - and everyone else's feelings—for the 'greater good.' You are incredibly harsh on yourself. Take a deep breath and go eat a cookie, relaxation won't kill you."
  },
  blanche: {
    name: "Blanche Ingram",
    desc: "You were born for the spotlight, expensive aesthetics, and making people jealous. You perfectly know how to play social games, your hair is always perfect, and you refuse to settle for anything less than luxury and high status. Beneath that royal confidence, there is a very sharp, calculating mind. You know your worth, and honestly? If someone doesn't bring a grand manor to the table, they can leave."
  },
  helen: {
    name: "Helen Burns",
    desc: "You are literally an angel, and honestly, how are you surviving in this cruel world? You possess the rare superpower of absolute forgiveness and quiet, otherworldly wisdom. You are the ultimate fatalist: when life hits you, you just smile and say, 'It's fine, earthly suffering is temporary anyway.' Everyone comes to you for comfort, but don't forget to stand up for yourself too!"
  },
  mrsreed: {
    name: "Mrs. Reed",
    desc: "Wow. You are a master of harboring grudges and projecting your bad mood onto everyone around you. You love rules, status, and staying mad at people for decades. Your pride is so massive that even when you are 100% wrong, you will look someone in the eye and pretend everything is fine. Try letting go of that ancient resentment—it’s exhausting!"
  },
  adele: {
    name: "Adèle Varens",
    desc: "No thoughts, just vibes, pretty dresses, and wanting presents. You are the embodiment of pure joy, playfulness, and a little bit of vanity. While everyone else is busy suffering in deep gothic existential dread, you are just fluttering around, singing in French, and demanding attention. Never lose that inner child, the world needs your light!"
  },
  bertha: {
    name: "Bertha Mason",
    desc: "You are pure, unadulterated chaos. If someone tries to lock you up, put you in a box, or tell you what to do, you will not sit in the corner and cry. Nope. You will start a literal riot, smash the furniture, and burn the whole place to the ground. Your emotions are an explosive volcanic eruption. People should definitely not play with you, because you do not know the meaning of mercy."
  },
  thornfield: {
    name: "Thornfield Hall after the Fire",
    desc: "Your official life motto is: 'I have seen some absolute garbage.' You have survived massive life crises, toxic relationships, and a literal firestorm of drama that left you with deep, deep scars. But even though you are 'slightly scorched' and half of your walls are missing, you still look incredibly grand, majestic, and intimidating. You are completely impossible to break."
  },
  inheritance: {
    name: "The £20,000 Inheritance",
    desc: "You are a literal miracle and the ultimate plot twist. You show up out of nowhere at the absolute worst moment and instantly solve every single problem with the power of cash. You represent pure, chaotic freedom, ultimate safety, and turning the tables on everyone who doubted you. People literally dream about meeting you because you make all the suffering worth it."
  },
  bessie: {
    name: "Bessie Lee",
    desc: "You are the only person with actual common sense in this entire room of dramatic poets. You know exactly when to scold people to keep them grounded, but deep down, you are just a big softie who wants everyone to be safe and fed. You love a good piece of gossip, you stand firmly on your own two feet, and you are always ready to protect your favorites from the world."
  },
  mrlloyd: {
    name: "Mr. Lloyd",
    desc: "You are that one quiet, observant person in the back of the room who notices the toxic vibes before anyone else. You have a very sharp, analytical brain and high empathy. You don't like being on the front lines of drama, but your perfectly timed advice and side-quests are literally the reason the main character doesn't give up in chapter 4. A low-key legend."
  },
  misstemple: {
    name: "Miss Temple",
    desc: "Absolute elegance, grace, and quiet rebellion against a broken system. You know how to destroy a toxic tyrant using nothing but polite logic and perfect arguments, leaving them completely speechless. You restore people’s faith in humanity just by existing, and you can create a warm, cozy sanctuary even in the coldest, most miserable environments."
  },
  richard: {
    name: "Richard Mason",
    desc: "Oh look, it's the person who always ends up in the wrong place, at the exact wrong time, accidentally ruining everyone’s top-secret plans. You are prone to panic, easily influenced by louder voices, and you definitely don't handle stress well. Your arrival somewhere instantly triggers a 5-star drama rating, even though you probably just wanted to drop by for tea."
  },
  redroom: {
    name: "The Red Room",
    desc: "Yikes. You are the embodiment of deep psychological trauma, spooky vibes, and facing your worst inner demons completely alone in the dark. You represent that terrifying, dramatic turning point where life forces you to grow up instantly. You seem like a nightmare to deal with, but honestly, passing through you is exactly how legendary main characters are born."
  }
};

/* Answers */

const quizMatrix = {
  q1: {
    a1: ['bessie', 'stjohn', 'blanche'],
    a2: ['mrsreed', 'rochester', 'redroom'],
    a3: ['bertha', 'thornfield', 'inheritance'],
    a4: ['mrlloyd', 'helen', 'richard'],
    a5: ['jane', 'adele', 'misstemple']
  },
  q2: {
    a1: ['mrlloyd', 'redroom', 'bessie'],
    a2: ['bertha', 'misstemple', 'richard'],
    a3: ['adele', 'stjohn', 'rochester'],
    a4: ['mrsreed', 'blanche', 'inheritance'],
    a5: ['thornfield', 'jane', 'helen']
  },
  q3: {
    a1: ['bertha', 'helen', 'rochester'],
    a2: ['stjohn', 'richard', 'thornfield'],
    a3: ['inheritance', 'adele', 'mrlloyd'],
    a4: ['mrsreed', 'bessie', 'misstemple'],
    a5: ['blanche', 'redroom', 'jane']
  },
  q4: {
    a1: ['bertha', 'mrlloyd', 'blanche'],
    a2: ['thornfield', 'adele', 'redroom'],
    a3: ['richard', 'bessie', 'jane'],
    a4: ['inheritance', 'rochester', 'misstemple'],
    a5: ['helen', 'stjohn', 'mrsreed']
  },
  q5: {
    a1: ['stjohn', 'bertha', 'redroom'],
    a2: ['inheritance', 'helen', 'bessie'],
    a3: ['jane', 'mrlloyd', 'rochester'],
    a4: ['mrsreed', 'richard', 'adele'],
    a5: ['thornfield', 'misstemple', 'blanche']
  },
  q6: {
    a1: ['rochester', 'bessie', 'thornfield'],
    a2: ['mrlloyd', 'misstemple', 'stjohn'],
    a3: ['redroom', 'inheritance', 'richard'],
    a4: ['helen', 'adele', 'blanche'],
    a5: ['jane', 'mrsreed', 'bertha']
  },
  q7: {
    a1: ['richard', 'blanche', 'rochester'],
    a2: ['bertha', 'bessie', 'adele'],
    a3: ['misstemple', 'helen', 'redroom'],
    a4: ['mrlloyd', 'mrsreed', 'thornfield'],
    a5: ['stjohn', 'inheritance', 'jane']
  }
};

/* Making connection with HTML file */

let currentScores = {};

let currentQuestion = 0; 

// DOM
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");

// Main buttons
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart");

/* Scores changing */
function initScores() {
  
  for (let key in characters) {
    currentScores[key] = 0; 
  }
  currentQuestion = 0; 
}

/* Self-finding of all answers + listeners */

/* Finding all 35 buttons */
document.querySelectorAll(".answer-btn").forEach(button => {
  
  button.addEventListener("click", function() {
    
    const id = this.id;
    
    const qNum = "q" + id.charAt(1); 
    const aNum = "a" + id.charAt(3); 

    const targetCharacters = quizMatrix[qNum][aNum];
    
    targetCharacters.forEach(char => {
      currentScores[char] += 1;
    });

    console.log("Answered " + qNum + aNum + ". Scores:", currentScores);


    nextStep();
  });
});

/* Adding listeners*/
startBtn.addEventListener("click", nextStep);
restartBtn.addEventListener("click", resetQuiz);

/* Slides!! */

function nextStep() {
  const currentBlock = document.getElementById("q" + currentQuestion);

  if (currentBlock) {
    currentBlock.style.display = "none";
  } 
  
  else {
    startScreen.style.display = "none";
  }

  currentQuestion += 1;

  const nextBlock = document.getElementById("q" + currentQuestion);

  if (nextBlock) {
    nextBlock.style.display = "block";
  } 
  else {
    showResult(); 
  }
}

/* Function for restart */
function resetQuiz() {
  resultScreen.style.display = "none";
  
  for (let key in characters) {
    const imgElement = document.getElementById("img-" + key);
    if (imgElement) {
      imgElement.style.display = "none";
    }
  }
  
  initScores();
  
  /* Showing again the start */
  startScreen.style.display = "block";
  
  console.log("Quiz completely reset to start screen!");
}

initScores();

/* Final slide!!*/

function showResult() {
  let maxScore = -1; 
  let winnerKey = ""; 

  for (let char in currentScores) {
    if (currentScores[char] > maxScore) {
      maxScore = currentScores[char]; 
      winnerKey = char; 
    }
  }

  const charImg = document.getElementById("char-img");
  const resultName = document.getElementById("result-name");
  const resultDesc = document.getElementById("result-description");

  resultName.innerHTML = characters[winnerKey].name;
  resultDesc.innerHTML = characters[winnerKey].desc;
  
  const winnerImage = document.getElementById("img-" + winnerKey);
  
  if (winnerImage) {
    winnerImage.style.display = "block";
  }

  resultScreen.style.display = "block";
}
