let playBoard = document.getElementById("playing-board");

function currentScore() {
    return document.getElementById("current-score").innerHTML;
}

function createPlayBoard(e) {
    if (e.innerHTML == "") {
        for (var i = 0; i < 50; i++) {
            for (var j = 0; j < 50; j++) {
                addCells(e, i, j);
            }
        }
    } else {
        alert("0");
    }

}

function addCells(e, i, j) {
    if (i == 24 && j == 24) {
        e.innerHTML += `<div id="${i},${j}" class="cells"><div id="snake"></div></div>`;
    } else {
        e.innerHTML += `<div id="${i},${j}" class="cells"></div>`;
    }
    // e.innerHTML += `<div id="${i},${j}" class="cells"></div>`;
    // console.log(e.innerHTML);
}

// function addFood(){
//     let foodX = Math.floor((Math.random() * 49) + 1);
//     let foodY = Math.floor((Math.random() * 49) + 1);
//     if(currentScore()==0){
//         if(foodX == 24 && foodY == 24){
//             foodX += Math.floor((Math.random() * 23) + 1);
//             foodY += Math.floor((Math.random() * 23) + 1);
//             food(foodX,foodY);
//         }else{
//             food(foodX,foodY);
//         }
//     }else{

//     }
// }

function food() {
    let foodX = Math.floor((Math.random() * 49) + 1);
    let foodY = Math.floor((Math.random() * 49) + 1);
    if(snakePosition == foodX,foodY){
        // console.log("same");
        foodX += Math.floor((Math.random() * 20) + 1);
        foodY += Math.floor((Math.random() * 20) + 1);
        addFood(foodX,foodY);
    }else{
        addFood(foodX,foodY);
        // console.log("not same");
    }
}

function addFood(x,y){
    // let elementId = `${x},${y}`
    let foodCell = document.getElementById(`${x},${y}`);
    foodCell.innerHTML += `<div id="food"></div>`;
}

function snakePosition() {
    return document.getElementById("snake").parentElement.id;
}

createPlayBoard(playBoard);
// addFood();
console.log(currentScore());
console.log(snakePosition());
food();
