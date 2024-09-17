/**
 * Simulador de operadores lógicos
 * @author Caio Castro
 */

// variaveis

let receive //variavel que amazena o valor recebido pela função
// Usada na lógica para ligar e desligar as chaves e também na lógica para acender e apagar a lâmpada
let sw1 = false
let sw2 = false
//variavel para capturar a pag html
let identify = window.location.pathname
console.log(identify) //apoio ao identimento da lógica (pág html)
// variavel para identificar a quebra da lâmpada
let broken = false 

function sw(receive) {
    //console.log(receive) //apoio da lógica (teste da função)

    //Lógica das chaves
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    } else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false
    } else if (receive === 2 && sw2 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    } else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }


    //Lógica para quebrar a lâmpada 
    if (receive === 3) {
        //reproduzindo áudio no JS
        let beep = new Audio()
        beep.src = "glassbreaking.wav"
        beep.play()
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

//ATENÇÃO NO GITHUB ACRESCENTAR O NOME DO REPOSITORIO ANTES DA PAGINA NAS ESTRUTURAS ABAIXO EX:  /simulator/and.htm no lugar de /and.html

     //Lógica do operador And
     if (identify === "/simulator/and.html" && broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    }

        //Lógica do operador Or
        if (identify === "/simulator/or.html" && broken !== true) {
            if (sw1 === true || sw2 === true) {
                document.getElementById('lamp').src = "img/on.jpg"
            } else {
                document.getElementById('lamp').src = "img/off.jpg"
            }
        }
                //Lógica do operador Not
                if (identify === "/simulator/not.html" && broken !== true) {
                    if (!sw1) {
                        document.getElementById('lamp').src = "img/on.jpg"
                    } else {
                        document.getElementById('lamp').src = "img/off.jpg"
                    }
                }
}



//Atualizar automaticamente o ano no rodape

let ano = document.getElementById('copyrightYear')
let anoAtual = new Date().getFullYear()
ano.textContent = anoAtual

