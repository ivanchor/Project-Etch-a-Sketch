gridContainer = document.querySelector(".container")

function createGrid(size){
    const box_width = gridContainer.offsetWidth / size;
    const box_height = gridContainer.offsetWidth / size;

    for(i = 0; i < size*size; i++){
        const box = document.createElement(`div`)
        box.className = "squares"
        box.style.backgroundColor = 'white'
        box.style.width = `${box_width}px`;
        box.style.height = `${box_height}px`;
        // box.style.width=`calc(1000px/${size})`;
        // box.style.height=`calc(1000px/${size})`;


        box.addEventListener('mouseover', () => {
            if(box.style.backgroundColor == 'white')
                box.style.backgroundColor = 'black';
            else
                box.style.backgroundColor = 'white';
            
        })

        gridContainer.appendChild(box);
        
    }
}

createGrid(16)
console.log(gridContainer.offsetWidth/16)
console.log(gridContainer.offsetWidth)