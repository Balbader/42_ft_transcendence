const pong = () => {
	// Add CSS dynamically
	const addDynamicCSS = () => {
		const style = document.createElement('style');
		style.id = 'dynamic-style';
		style.innerHTML = `
        canvas {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            border: 5px solid red;
        } 
    `;

		document.head.append(style);
	};

	addDynamicCSS();

	const appDiv = document.querySelector('#app');
	const canvas = document.createElement('canvas');
	appDiv.append(canvas);
	const context = canvas.getContext('2d');

	const user = {
		x: 0,
		y: canvas.height / 2 - 100 / 2,
		width: 10,
		height: 100,
		color: 'WHITE',
		score: 0,
	};

	const com = {
		x: canvas.width - 10,
		y: canvas.height / 2 - 100 / 2,
		width: 10,
		height: 100,
		color: 'WHITE',
		score: 0,
	};

	const net = {
		x: canvas.width / 2 - 1,
		y: 0,
		width: 2,
		height: 10,
		color: 'WHITE',
	};

	const ball = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		radius: 10,
		speed: 7, // Velocity = speed + direction
		velocityX: 5,
		velocityY: 5,
		color: 'WHITE',
	};

	function drawNet() {
		for (let i = 0; i <= canvas.height; i += 15) {
			drawRect(net.x, net.y + i, net.width, net.height, net.color);
		}
	}

	function drawRect(x, y, w, h, color) {
		context.fillStyle = color;
		context.fillRect(x, y, w, h);
	}

	function drawCircle(x, y, r, color) {
		context.fillStyle = color;
		context.beginPath();
		context.arc(x, y, r, 0, Math.PI * 2, false);
		context.closePath();
		context.fill();
	}

	function drawText(text, x, y, color) {
		context.fillStyle = color;
		context.font = '75px fantasy';
		context.fillText(text, x, y);
	}

	let upPressed = false;
	let downPressed = false;

	window.addEventListener('keydown', keyDownHandler);
	window.addEventListener('keyup', keyUpHandler);

	function keyDownHandler(e) {
		if (e.key == 'w' || e.key == 'W') {
			upPressed = true;
		} else if (e.key == 's' || e.key == 'S') {
			downPressed = true;
		}
	}

	function keyUpHandler(e) {
		if (e.key === 'w' || e.key === 'W') {
			upPressed = false;
		} else if (e.key === 's' || e.key === 'S') {
			downPressed = false;
		}
	}

	function movePaddle() {
		if (upPressed && user.y > 0) {
			user.y -= 8;
		}

		if (downPressed && (user.y < canvas.height - user.height)) {
			user.y += 8;
		}
	}

	function render() {
		drawRect(0, 0, 600, 400, 'black');
		drawText(user.score, canvas.width / 4, canvas.height / 5, 'WHITE');
		drawText(com.score, 3 * canvas.width / 4, canvas.height / 5, 'WHITE');
		drawRect(user.x, user.y, user.width, user.height, user.color);
		drawRect(com.x, com.y, com.width, com.height, com.color);
		drawNet();
		drawCircle(ball.x, ball.y, ball.radius, ball.color);
	}

	function collision(b, p) {
		p.top = p.y;
		p.bottom = p.y + p.height;
		p.left = p.x;
		p.right = p.x + p.width;

		b.top = b.y - b.radius;
		b.bottom = b.y + b.radius;
		b.left = b.x - b.radius;
		b.right = b.x + b.radius;

		return b.right > p.left && b.top < p.bottom
            && b.left < p.right && b.bottom > p.top;
	}

	function resetBall() {
		ball.x = canvas.width / 2;
		ball.y = canvas.height / 2;
		ball.speed = 7;
		ball.velocityX = -ball.velocityX;
	}

	function update() {
		movePaddle();
		if (ball.x - ball.radius < 0) {
			com.score++;
			resetBall();
		} else if (ball.x + ball.radius > canvas.width) {
			user.score++;
			resetBall();
		}

		ball.x += ball.velocityX;
		ball.y += ball.velocityY;

		const computerLevel = 0.1;
		com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

		if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
			ball.velocityY = -ball.velocityY;
		}

		const player = (ball.x < canvas.width / 2) ? user : com; // If x < canvas.width/2 = player 1 side
		if (collision(ball, player)) {
			let collidePoint = (ball.y - (player.y + player.height / 2));
			collidePoint /= (player.height / 2); // Value between -1 to +1
			const angleRad = (Math.PI / 4) * collidePoint;
			const direction = (ball.x < canvas.width / 2) ? 1 : -1;

			ball.velocityX = direction * ball.speed * Math.cos(angleRad);
			ball.velocityY = ball.speed * Math.sin(angleRad);

			ball.speed += 0.1;
		}
	}

	function game() {
		update();
		render();
	}

	const framePerSecond = 50;
	setInterval(game, 1000 / framePerSecond);
};

export default pong;
