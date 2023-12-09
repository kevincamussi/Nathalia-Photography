document.getElementById('portfolio').onload=exibirImagem();

/*****      Exibe as imagens no site   - Display images in website    *****/

function exibirImagem(){

  const numeroFotos = 89;
  
  for(i=1; i<numeroFotos ; i++){
    var img = document.createElement('img');
    img.classList.add('img-portfolio');
    img.src=`img/portfolio/img${i}.jpg`;
    document.getElementById('enviaImg').appendChild(img);
  }

  /*****    Abrir imagem em outra tab  - Open images in new tab  ****/
  
  var enderecoImg = document.querySelectorAll('.img-portfolio');
   enderecoImg.forEach(enderecoImg => {
    enderecoImg.addEventListener('click',(e)=>{
    window.open(e.target.src);
    })
 });
}

/**** Rolar ao topo  -  Scroll to top   ****/

const button = document.getElementById('scroll');
button.addEventListener('click',()=>{
window.scrollTo(top);
})
