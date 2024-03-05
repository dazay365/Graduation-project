const container = document.querySelector('.container');
const cardsContent = [
    [
        'img/vel.jpeg',
        'img/vel.jpeg',
        'img/vel.jpeg'
    ],
    [
        'Product 1',
        'Product 2',
        'Product 1'
    ],
    [
        'Description of Product 1. Lorem ipsum dolor sit amet.',
        'Description of Product 2. Consectetur adipiscing elit.',
        'Description of Product 2. Consectetur adipiscing elit.'
    ],
]

const createCards = () =>{

    for(let i = 0; i<cardsContent[0].length; i++){
        const card = document.createElement('div');
        card.classList.add('card');
        const image = document.createElement('img');
        image.src = cardsContent[0][i];
        card.append(image);
        const content = document.createElement('div');
        content.classList.add('card-content');
        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = cardsContent[1][i];
        content.append(title);
        const description = document.createElement('div');
        description.classList.add('card-description');
        description.textContent = cardsContent[2][i];
        content.append(description);
        card.append(content);
        container.append(card)
    }

}
createCards()