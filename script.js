async function loadBundeslaender(){
    let response = await fetch('bundesland.json');
    let responseData = await response.json();
    
    for (let index = 0; index < responseData.length; index++) {
        const bundesland = responseData[index];
        let name = bundesland['name'];
        let population = bundesland['population'];
        let url = bundesland['url'];
        console.log(bundesland);
        document.getElementById('contentArea').innerHTML += /*html*/`
        <a href="${url}" target="_blank">
            <div>${name}</div>
            <div>${population}</div>
        </a>
        `;
    }
}