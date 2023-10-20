const botaoBuscar = document.querySelector("#buscar-paciente")

botaoBuscar.addEventListener("click",()=>{
    console.log("buscando")

    let xhr = new XMLHttpRequest()

    xhr.open("get", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    
    xhr.addEventListener("load", ()=>{

        if(xhr.status == 200){

        let resposta = xhr.responseText
        let pacientes = JSON.parse(resposta)

        pacientes.forEach((paciente) => {
            adicionaPacienteNaTabela(paciente)
        });
    }
    else{
        console.log(xhr.status)
        console.log(xhr.responseText)
        const erroAjax = document.querySelector("#erro-ajax")
        erroAjax.classList.remove("invisivel")
    }

    })

    xhr.send()



    // xmlHttprequest
    //https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json
})