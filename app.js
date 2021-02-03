//jshint esversion:9
const mainEl = document.getElementsByTagName('main')[0];
const voicesSelectEl = document.getElementById('voices');
const textAreaEl = document.getElementById('text');
const readBtnEl = document.getElementById('read');
const toggleBtnEl = document.getElementById('toggle');
const closeBtnEl = document.getElementById('close');

console.log(mainEl);

const data = [{
        image: './img/angry.jpg',
        text: "I'am Angry"
    },
    {
        image: './img/drink.jpg',
        text: "I need to drink"
    },
    {
        image: './img/food.jpg',
        text: "I'am Hungry"
    },
    {
        image: './img/grandma.jpg',
        text: "I want to visit my grandma"
    },
    {
        image: './img/happy.jpg',
        text: "I'am Happy"
    },
    {
        image: './img/home.jpg',
        text: "I want to go home"
    },
    {
        image: './img/hurt.jpg',
        text: "I'am Hurt"
    },
    {
        image: './img/outside.jpg',
        text: "I want to go outside"
    }
];


data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');
    const {
        image,
        text
    } = item;

    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;
    mainEl.appendChild(box);
}

let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;
        voicesSelectEl.appendChild(option);
    });
}

speechSynthesis.addEventListener('voiceschanged', getVoices);
toggleBtnEl.addEventListener('click', () => document.getElementById('text__box').classList.toggle('show'));
closeBtnEl.addEventListener('click', () => document.getElementById('text__box').classList.remove('show'));