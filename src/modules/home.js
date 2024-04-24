export default function homeComponent() {
    const mainElement = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    title.innerHTML = 'Barney\'s Tavern';
    description.innerHTML = 'Welcome to Barney\'s Tavern! All we serve is elaborated with fresh ingredients collected from our trustworthy local partners. Just come, relax and enjoy a great time!';
    image.src = './images/tavern.jpg';
    
    mainElement.setAttribute('id', 'home-content');
    mainElement.append(title, description, image);

    return mainElement;
}
