const modal = document.querySelector("#modal")
const abrir_modal = document.querySelector("#abrir_modal")
const fechar_modal = document.querySelector("#fechar_modal")

abrir_modal.addEventListener("click", () =>{
    modal.showModal()
    console.log("Modal aberto!")
})
fechar_modal.addEventListener("click", () => {
    modal.close()
    console.log("Modal fechado!")
})