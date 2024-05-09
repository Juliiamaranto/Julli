let w25 = document.querySelectorAll('.w25') 
let img = document.querySelectorAll('.img')


w25.forEach((w25outro, index)=> {
    w25outro.addEventListener('mouseenter', () =>{

        if(index - 2){
            if(img[index]){
                img[index].classList.add('sumidao')
            }
        }else{
            img[index].classList.add('sumidao2')
        }

        w25outro.style.scale = 1.1
        w25outro.style.transition = '0.3s'


        w25.forEach((outroelemento) => {
            if(outroelemento != w25outro){
                outroelemento.classList.add('desfocado')
            }
        })
    })

    w25outro.addEventListener('mouseleave', () => {
        w25outro.style.scale = 1
        w25outro.style.transition = '0.3s'

        if(img[index]){
            img[index].classList.remove('sumidao')
            img[index].classList.remove('sumidao2')
        }

        
        w25.forEach((outroelemento) => {
            if(outroelemento != w25outro){
                outroelemento.classList.remove('desfocado')
            }
        })

    })

})

function copiarConteudo() {
    let isthisbotao = document.getElementById('botaoCopiar')
    isthisbotao.textContent = 'Código Copiado!'

    let ocultcontent = document.getElementById('contentocult')
    ocultcontent.style.display = 'block'

    // Conteúdo do botão para ser copiado
    const conteudo = document.getElementById("conteudooculto").innerText;

    // Cria um campo de texto temporário para copiar o conteúdo
    const campoTemporario = document.createElement("textarea");
    campoTemporario.value = conteudo;
    document.body.appendChild(campoTemporario);

    // Seleciona o conteúdo no campo de texto
    campoTemporario.select();
    document.execCommand("copy"); // Copia para a área de transferência

    // Remove o campo temporário
    document.body.removeChild(campoTemporario);

    // Alerta para confirmar que o conteúdo foi copiado
    alert("Pix Copiado!:");
}


