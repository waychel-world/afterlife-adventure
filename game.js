const user = {
    nameInput: "yourName",

    set changeName(newName) {
        this.nameInput = newName;
    }
}

const endings = {

};

const gameData = {
    "1": {
        "input": "name", 
        "text": "You awake to un-life, a strange inverted non-existence. You hear no sounds, just a resounding silence. You have no eyes, and there is no light, but you see the void stretch ahead of you endlessly." + "\r\n" + "\r\n" + "A thought presents itself: “Who was I?”",
        "image": "images/placeholder.jpg",
        "submit": {
            "“Ahhh, I remember. Yes, that was my name.”": [2]
        }
    },

    "2": {
        "text": "Eventually, something appears before you. It’s warm and sort of glowing. You start to move toward it, but hesitate when you hear a soft crying sound coming from behind you. It feels so familiar–you think you know who it might be–the thought of them crying makes your heart twist. Instinctively you know that if you turn to look back, the warm glowing presence will disappear forever." + "\r\n" + "\r\n" + "What do you do?",
        "image": "images/placeholder.jpg",
        "choices": {
            "Turn back to follow the crying sound.": [3],
            "Step into the glow, no looking back.": [6]
        }
    },

    "3": {
        "text": "You look down and see someone hunched over a desk, their eyes red and puffy as they mumble into their hands. It’s the last face you remember, the person who held you as you passed into un-life." + "\r\n" + "\r\n" + "You flit into their face, desperate for their attention." + "\r\n" + "\r\n" + "“A moth…? yourName, is that you?”",
        "image": "images/placeholder.jpg",
        "choices": {
            "Flit harder.": [4],
            "Rest on their nose.": [4]
        }
    },

    "4": {
        "text": "They start to mumble louder and faster, words spilling out of them almost too quickly for you to catch (after all you are a moth, with a little moth brain): the events that followed your passing, the things they never got to say to you or do with you, how they missed you. Then their speech starts to slow, weighed down with doubt; it becomes a question, a plea." + "\r\n" + "\r\n" + "They hold up four fingers–each one represents one option for what to do with your body." + "\r\n" + "\r\n" + "“yourName, if it’s really you… give me a sign. What would you want me to do?”",
        "image": "images/placeholder.jpg",
        "choices": {
            "Bury you in a biodegradable shroud under a tree.": [5],
            "Cremate you and have your friends or family keep the urn in their home.": [5],
            "Donate your body to a lab that dissects people to discover where sentience is located in the human body." : [5],
            "Encase your body in a very hard material and launch it into outer space.": [5]
        }
    },

    "5": {
        "text": "You land on the finger that represents your choice. They nod eagerly, promising to respect your decision." + "\r\n" + "\r\n" + "All night, the two of you keep vigil. Sometimes they speak, sometimes they weep, but most of the time they gaze silently at the little moth perched on their finger, drinking the last drops of goodbye. Come morning, the moth is dead, and you depart once more to un-life.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Onwards…": []
        }
    },

    "6": {
        "text": "You’ve been walking for what feels like an age. At some point, without you noticing, your surroundings had de-inverted. You remember dappled light, a cobblestone path, and a bridge over fast water. Now you find yourself coming to a halt in a beautiful pavilion. It’s empty, except for a table and two chairs.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Sit down.": [7]
        }
    },

    "7": {
        "text": "Tired and slightly bored, you cast your eyes around the table. There is a large pot with a ladle, an empty bowl, and a piece of paper with a leisurely scrawl:" + "\r\n" + "\r\n" + "“Out for a break. Please help yourself.”" + "\r\n" + "\r\n" + "You lift the lid on the pot. It’s alphabet soup. The little pasta letters floating on the surface of the soup spell out the words “EAT SPAGHETTI TO FORGETTI YOUR REGRETTI”.",
        "image": "images/placeholder.jpg",
        "choices": {
            "Help yourself to a bowl. A big, full bowl.": [],
            "No thanks! Wander off into the forest instead.": [],
        }
    },

    "": {
        "text": "",
        "image": "images/placeholder.jpg",
        "choices": {

        }
    },

    "": {
        "text": "",
        "image": "images/placeholder.jpg",
        "choices": {

        }
    },

    "": {
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

function revealEnding() {

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
            for (const [submit, ending] of Object.entries(gameData[state].submit)) {
            const input = document.createElement('input');
            input.id = 'user-name';
            const button = document.createElement('button');
            button.textContent = submit;
            button.className = 'submit-button';
            let nextState = ending[0]; 
            button.onclick = () => changeNameState(nextState, ending[0]); 
            formContainer.appendChild(input);
            formContainer.appendChild(button);
             }
          } else {
            for (const [choice, ending] of Object.entries(gameData[state].choices)) {
                const button = document.createElement('button');
                button.textContent = choice;
                button.className = 'choice-button';
                let nextState = ending[0];
                button.onclick = () => changeState(nextState, ending[1]); //each time you change state you update the endings dictionary
                choicesContainer.appendChild(button);
            };
          }
    };
};

function changeNameState(newState, selectedEnding) {

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

function changeState(newState, selectedEnding) {

    /*
    selectedEnding.forEach(ending => {
        endings[ending]++;
    });
    trace "ending" "endings" and populate 
    */
    gameData[newState].text = gameData[newState].text.replaceAll("yourName", user.nameInput)

    currentState = newState;

    if (currentState === 0) {
        revealEnding();
    } else {
        renderState(currentState);
    }
};


window.onload = () => {
    renderState(currentState);
};