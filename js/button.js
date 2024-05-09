const turn = document.getElementById('turn')
const area = document.getElementById('area')
const paragrafo = document.getElementById('paragrafo')
let buttons = document.getElementsByClassName('boxx')
let bodd = document.getElementById('bodd')


turn.onclick = () => {
    console.log(turn.classList); // Verifica o valor da propriedade classList


    if (turn.classList.contains('turn') || turn.classList.contains('turnoff')) {
        turn.classList.remove('turn');
        turn.classList.remove('turnoff');
        turn.classList.add('turon');
        area.classList.add('area-turn-off')

        paragrafo.classList.remove('mudarnome2')
        paragrafo.classList.add('mudarnome')
        setTimeout(()=> {
            paragrafo.innerHTML = 'Outros'
        },500)

        bodd.classList.remove('darkmode')
        bodd.classList.add('lightmode')
        
        let conter = document.querySelectorAll('#conter')
        let w25 = document.querySelectorAll('#w25')

        w25.forEach((w25outro) => {
            w25outro.classList.remove('slideright')
            w25outro.classList.add('slideleft')
            setTimeout(() => {
                w25outro.style.display = 'none'
                    conter.forEach((conteroutro) => {
                        conteroutro.classList.add('slideup')
                        conteroutro.style.display = 'inherit'
                    })
                
                
            }, 1000);
            

        })

    }else{
        turn.classList.remove('turnon')
        turn.classList.add('turnoff')
        area.classList.remove('area-turn-off')
        area.classList.add('area-turn-on')

        paragrafo.classList.remove('mudarnome')
        paragrafo.classList.add('mudarnome2')
            setTimeout(() => {
                paragrafo.innerHTML = 'Packs'
            }, 500);

            let conter = document.querySelectorAll('#conter')
            let w25 = document.querySelectorAll('#w25')
            w25.forEach((w25outro) => {
                w25outro.classList.remove('slideleft')
                w25outro.classList.add('slideright')
                setTimeout(() => {
                    conter.forEach((conteroutro) => {
                        conteroutro.classList.remove('slideup')
                        conteroutro.style.display = 'none'
                    })
                    w25outro.style.display = 'inline-block'
                }, 200);
                
    
            })

        }
}
