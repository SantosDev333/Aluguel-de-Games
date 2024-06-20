let quantidade = 0;

function alterarStatus(id) {
    console.clear();
    
    let game = document.getElementById(`game-${id}`);
    let img = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');

    if (img.classList.contains('dashboard__item__img--rented')) {
        let decisao = prompt('Deseja realmente devolver o game?');

        if(decisao == 'Sim'){
            img.classList.remove('dashboard__item__img--rented');
            button.textContent = 'Alugar';
            button.classList.remove('dashboard__item__button--return');
        }

    } else {
        img.classList.add('dashboard__item__img--rented');
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        quantidade ++;
    }

    console.log(`${quantidade} jogos vendidos`);
}
