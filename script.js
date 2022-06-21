let bundeslaender =[];
let letters =['Alle'];

async function loadBundeslaender(){
    let response = await fetch('bundesland.json');
    bundeslaender = await response.json();
    renderBundeslaender();
}

function renderBundeslaender(letter){
    document.getElementById('contentArea').innerHTML = '';
    for (let index = 0; index < bundeslaender.length; index++) {
        const bundesland = bundeslaender[index];
        let name = bundesland['name'];
        let firstLetter = name.charAt(0)
        let population = (bundesland['population'] + '').replace(".",",") + ' Millionen';
        let url = bundesland['url'];
        if (!letter || letter == firstLetter) {
            document.getElementById('contentArea').innerHTML += templateBundeslaender(url,name,population);
        }
        if (!letters.includes(firstLetter)) {letters.push(firstLetter);}
    }
    renderFirstLetters();
}

function renderFirstLetters(){
    document.getElementById('letterArea').innerHTML ='';
    for (let index = 0; index < letters.length; index++) {
        const letter = letters[index];
        document.getElementById('letterArea').innerHTML += templateFirstLetters(letter);
    }
}

function selectLetter(letter){
    if(letter == 'Alle'){
        renderBundeslaender();
    }else{
       renderBundeslaender(letter); 
    }
}

function templateFirstLetters(letter){
    return/*html*/`
    <div class="letterBox" onclick="selectLetter('${letter}')">${letter}</div>
    `;
}

function templateBundeslaender(url,name,population){
    return/*html*/`
        <a class="bundeslandContainer" href="${url}" target="_blank">
            <div>${name}</div>
            <div class="textColorGrey">${population}</div>
        </a>
        `;
}