// accessing elements
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelectorAll("#reset-button");

// game variables
let turn0 = true;
let turnX = false;
let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// check winner func
const checkWinner = () => {
    winningPatterns.forEach((pattern) => {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log(`Player ${pos1} won!`);
            }
        }
    })
}

//adding event listeners
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0 === true){
            box.innerText = "O";
            turn0 = false;
            turnX = true;
        }
        else {
            box.innerText = "X";
            turnX = false;
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
})