let values = [[null, null, null], [null, null, null], [null, null, null]];
let curr = "X";
let win = false;

function check(values) {
    for (let i = 0; i < 3; i++) {
        if (values[i][0] && values[i][0] === values[i][1] && values[i][1] === values[i][2]) return true;
        if (values[0][i] && values[0][i] === values[1][i] && values[1][i] === values[2][i]) return true;
    }
    if (values[0][0] && values[0][0] === values[1][1] && values[1][1] === values[2][2]) return true;
    if (values[0][2] && values[0][2] === values[1][1] && values[1][1] === values[2][0]) return true;
    return false;
}

function x() { curr = "X"; }
function o() { curr = "O"; }

function handleClick(row, col, className) {
    if (win || values[row][col]) return;
    values[row][col] = curr;
    document.querySelector(`.${className}`).textContent = curr;
    if (check(values)) {
        win = true;
        alert(`${curr} wins!`);
    }
}

document.querySelectorAll(".cell").forEach((cell, index) => {
    let row = Math.floor(index / 3);
    let col = index % 3;
    cell.addEventListener("click", () => handleClick(row, col, cell.classList[1]));
});
