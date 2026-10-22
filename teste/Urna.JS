let votos = {

"João Silva":0,
"Maria Souza":0

};



function votar(nome){


votos[nome]++;


document.getElementById("resultado").innerHTML =
"Voto confirmado em: " + nome;



let audio = document.getElementById("audio");

audio.play();


console.log(votos);


}
