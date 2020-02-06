const addAnimation = () => {
    const cells = document.querySelectorAll(".highlight-horizontal");
    const vertCells = document.querySelectorAll(".highlight-vertical");
    var index = 0;
    cells.forEach((cell) => {
        index += 0.2;
        cell.style.animation = "highlightFade 0.2s forwards " + (index) + "s";
        console.log(cell);
    });
    vertCells.forEach((cell) => {
        index +=0.2;
        cell.style.animation = "highlightFadeVert 0.2s forwards " + index + "s";
    });

    
}

addAnimation();