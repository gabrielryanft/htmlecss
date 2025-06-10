const texto = document.querySelector("#texto")
const div_txt = document.querySelector("#div_txt")
function trocar_texto(){
    const input_texto = document.querySelector("#input_texto").value
    if(input_texto == ""){
        animacao(texto.textContent)   
    } else{
        animacao(input_texto)
    }
    
}

function animacao(texto_usr){
    div_txt.innerHTML = ""
    setTimeout(() =>{
        div_txt.innerHTML = `<p id="texto">${texto_usr}</p>`
    }, 500)

    document.documentElement.style.setProperty("--numero_caracteres", texto_usr.length + 1)
    document.documentElement.style.setProperty("--numero_caracteres_ch", texto_usr.length + 1 + "ch")
    document.documentElement.style.setProperty("--tempo_digitacao", (texto_usr.length + 1) * 0.2 + "s")
}

trocar_texto()