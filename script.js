let nameInput = document.getElementById('name');
let btn = document.querySelector('.name-btn');
let text = document.querySelector('.prompt-text');
let prompt = document.querySelector(".prompt");

btn.addEventListener('click', () => {
    let name = nameInput.value;
    name = name.toLowercase();
    console.log(name, "name")
    nameInput.value = "";
    
    if (name == "shivani" || name == "shivani muthoju" || name == "spandana" || name == "spandana katta")
    {
        text.innerText = "Emi ra Balraju Emi ra Deshaniki ne valla upayogam";
        prompt.style.display = "grid";
        closePrompt();
    }
    else {
        text.innerText = "Yedhava te te lu adaku per kottu";
        prompt.style.display = "grid";
        closePrompt();
    }
    
})

function closePrompt() {
    setTimeout(() => {
        prompt.style.display = "none";
    },5000)
}
