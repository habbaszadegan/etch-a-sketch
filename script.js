const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSizeInput');

const RED = Math.floor(Math.random() * 255);
const BLUE = Math.floor(Math.random() * 255);
const GREEN = Math.floor(Math.random() * 255);
const rgbCOLOR = `rgb(${RED}, ${GREEN}, ${BLUE})`;

let gridNum = 16;

function createGrid (arshalanNum) {
    for (let i = 1; i <= arshalanNum * arshalanNum; i++) {
        let containerSize = 500/arshalanNum;
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
    gridNum = prompt('Grid size? Input between 1 - 64', '');
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

// second attempt at assignment

// const main = document.querySelector('.main');
// const newGrid = document.querySelector('.new-grid');

// function createGrid (gridRows = 16) {

//     for (let i = 0; i < (gridRows*gridRows); i++) {
//         const box = document.createElement('div');
//         main.appendChild(box);
//         box.classList.add('box');
//         box.style.flexBasis = `calc(100% / ${gridRows})`;
//         box.addEventListener('mouseover', () => box.classList.add('box-hovered'));
//     }
// }

// function userGrid () {
//     newGrid.addEventListener('click', () => {
//         while (main.firstChild) {
//             main.firstChild.remove();
//         }
//         const totalBoxes = +prompt('What size grid would you like?', '');
//         createGrid(totalBoxes);
//     })
// }


// createGrid();
// userGrid();