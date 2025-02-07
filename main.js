function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //template string

  listaDeTeclas[contador].onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onKeydown = function(evento){

    if(evento.code === 'Space' || 'Enter'){
      tecla.classList.add('.ativa');

    }

  }

  tecla.onKeyup = function(){
    tecla.classList.remove('ativa');
  }

}
