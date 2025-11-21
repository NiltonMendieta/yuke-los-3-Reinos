const canvas = document.getElementById("particulas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulas = [];

class Particula {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.color = `rgba(255,255,255,${Math.random()})`;
    }
    update() {
        this.y -= this.speed;
        if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

function init() {
    for (let i = 0; i < 200; i++) {
        particulas.push(new Particula());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();