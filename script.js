const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    const divElement = document.createElement('div');
    divElement.id = `div${i}`;
    // divElement.textContent = i;
    container.appendChild(divElement);
    divElement.classList.add('divElement');
    divElement.addEventListener('mouseover', () => {
        divElement.classList.add('divElement-mouseover');
    })
}

// divElement.setAttribute('style', 'color: blue; background: white;');

// divElement.classList.add('divElement-mouseover');