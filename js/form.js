const botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click',function(event) {
    event.preventDefault()
    const form = document.querySelector("#form-adiciona")
    var paciente =  obtemPacienteFormulario(form)
    var erros = validaPacientes(paciente);
    
    console.log(erros);
   
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente)

    form.reset()
    var apagarMensagem = document.querySelector("#mensagens-erro")
    apagarMensagem.innerHTML = " "
    
})

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    let tabela  = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)
}



function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = " "
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    });
}


function obtemPacienteFormulario (form) {

        var paciente = {
            nome : form.nome.value,
            peso : form.peso.value,
            altura : form.altura.value,
            gordura : form.gordura.value, 
            imc : calculaImc(form.peso.value,form.altura.value)
            
        }
        return paciente

}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr")
    pacienteTr.classList.add('paciente')

   pacienteTr.appendChild(montaTD(paciente.nome,"info-nome"))
   pacienteTr.appendChild(montaTD(paciente.peso,"info-peso"))
   pacienteTr.appendChild(montaTD(paciente.altura,"info-altura"))
   pacienteTr.appendChild(montaTD(paciente.gordura,"info-gordura"))
   pacienteTr.appendChild(montaTD(paciente.imc,"info-imc"))

    

    return pacienteTr
}

function montaTD(dado,classe){
    var td = document.createElement('td')
    td.textContent = dado 
    td.classList.add(classe)
    return td
}

function validaPacientes(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}