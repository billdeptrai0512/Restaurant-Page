import _ from 'lodash';
import './style.css';
import { addHome } from './home';
import { addMenu } from './menu';
import { addContact } from './contact';

const page = document.querySelector('#content')

function addContent() {
    const header = document.createElement('header');
    header.classList.add('header')

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Cơm Tấm 16";
    header.appendChild(title);

    const nav = document.createElement('nav');
    const button1 = document.createElement('button');
    button1.classList.add('button')
    button1.setAttribute('id', 'home')
    button1.textContent = "Home";
    nav.appendChild(button1);

    const button2 = document.createElement('button');
    button2.textContent = "Menu";
    button2.classList.add('button')
    button2.setAttribute('id', 'menu')
    nav.appendChild(button2);

    const button3 = document.createElement('button');
    button3.textContent = "Contact";
    button3.classList.add('button')
    button3.setAttribute('id', 'contact')
    nav.appendChild(button3);
    
    header.appendChild(nav);
    page.appendChild(header)

    ///////////////////// Add body

    const body = document.createElement('body')

    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');

    body.appendChild(addHome());

    home.addEventListener('click', () => {
        body.innerHTML = '';
        body.appendChild(addHome());
    });

    menu.addEventListener('click', () => {
        body.innerHTML = '';
        body.appendChild(addMenu());
    })

    contact.addEventListener('click', () => {
        body.innerHTML = '';
        body.appendChild(addContact());
    })

    page.appendChild(body)


    //////////// Add footer
    // add github logo next to the footer
    const footer = document.createElement('footer');
    footer.classList.add('footer')
    footer.textContent = "Copyright © 2023 billdeptrai0512"
    page.appendChild(footer)

    return page
}

addContent();



