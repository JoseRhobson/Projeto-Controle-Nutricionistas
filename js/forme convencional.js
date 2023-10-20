const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click',function(event) {
    event.preventDefault()
   
   
    
const form = document.querySelector("#form-adiciona")
//extraindo infomaçoes do form
    const nome = form.nome.value
    const peso = form.peso.value
    const altura = form.altura.value
    const gordura = form.gordura.value 

let pacienteTr = document.createElement("tr")
    //cria tr e ts pacientes
    const nomeTd = document.createElement("td")
    const pesoTd = document.createElement("td")
    const alturaTd = document.createElement("td")
    const gorduraTd = document.createElement("td")
    const imcTd = document.createElement("td")

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = calculaImc(peso,altura)


    // adicionando pacientes na tabela
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

let tabela  = document.querySelector("#tabela-pacientes")

        tabela.appendChild(pacienteTr)
        console.log(tabela)
    
})

