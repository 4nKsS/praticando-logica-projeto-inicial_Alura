let amigos =[];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value==""){
        alert("informe o nome do amigo")
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }
    
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);

    if(lista.textContent == ""){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ", " + amigo.value
    }

    amigo.value=""
}

function sortear(){
    embaralha(amigos);
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    let listaSorteio = document.getElementById("lista-sorteio");
    for(let i=0; i < amigos.length; i++){

        if(i == amigos.length-1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos [i]+ "---->"+ amigos[0] + "<br>"  
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos [i]+ "---->"+ amigos[i + 1] + "<br>"
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos =[]
    listaSorteio = document.getElementById("lista-sorteio").innerHTML="";
    amigo = document.getElementById("nome-amigo").textContent="";
    lista = document.getElementById("lista-amigos").textContent="";
}