document.addEventListener('DOMContentLoaded', function () {

    //opção se você não quiser que a barra no nav siga a sua posição na pagina emquanto você navega palo site: (versão simples)

    // const links = document.querySelectorAll('nav a')
    // const barra = document.querySelector('#barra')

    // links.forEach(function (link, index) {
    //     link.addEventListener('click', function () {
    //         barra.style.left = index * 25 + '%'
    //     })
    // })

    const h1s = document.querySelectorAll(".h1s")
    
    window.addEventListener("scroll", () =>{
        h1s.forEach(function (h1, index){
            if(pegapos(h1)){
                document.documentElement.style.setProperty("--left_barra", `${index * 25}%`)
            }
        })
    })
})

function pegapos(item){
    var pos = item.getBoundingClientRect()
    if (pos.top <= ((window.screen.height) / 2)){
        return true
    } else{
        return false
    }
}
