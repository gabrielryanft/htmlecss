
cor = document.querySelector("#cor")
cor.addEventListener("input", muda_cor, false)

function muda_cor() {
    document.body.style.backgroundColor = cor.value
}
