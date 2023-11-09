import Chef from './image/chef.png'

export function addHome() {
    const content = document.createElement('div')
    content.classList.add('board')

    const title = document.createElement('p')
    title.classList.add('words')
    title.textContent = 'The belief of every meal'

    const script = document.createElement('p')
    script.classList.add('words')
    script.textContent = 'Delicious - Nutritious - Affordable'

    const image = new Image()
    image.classList.add('image')
    image.src = Chef


    const cta = document.createElement('p')
    cta.classList.add('words')
    cta.textContent = 'Order online or visit us!'

    content.appendChild(title)
    content.appendChild(script)
    content.appendChild(image)
    content.appendChild(cta)

    return content
}

