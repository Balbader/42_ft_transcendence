class Card {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    render() {
        const card = document.createElement('div');
        const cardTitle = document.createElement('h2');
        const cardContent = document.createElement('p');

        card.className = 'card';
        cardTitle.innerText = this.title;
        cardContent.innerText = this.content;

        card.appendChild(cardTitle);
        card.appendChild(cardContent);

        return card;
    }
}

export default Card;
