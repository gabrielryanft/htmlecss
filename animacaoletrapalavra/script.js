document.body.onload = onda()

function onda(){
    const div_letter = document.querySelector("main")

    for(i=0;i<(div_letter.children.length - 1);i++){
        div_letter.children[i].style.animationDelay = `${(i / 3) * 1}s`
    }
}