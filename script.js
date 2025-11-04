gridContainer = document.querySelector(".container")

function createGrid(size){
    const box_width = gridContainer.offsetWidth / size;
    const box_height = gridContainer.offsetWidth / size;

    for(i = 0; i < size*size; i++){
        const box = document.createElement(`div`)
        box.style.width = `${box_width}px`;
        box.style.height = `${box_height}px`;
        gridContainer.appendChild(box);
        
    }
}

createGrid(16)
console.log(gridContainer.offsetWidth/16)