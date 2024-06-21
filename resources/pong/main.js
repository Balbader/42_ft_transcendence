const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

const paddleWidth = 10, paddleHeight = 100;
let leftPaddleY = canvas.height / 2 - paddleHeight / 2, rightPaddleY = leftPaddleY;
let leftPaddleSpeed = 0, rightPaddleSpeed = 0;
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speedX: 5,
    speedY: 5
};

function drawPaddle(x, y) {
    context.fillStyle = 'white';
    context.fillRect(x, y, paddleWidth, paddleHeight);
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
}

function movePaddles() {
    leftPaddleY += leftPaddleSpeed;
    rightPaddleY += rightPaddleSpeed;
    if (leftPaddleY < 0) leftPaddleY = 0;
    if (rightPaddleY < 0) rightPaddleY = 0;
    if (leftPaddleY + paddleHeight > canvas.height) leftPaddleY = canvas.height - paddleHeight;
    if (rightPaddleY + paddleHeight > canvas.height) rightPaddleY = canvas.height - paddleHeight;
}

function moveBall() {
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Collision with top and bottom
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY = -ball.speedY;
    }

    // Collision with paddles
    if (ball.x - ball.radius < paddleWidth && ball.y > leftPaddleY && ball.y < leftPaddleY + paddleHeight ||
        ball.x + ball.radius > canvas.width - paddleWidth && ball.y > rightPaddleY && ball.y < rightPaddleY + paddleHeight) {
        ball.speedX = -ball.speedX;
    }

    // Reset ball if it goes off screen
    if (ball.x + ball.radius < 0 || ball.x - ball.radius > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speedX = 5;
        ball.speedY = 5;
    }
}

function update() {
    movePaddles();
    moveBall();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(0, leftPaddleY);
    drawPaddle(canvas.width - paddleWidth, rightPaddleY);
    drawBall();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

document.addEventListener('keydown', function(event) {
    switch(event.keyCode) {
        case 87: // W
            leftPaddleSpeed = -6;
            break;
        case 83: // S
            leftPaddleSpeed = 6;
            break;
        case 38: // Up arrow
            rightPaddleSpeed = -6;
            break;
        case 40: // Down arrow
            rightPaddleSpeed = 6;
            break;
    }
});

document.addEventListener('keyup', function(event) {
    switch(event.keyCode) {
        case 87: // W
        case 83: // S
            leftPaddleSpeed = 0;
            break;
        case 38: // Up arrow
        case 40: // Down arrow
            rightPaddleSpeed = 0;
            break;
    }
});

loop();

