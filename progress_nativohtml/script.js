const barra = document.querySelector("#barra_progresso")
const filething = document.querySelector("#filething")
const progresso = document.querySelector("#progresso")

filething.addEventListener("change", () =>{
    let numberOfBytes = 0;

    for (const file of filething.files) {
        numberOfBytes += file.size; 
    }

    if((`${numberOfBytes}`.length)>=("1000000000000".length)){
        numberOfBytes = numberOfBytes / 1000000000000
        var medida = "TB"
    } else if ((`${numberOfBytes}`.length)>=("1000000000".length)){
        numberOfBytes = numberOfBytes / 1000000000
        var medida = "GB"
    } else if ((`${numberOfBytes}`.length)>=("1000000".length)){
        numberOfBytes = numberOfBytes / 1000000
        var medida = "MB"
    } else if ((`${numberOfBytes}`.length)>=("1000".length)){
        numberOfBytes = numberOfBytes / 1000
        var medida = "KB"
    } else {
        numberOfBytes = numberOfBytes / 1
        var medida = "B"
    }   

    const um_cem = numberOfBytes / 100
    for(let i=0;i<=100;i++){
        setTimeout(() =>{
            progresso.textContent = `${(um_cem*i).toFixed(2)}${medida}`
            barra.value = i
        }, 50 * i)
    
    }
})

