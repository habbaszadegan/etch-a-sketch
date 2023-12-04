const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSizeInput');
const gridSizeOutput = document.querySelector('#gridSizeOutput');

const RED = Math.floor(Math.random() * 255);
const BLUE = Math.floor(Math.random() * 255);
const GREEN = Math.floor(Math.random() * 255);
const rgbCOLOR = `rgb(${RED}, ${GREEN}, ${BLUE})`;

let gridNum = 16;

function createGrid (gridNum) {
    for (let i = 1; i <= gridNum * gridNum; i++) {
        let containerSize = 500/gridNum;
        const divElement = document.createElement('div');
        container.appendChild(divElement);
        divElement.classList.add('divElement');
        divElement.setAttribute('style', `flex: 1 1 ${containerSize}px;`);
        divElement.addEventListener('mouseover', () => {
            divElement.classList.add('divElement-mouseover');
            divElement.setAttribute('style', `flex: 1 1 ${containerSize}px; background: ${rgbCOLOR}`);
        })
    }
}

function deleteGrid () {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

gridSizeInput.addEventListener('click', () => {
    gridNum = prompt('Grid size? Input between 1 - 100', '');
    if (gridNum === null || gridNum === '') {
        return;
    }
    gridNum = parseInt(gridNum);
    if (isNaN(gridNum) || gridNum > 64 || gridNum < 1) {
        alert("please input number between 1 and 64");
        return;
    }
    deleteGrid();
    createGrid(gridNum);
})

createGrid(gridNum);