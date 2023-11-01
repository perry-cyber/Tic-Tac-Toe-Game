const dashBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');


let go = 'circle'
const buildBox = [
    "", "", "", "", "", "", "", "", "",
]


function createBox(){
    buildBox.forEach((_game, index)=>{
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('rec');
        boxDiv.id = index
        boxDiv.addEventListener('click', addGo);
        dashBoard.appendChild(boxDiv);
    })
}
createBox();


function addGo(e){
    const displayCircle = document.createElement("div");
    displayCircle.classList.add(go);
    e.target.appendChild(displayCircle)

    go = go === "circle" ? "x" : "circle"

    infoDisplay.textContent = "it's " + go + " time"

    checkScore()
}




function checkScore(){

    const allRec = document.querySelectorAll('.rec');

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
   

    winningCombos.forEach(array =>{  

        //add it to a variable
        const circleWin = array.every(cell =>
                allRec[cell].firstChild?.classList.contains('circle'));


                if (circleWin){
                    infoDisplay.textContent = "Circle WINS!"
                    allRec.forEach(rec => rec.replaceWith(rec.cloneNode(true)))
                    return
                }
    })


    
    winningCombos.forEach(array =>{  

        //add it to a variable
        const crossWin = array.every(cell =>
                allRec[cell].firstChild?.classList.contains('x'));


                if (crossWin){
                    infoDisplay.textContent = "Cross WINS!"
                    allRec.forEach(rec => rec.replaceWith(rec.cloneNode(true)))
                    return
                }
    })
}

