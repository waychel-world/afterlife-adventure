const user = {
    nameInput: "yourName",

    set changeName(newName) {
        this.nameInput = newName;
    }
}

const endings = {
    "Cave": 0, //Cave of All Whys 
    "Psychopomp": 0, //Become a psychopomp (replace one of the characters you meet)
    "Fish": 0, //Reincarnate into an octopus 
    "Moss": 0, //Reincarnate into moss
    "Ghost": 0, //Return to the land of the living, but as a ghost 
    "Oblivion": 0, //Have your consciousness scattered across the cosmos
    "Shopkeeper": 0, //Make a kim zua shop for the dead to send things to the living 
    "Ancestor": 0 //Join the ancestors in watching over/ caring for the living
    
    //["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]
};

const endingText = {
    "Cave": {
        "text": "Cave 1",
    }, 
    
    "Psychopomp": {
        "text": "Psychopomp 1",
    }, 

    "Fish": {
        "text": "Fish 1",
    }, 

    "Moss": {
        "text": "Moss 1",
    }, 

    "Ghost": {
        "text": "Ghost 1",
    }, 

    "Oblivion": {
        "text": "Oblivion 1",
    }, 

    "Shopkeeper": {
        "text": "Shopkeeper 1",
    }, 

    "Ancestor": {
        "text": "Ancestor 1",
    }, 
};

const gameData = {
    "1": {
        "input": "name", 
        "text": "You awake to un-life, a strange inverted non-existence. You hear no sounds, just a resounding silence. You have no eyes, and there is no light, but you see the void stretch ahead of you endlessly." + "\r\n" + "\r\n" + "A thought presents itself: “Who was I?”",
        "image": "images/placeholder.jpg",
        "submit": {
            "“Ahhh, I remember. Yes, that was my name.”": [2,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]]
        }
    },

    "2": {
        "text": "Eventually, something appears before you. It’s warm and sort of glowing. You start to move toward it, but hesitate when you hear a soft crying sound coming from behind you. It feels so familiar–you think you know who it might be–the thought of them crying makes your heart twist. Instinctively you know that if you turn to look back, the warm glowing presence will disappear forever." + "\r\n" + "\r\n" + "What do you do?",
        "image": "images/placeholder.jpg",
        "choices": {
            "Turn back to follow the crying sound.": [3,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]],
            "Step into the glow, no looking back.": [6,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]]
        }
    },

    "3": {
        "text": "You look down and see someone hunched over a desk, their eyes red and puffy as they mumble into their hands. It’s the last face you remember, the person who held you as you passed into un-life." + "\r\n" + "\r\n" + "You flit into their face, desperate for their attention." + "\r\n" + "\r\n" + "“A moth…? yourName, is that you?”",
        "image": "images/placeholder.jpg",
        "choices": {
            "Flit harder.": [4,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]],
            "Rest on their nose.": [4,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]]
        }
    },

    "4": {
        "text": "They start to mumble faster, words spilling out of them almost too quickly for you to catch (after all you are a moth, with a little moth brain): the events that followed your passing, the things they never got to say to you or do with you, how they missed you. Then their speech starts to slow, weighed down with doubt; it becomes a question, a plea." + "\r\n" + "\r\n" + "They hold up four fingers–each one represents one option for what to do with your body." + "\r\n" + "\r\n" + "“yourName, if it’s really you… give me a sign. What would you want me to do?”",
        "image": "images/placeholder.jpg",
        "choices": {
            "Bury you under a tree.": [5, ["Moss"]],
            "Cremate you and have your friends or family keep the urn.": [5, ["Fish"]],
            "Donate your body to a lab that dissects people to discover where sentience is located in the human body." : [5, ["Cave"]],
            "Encase your body in a very hard material and launch it into outer space.": [5, ["Cave"]]
        }
    },

    "5": {
        "text": "You land on the finger that represents your choice. They nod eagerly, promising to respect your decision." + "\r\n" + "\r\n" + "All night, the two of you keep vigil. Sometimes they speak, sometimes they weep, but most of the time they gaze silently at the little moth perched on their finger, drinking the last drops of goodbye. Come morning, the moth is dead, and you depart once more to un-life.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Onwards…": [0,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]]
        }
    },

    "6": {
        "text": "You’ve been walking for what feels like an age. At some point, without you noticing, your surroundings had de-inverted. You remember dappled light, a cobblestone path, and a bridge over fast water. Now you find yourself coming to a halt in a beautiful pavilion. It’s empty, except for a table and two chairs.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Sit down.": [7,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]]
        }
    },

    "7": {
        "text": "Tired and slightly bored, you cast your eyes around the table. There is a large pot with a ladle, an empty bowl, and a piece of paper with a leisurely scrawl:" + "\r\n" + "\r\n" + "“Out for a break. Please help yourself.”" + "\r\n" + "\r\n" + "You lift the lid on the pot. It’s alphabet soup. The little pasta letters floating on the surface of the soup spell out the words “EAT SPAGHETTI TO FORGETTI YOUR REGRETTI”.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Help yourself to a bowl. A big, full bowl.": [0, ["Oblivion"]],
            "No thanks! Wander off into the forest instead.": [0, ["Psychopomp"]],
        }
    },

    "": {
        "text": "",
        "image": "images/placeholder.jpg",
        "choices": {
            "Reveal": [,["Cave", "Psychopomp", "Fish", "Moss", "Ghost", "Oblivion", "Shopkeeper", "Ancestor"]],
        }
    },

    "": {
        "text": "",
        "image": "images/placeholder.jpg",
        "choices": {

        }
    },

    "0": { //defines gameData[newState] so that function revealEnding can be called within changeState
        "text": "",
        "image": "images/placeholder.jpg",
        "choices": {

        }
    },
};

