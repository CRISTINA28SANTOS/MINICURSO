const imagem = document . querySelector('img'); /*Cria constante para receber a imagem*/
const botao = document . querySelector('button'); /*Cria constante para receber o botao*/
const nomeDoPersonagem = document . querySelector('#nome'); /*Captura a li do nome*/
const especie = document . querySelector('#especie'); /*Captura a li da especie*/
const condicao = document . querySelector('#condicao'); /*Captura a li da condicao*/

traduzirCondicao = (data) => {
    if (dados . status =='desconhecido'){
        return 'Não sei';
    } else if(data . status == 'Alive') {
        return 'Sim';
    }
    else {
        return 'Não. Está morto';
    }
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

/* aerow funcion*/
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${ numeroAleatorio}` , {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type" : 'application/json'
        }
    
    } ) . then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name; /* Nomeia a imagem, com o nome da imagem original */
        nomeDoPersonagem.innerHTML = data.name;/* Escreve o nome da imagem  */
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;

    }); /* retorna os dados da API */
}
botao.onclick = pegarPersonagem;