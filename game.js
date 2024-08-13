const endings = {

};


const gameData = {
    "1": {
        "text": "You awake to un-life, a strange inverted non-existence. You hear no sounds, just a resounding silence. You have no eyes, and there is no light, but you see the void stretch ahead of you endlessly." + "\r\n" + "\r\n" + "A thought presents itself: who was I?",
        "image": "images/placeholder.jpg",
        "choices": {
            "Placeholder 1": [2],
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
            "Bury you in a biodegradable shroud under the roots of a tree that you used to visit often with your dearest friends.": [5],
            "Cremate you and keep the urn in your family home, beside other family members who passed before you.": [5],
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

    console.log('renderState Function called.');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        storyText.setAttribute('style', 'white-space: pre;'); //Allow adding line breaks to text
        choicesContainer.innerHTML = '';   

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        };
    };
};


function changeState(newState, selectedEnding) {
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