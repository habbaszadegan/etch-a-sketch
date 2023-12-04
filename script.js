const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSizeInput');
const gridSizeOutput = document.querySelector('#gridSizeOutput');

let gridNum = 16;

// function lessThan100 (num) {
//     if (num > 100 || num < 1) {
//         return "Please input number between 1 and 100"
//     }
// }

gridSizeInput.addEventListener('click', () => {
    gridNum = prompt('Grid size? Input between 1 - 100', '');
    if (gridNum === null || gridNum === '') {
        return;
    }
    gridNum = parseInt(gridNum);
    if (isNaN(gridNum) || gridNum > 100 || gridNum < 1) {
        alert("please input number between 1 and 100");
        return;
    }
    console.log(`gridNum is: ${gridNum}`);
})

// store user input in variable. use that variable to create new grid.

for (let i = 1; i <= gridNum * gridNum; i++) {
    const divElement = document.createElement('div');
    container.appendChild(divElement);
    divElement.classList.add('divElement');
    divElement.addEventListener('mouseover', () => {
        divElement.classList.add('divElement-mouseover');
    })
}