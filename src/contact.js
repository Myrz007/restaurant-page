export default function contactComponent() {
    const mainElement = document.createElement('div');
    const title = document.createElement('h1');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p')

    title.innerHTML = 'Contact Us';
    address.innerHTML = 'Barney\'s Tavern<br>123 Somewhere Street<br>Somewhere around the world and maybe closer than you think';
    phoneNumber.innerHTML = 'Call +01 1234567890';
    
    mainElement.append(title, address, phoneNumber);

    return mainElement;
}
