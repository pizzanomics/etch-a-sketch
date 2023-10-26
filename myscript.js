const canvasInitialiser = document.querySelector('#canvas-initialiser')
const canvas = document.querySelector('#canvas')


canvasInitialiser.addEventListener('click', () => {
    
        canvas.innerHTML = '';
        let totalSquares = 16 * 16

        for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        canvas.appendChild(square);
        

        canvas.style.border = "2px solid black";

        square.addEventListener('mouseover', () => {
                square.style.backgroundColor = "red";
            });
        }
    
});

