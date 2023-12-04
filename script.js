const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    const divElement = document.createElement('div');
    divElement.id = `div${i}`;
    // divElement.textContent = i;
    container.appendChild(divElement);
    divElement.classList.add('divElement');
    // divElement.addEventListener('mouseover', () => {
    //     divElement.setAttribute('style', 'color: blue; background: white; width: 100%;');
    // })
}

const containerWidth = container.offsetWidth;
const elementWidth = Math.floor(containerWidth / 16);

divElement.style.width = `${elementWidth}px`;
divElement.style.height = `${elementWidth}px`;