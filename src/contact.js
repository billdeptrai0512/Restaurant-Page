import Map from './image/map.png';

export function addContact() {
    const content = document.createElement('div');
    content.classList.add('contact');

    const title = document.createElement('p')
    title.classList.add('words')
    title.textContent = '📱 123 456 789'

    const script = document.createElement('p')
    script.classList.add('words')
    script.textContent = '🏠 16 Dương Bá Trạc P2 Q8 TPHCM'

    const image = new Image()
    image.classList.add('map')
    image.src = Map;

    content.appendChild(title)
    content.appendChild(script)
    content.appendChild(image)
    return content;
}