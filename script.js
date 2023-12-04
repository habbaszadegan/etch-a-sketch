const container = document.querySelector('#container');
const gridSizeInput = document.querySelector('#gridSizeInput');
const gridSizeOutput = document.querySelector('#gridSizeOutput');

// function lessThan100 (num) {
//     if (num > 100 || num < 1) {
//         return "Please input number between 1 and 100"
//     }
// }

gridSizeInput.addEventListener('click', () => {
    let gridNum = prompt('Grid size? Input between 1 - 100', '');
    if (gridNum > 100 || gridNum < 1) {
        return "please input number between 1 and 100";
    }
})

// store user input in variable. use that variable to create new grid.

for (let i = 1; i <= 256; i++) {
    const divElement = document.createElement('div');
    divElement.id = `div${i}`;
    container.appendChild(divElement);
    divElement.classList.add('divElement');
    divElement.addEventListener('mouseover', () => {
        divElement.classList.add('divElement-mouseover');
    })
}