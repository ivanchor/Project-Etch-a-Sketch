gridContainer = document.querySelector(".container")

// Trying to add branch to git repo

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

        let opac = 0
        box.addEventListener('mouseover', () => {
            red   =  Math.floor(Math.random() * 255);
            green =  Math.floor(Math.random() * 255);
            blue  =  Math.floor(Math.random() * 255);

            opac += 0.2

            box.style.background = `rgba(${red}, ${green}, ${blue}, ${opac})`;
            // box.style.opacity = opac;
            //console.log("This box opac " + opac)
            // if(box.style.backgroundColor == 'white')
            //     box.style.backgroundColor = 'black';
            // else
            //     box.style.backgroundColor = 'white';
            
        })

        gridContainer.appendChild(box);
        
    }
}

gridButton = document.querySelector(".newGridButton")
gridButton.addEventListener('click', () => {
    newSize = prompt("Enter a number from 1-100");
    if(/^(100|[1-9]\d?)$/.test(newSize)){
        gridContainer.innerHTML = "";
        createGrid(newSize)
    }
    else{
        alert("Invalid number")
    }
    
})

createGrid(16)
console.log(gridContainer.offsetWidth/16)
console.log(gridContainer.offsetWidth)