/* Criando variavel */
const prevButton = document.getElementById('prev') /* O (getElementById) encontra e retornar um elemento HTML específico da página com base no valor do atributo id dele. */
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item') /* ele vai selecionar "buscar" todos que tem a classe "item" */
const dots = document.querySelectorAll('.dot')
const number = document.querySelector('.numbers') /* Usamos o (querySelector) quando queremos selecionar um item só ou quando so´tem um item com aquele id */
const list = document.querySelector('.list')

let active = 0 /* Estou usando let pq o numero pode da variavel pode mudar */
const total = items.length /* essa e a minha variavel total de items */
let timer;


function update (direction) {
    /* Aqui estamos criando uma variavel que vai procurar as classes que vamos selecionar */
    document.querySelector('.item.active').classList.remove('active')/* Quando a função achar alguma dessas classes ela vai remover */
    document.querySelector('.dot.active').classList.remove('active')


    /* SE for maior que "0" avance a casa */

    if(direction > 0){
        active = active + 1

        /* Quando chegar ao limite "2" ele retorno para a posição de inicio "0" e verifica se chegou o limite de produto */

        if(active === total){
            active = 0
        }

    }

    /* SE for menor que "0" avance uma casa para trás */
    else if(direction < 0){
        active = active - 1

        if(active <0){
            active = total - 1
        }
    }


    items[active].classList.add('active')
    dots[active].classList.add('active')

    number.textContent = String(active + 1).padStart(2,'0')
}

    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    },5000);

/* Cada botão aqui vai mandar um valor diferente */

prevButton.addEventListener('click', () => { /* O  */
    update(-1) /* esse botão sempre volta mais um item */
})

nextButton.addEventListener('click', () => {
    update(1) /* esse botão sempre avança mais um item */
})