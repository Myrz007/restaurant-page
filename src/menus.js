class Menu {
    constructor(menuName, starter, dish, dessert, price) {
        this.menuName = menuName;
        this.starter  = starter;
        this.dish     = dish;
        this.dessert  = dessert;
        this.price    = price;
    }

    get createComponent() {
        const element     = document.createElement('div');
        const name        = document.createElement('h3');
        const list        = document.createElement('ul');
        const starterLine = document.createElement('li');
        const dishLine    = document.createElement('li');
        const dessertLine = document.createElement('li');
        const priceTag    = document.createElement('p');

        name.innerHTML        = this.menuName;
        starterLine.innerHTML = this.starter;
        dishLine.innerHTML    = this.dish;
        dessertLine.innerHTML = this.dessert;
        priceTag.innerHTML    = this.price;

        list.append(starterLine, dishLine, dessertLine);
        element.append(name, list, priceTag);

        return element;
    }
}

export default function menusComponent() {
    const mainElement = document.createElement('div');
    const title       = document.createElement('h1');

    title.innerHTML = 'Our Menus';

    mainElement.append(title);

    return mainElement;
}