let currentState = 1;

function startGame() {
    document.getElementById('homescreen').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.querySelector('#start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
};

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');
    const formContainer = document.getElementById('form');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;

        choicesContainer.innerHTML = '';   
        formContainer.innerHTML = '';   
        
        if (gameData[state].input === "name") {
            for (const [submit, info] of Object.entries(gameData[state].submit)) { //info is array of next state and selected ending
            const input = document.createElement('input');
            input.id = 'user-name';
            const button = document.createElement('button');
            button.textContent = submit;
            button.className = 'submit-button';
            let nextState = info[0]; 
            button.onclick = () => changeNameState(nextState, info[1]); 
            formContainer.appendChild(input);
            formContainer.appendChild(button);
             }
          } else {
            for (const [choice, info] of Object.entries(gameData[state].choices)) {
                const button = document.createElement('button');
                button.textContent = choice;
                button.className = 'choice-button';
                let nextState = info[0];
                button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the endings dictionary
                choicesContainer.appendChild(button);
            };
          }
    };
};

function changeNameState(newState, selectedEndings) {
    
    selectedEndings.forEach(ending => {
        endings[ending]++;
    });
    
    var userName = document.getElementById('user-name').value; 
    user.changeName = userName;
    gameData[newState].text = gameData[newState].text.replaceAll("yourName", user.nameInput)

    currentState = newState;

    if (currentState === 0) {
        revealEnding();
    } else {
        renderState(currentState);
    }
}

function changeState(newState, selectedEndings) {

    selectedEndings.forEach(ending => {
        endings[ending]++;
    });
    
    gameData[newState].text = gameData[newState].text.replaceAll("yourName", user.nameInput)

    currentState = newState;

    if (currentState === 0) {
        revealEnding();
    } else {
        renderState(currentState);
    }
};

function revealEnding() {
    let maxCount = 0;
    let maxEnding = '';

    for (const [ending, count] of Object.entries(endings)) {
        if (count > maxCount) {
            maxCount = count;
            maxEnding = ending;
        };
    };

    const storyText = document.getElementById('story-text');
    const endingImagePath = "images/placeholder.jpg" // for substitutable images `smaller_images/id_cards/${maxVeggie}.png`;
    const choicesContainer = document.getElementById('choices');
    const formContainer = document.getElementById('form');

    // Preload the image
    const img = new Image();
    img.src = endingImagePath;

   //img.className = 'responsive-image'; 

    // Once the image is loaded, update the DOM
    img.onload = () => {
        formContainer.style.display = 'none';
        choicesContainer.style.display = 'none';

        storyText.textContent = endingText[maxEnding].text;
        //storyText.appendChild(img);

    };
};

window.onload = () => {
    renderState(currentState);
};