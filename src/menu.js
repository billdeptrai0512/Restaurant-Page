import com1 from './image/com1.png';
import com2 from './image/com2.png';
import com3 from './image/com3.png';
import com4 from './image/com4.png';
import com5 from './image/com5.png';



export function addMenu() {
    const content = document.createElement('div');
    content.classList.add('menu')

    const grid1 = document.createElement('div')
    grid1.classList.add('grid')

    const food1 = new Image()
    food1.classList.add('food')
    food1.src = com5
    
    const title = document.createElement('h2')
    title.classList.add('food-title')
    title.textContent = 'Cơm Tấm Sườn'

    const describe = document.createElement('p')
    describe.classList.add('food-describe')
    describe.textContent = 'Cơm, Sườn, Mỡ hành, Cà Chua, Dưa Leo'

    grid1.appendChild(food1)
    grid1.appendChild(title)
    grid1.appendChild(describe)
    content.appendChild(grid1)

    ///////////////////////////

    const grid2 = document.createElement('div')
    grid2.classList.add('grid')

    const food2 = new Image()
    food2.classList.add('food')
    food2.src = com2
    
    const title2 = document.createElement('h2')
    title2.classList.add('food-title')
    title2.textContent = 'Sườn Trứng'

    const describe2 = document.createElement('p')
    describe2.classList.add('food-describe')
    describe2.textContent = 'Cơm, Sườn, Trứng, Mỡ hành, Cà Chua, Dưa Leo'

    grid2.appendChild(food2)
    grid2.appendChild(title2)
    grid2.appendChild(describe2)
    content.appendChild(grid2)

    //////////////////////////////

    const grid3 = document.createElement('div')
    grid3.classList.add('grid')

    const food3 = new Image()
    food3.classList.add('food')
    food3.src = com3
    
    const title3 = document.createElement('h2')
    title3.classList.add('food-title')
    title3.textContent = 'Sườn Bì Chả'

    const describe3 = document.createElement('p')
    describe3.classList.add('food-describe')
    describe3.textContent = 'Cơm, Sườn, Bì, Chả, Mỡ hành, Cà Chua, Dưa Leo'

    grid3.appendChild(food3)
    grid3.appendChild(title3)
    grid3.appendChild(describe3)
    content.appendChild(grid3)

    //////////////////////////////

    const grid4 = document.createElement('div')
    grid4.classList.add('grid')

    const food4 = new Image()
    food4.classList.add('food')
    food4.src = com4
    
    const title4 = document.createElement('h2')
    title4.classList.add('food-title')
    title4.textContent = 'Sườn Bì Chả Trứng'

    const describe4 = document.createElement('p')
    describe4.classList.add('food-describe')
    describe4.textContent = 'Cơm, Sườn, Bì, Chả, Trứng, Mỡ hành, Cà Chua.'

    grid4.appendChild(food4)
    grid4.appendChild(title4)
    grid4.appendChild(describe4)
    content.appendChild(grid4)


    return content;
}

