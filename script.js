//passo 1: pegar todos os pets da página

const pets = document.querySelectorAll(".pet")

//passo 2: pegamos os elementos do card principal
//estes são os campos (lugares) onde vamos colocar as informações do pet clicado

const nome = document.getElementById("nomeDoPet")
const descricao = document.getElementById("descricao")
const fotoGrande = document.getElementById("fotoGrande")


// for(inicialização; condição; incremento){
// codigo a ser executado
// }

// Ele faz: comece no pet 0, depois vá para o pet 1, depois para o pet 2, e assim por diante, até o último pet 4, onde finaliza a quantidade dos elementos que tem na variável.

//0 é menor do que 4 =VERDADEIRO (continue o loop)
//1 é menor do que 4 =VERDADEIRO (continue o loop)
//2 é menor do que 4 =VERDADEIRO (continue o loop)
//3 é menor do que 4 =VERDADEIRO (continue o loop)
//4 é menor do que 4 =FALSO (finaliza o loop)

// pets.lenght: quantidade de pets
for(let i = 0; i <pets.length; i++){

    //pegamos o pet atual
    const pet = pets[i]

    //capturamos a imagem do pet atual
    const miniatura = pet.querySelector("img")

    //passo 4: quando clicarem na miniatura (imagem)

    //pega as informações e coloca no card principal quando miniatura da imagem for clicada
    miniatura.addEventListener("click", () => {
        //troca o nome h1 
        nome.textContent = pet.querySelector("h2").textContent
        descricao.textContent = pet.querySelector(".descricao").textContent
        fotoGrande.src = miniatura.src
    })

}
//-----esse código até aqui faz com que ao clicar na miniatura do pet, o card principal seja atualizado com as informações do pet clicado.-----//