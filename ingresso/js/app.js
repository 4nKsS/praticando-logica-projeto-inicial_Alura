function comprar(){
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    let limitePista = parseInt(document.getElementById("qtd-pista").innerText);
    let limiteInferior = parseInt(document.getElementById("qtd-inferior").innerText);
    let limiteSuperior =  parseInt(document.getElementById("qtd-superior").innerText);
    if (ingresso== "inferior" && limiteInferior>=quantidade && limiteInferior>0 ){
        limiteInferior=limiteInferior-quantidade;
        document.getElementById("qtd-inferior").textContent = limiteInferior.toString();
    }
    else if(ingresso=="superior"&& limiteSuperior>=quantidade && limiteSuperior>0){
    limiteSuperior=limiteSuperior-quantidade;
    document.getElementById("qtd-superior").textContent = limiteSuperior.toString();     
        
    }
    else if(ingresso=="pista"&& limitePista>=quantidade && limitePista>0){
        limitePista=limitePista-quantidade;
        document.getElementById("qtd-pista").textContent = limitePista.toString();

    }else{
        alert("quantidade indisponivel")
    }


    
}
if (ingresso == "inferior" && limiteInferior >= quantidade && limiteInferior > 0) {
    limiteInferior = limiteInferior - quantidade;
    document.getElementById("qtd-inferior").textContent = limiteInferior.toString();
}
