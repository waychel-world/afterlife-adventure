var yourName = ""

const endings = {

};

const gameData = {
    "1": {
        "text": "You awake to un-life, a strange inverted non-existence. You hear no sounds, just a resounding silence. You have no eyes, and there is no light, but you see the void stretch ahead of you endlessly." + "\r\n" + "\r\n" + "A thought presents itself: “who was I?”",
        "image": "images/placeholder.jpg",
        "form": {
            "“Ahhh, I remember. Yes, that was my name.”": [2, yourName]
        }
    },

    "2": {
        "text": "Eventually, something appears before you. It’s warm and sort of glowing. You start to move toward it, but hesitate when you hear a soft crying sound coming from behind you. It feels so familiar–you think you know who it might be–the thought of them crying makes your heart twist. Instinctively you know that if you turn to look back, the warm glowing presence will disappear forever." + "\r\n" + "\r\n" + "What do you do?",
        "image": "images/placeholder.jpg",
        "choices": {
            "Turn back to follow the crying sound.": [3],
            "Step into the glow, no looking back.": [5]
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
            "Encase your body in a very hard material and launch it into outer space.": [5],
        }
    },

    "5": {
        "text": "",
        "image": "",
        "choices": {

        }
    },

    "6": {
        "text": "",
        "image": "",
        "choices": {

        }
    },

};

let currentState = 1;

function startGame() {
    console.log('startGame Function called.');
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
        storyText.setAttribute('style', 'white-space: pre;'); //Allow adding line breaks to text
        storyText.setAttribute('style', 'overflow-wrap: break-word;'); //Wrap text 

        choicesContainer.innerHTML = '';   
        formContainer.innerHTML = '';   
        
        if (gameData[state].choices === undefined) {
            for (const [submit, userInput] of Object.entries(gameData[state].form)) {
                const input = document.createElement('input');
                input.typeName = 'text';
                input.maxLength = '25';
                input.id = 'user-input';
                const button = document.createElement('button');
                button.textContent = submit;
                button.className = 'submit-button';
                let nextState = userInput[0]; //it's basically working I just need it to read what's written behind the state and rename the variable to that 
                button.onclick = () => getInputChangeState(nextState, userInput); //
                formContainer.appendChild(input);
                formContainer.appendChild(button);
            };
            // remove one -- test, both not needed prob
            //copy choices below and adapt for form 
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


function getInputChangeState(newState, userInput) {

    var userInput = document.getElementById('user-input').value; 
    console.log(userInput)
    
    currentState = newState;

    if (currentState === 0) {
        revealEnding();
    } else {
        renderState(currentState);
    }
};

function changeState(newState, selectedEnding) {

    /*selectedEnding.forEach(ending => {
        endings[ending]++;
    });
    trace "ending" "endings" and populate */

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