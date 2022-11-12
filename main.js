
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let fillStyle1 = 'green';
let fillStyle2 = 'purple';

function drawCircle(x, y, radius, fillStyle1, fillStyle2) {
    ctx.fillStyle = fillStyle1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = fillStyle2;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

let x = 40; //x coordinate of the circle (consider the center)
let y = 40;//y coordinate of the circle (consider the center)
const radius = 40; //radius of the circle
const step = 10;

drawCircle(x, y, radius, fillStyle1, fillStyle2);


const up = document.getElementsByClassName('up')[0];
const down = document.getElementsByClassName('down')[0];
const left = document.getElementsByClassName('left')[0];
const right = document.getElementsByClassName('right')[0];

up.addEventListener("click", function () {
    if ((y && y - step) >= 40) {
        y -= step;
        drawCircle(x, y, radius, fillStyle1, fillStyle2)
    }
});

down.addEventListener("click", function () {
    if ((y && y + step) <= 360) {
        y += step;
        drawCircle(x, y, radius, fillStyle1, fillStyle2)
    }
});

left.addEventListener("click", function () {
    if ((x && x - step) >= 40) {
        x -= step;
        drawCircle(x, y, radius, fillStyle1, fillStyle2)
    }
});
right.addEventListener("click", function () {
    if ((x && x + step) <= 560) {
        x += step;
        drawCircle(x, y, radius, fillStyle1, fillStyle2)
    }
});


window.addEventListener('keydown', doKeyDown, true);

function doKeyDown(evt) {
    switch (evt.keyCode) {
        case 87:  /* Up arrow was pressed */
            if ((y && y - step) >= 40) {
                y -= step;
                drawCircle(x, y, radius, fillStyle1, fillStyle2);
            }
            break;
        case 83:  /* Down arrow was pressed */
            if ((y && y + step) <= 360) {
                y += step;
                drawCircle(x, y, radius, fillStyle1, fillStyle2);
            }
            break;
        case 65:  /* Left arrow was pressed */
            if ((x && x - step) >= 40) {
                x -= step;
                drawCircle(x, y, radius, fillStyle1, fillStyle2);
            }
            break;
        case 68:  /* Right arrow was pressed */
            if ((x && x + step) <= 560) {
                x += step;
                drawCircle(x, y, radius, fillStyle1, fillStyle2);
            }
            break;
    }
}

const reset = document.getElementById("reset");
const bg = document.getElementById("c-bg-color");
const fg = document.getElementById("d-fg-color");

bg.addEventListener('change', (event) => {
    fillStyle1 = event.target.value;
    drawCircle(x, y, radius, fillStyle1, fillStyle2);
});

fg.addEventListener('change', (event) => {
    fillStyle2 = event.target.value;
    drawCircle(x, y, radius, fillStyle1, fillStyle2);
});

reset.addEventListener("click", function () {

    drawCircle(40, 40, 40, "green", "purple");
})
