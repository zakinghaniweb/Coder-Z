// ========= Preloader Js Start ==========
var preloader = document.querySelector('#preloader');
var dots = document.querySelector('#dots');
window.onload = function() {
    let dotCount = 0;
    function animateDots() {
        dotCount++;
        if (dotCount > 3) {
            dotCount = 0;
        }
        dots.innerHTML = '.'.repeat(dotCount);
    }
    var intervalId = setInterval(animateDots, 500);
    setTimeout(function() {
        preloader.style = 'transform:scale(0)';
        setTimeout(function() {
            var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        },500);
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 2500); // Change korte hobe
};
// ========= Preloader Js End ==========
// ========= Navbar Js Start ==========

let toggleLight = document.querySelector('#switch') 
let mainMenu = document.querySelector('.main-menu') 
let mainMenuAnchore = document.querySelectorAll('.nav-link') 
let FavoriteCount = 0
let FavoriteCountResult = document.querySelector('.favorite-count')
let AddFavorite = document.querySelectorAll('.add-favorite')
let footer = document.querySelector('#footer')
let footerp = document.querySelector('.footer-p')
let footerh3 = document.querySelector('.footer-h3')


toggleLight.addEventListener("click",()=>{
    if (toggleLight.checked) {
        mainMenu.style.background = "rgba(255, 255, 255, 0.8)"
        footer.style.background = "rgba(255, 255, 255, 0.8)"
        footerp.style.color = "#6a6a6a"
        footerh3.style.color = "#333"
        mainMenuAnchore.forEach((item)=>{
            item.style = "color:black"
        })
    }
    else {
        footer.style.background = "rgba(51, 51, 51, .8)"
        mainMenu.style.background = "rgba(37, 37, 37, 0.8)"
        footerp.style.color = "#fff"
        footerh3.style.color = "#bcbcbc"
        mainMenuAnchore.forEach((item)=>{
            item.style = "color:white"
        })
    }
})
AddFavorite.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (item.dataset.noinc == 1) {
            alert('You already added this to your favorites')
        }
        else{
            FavoriteCount++
            item.setAttribute("data-noinc","1")
            FavoriteCountResult.innerHTML = "("+FavoriteCount+")"
        }
    })
    // That part's logic building was hard xD
})
// =====---- Other Navbar Js Is Currently Mixed In Other Functions

// ========= Navbar Js End ==========
// ========= Modal Js Start ==========
var nameSubmitButton = document.querySelector('.nameSubmitButton');
var userName = document.querySelector('.userName');
var userName2 = document.querySelector('.userName2');
var nameInput = document.querySelector('.nameInput');
var nameInputGroup = document.querySelector('.input-group-custom');
var menu = document.querySelector('.main-menu')
var footerBottom = document.querySelector('#footer')
nameSubmitButton.addEventListener('click', function() {
    if (nameInput.value == '') {
        nameInputGroup.style = "border: 3px solid red";
    } else {
        userName.innerHTML = nameInput.value;
        userName2.innerHTML = nameInput.value;
        var modalElement = document.querySelector('#exampleModal');
        var modalInstance = bootstrap.Modal.getInstance(modalElement);
        modalInstance.hide();
        setTimeout(function() {
            var welcome = document.querySelector('.welcome');
            welcome.style = 'transform:translateX(0)';
            //----------- Coffeti Start --------------
                canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                cx = ctx.canvas.width / 2;
                cy = ctx.canvas.height / 2;

                let confetti = [];
                const confettiCount = 300;
                const gravity = 0.5;
                const terminalVelocity = 5;
                const drag = 0.075;
                const colors = [
                { front: 'red', back: 'darkred' },
                { front: 'green', back: 'darkgreen' },
                { front: 'blue', back: 'darkblue' },
                { front: 'yellow', back: 'darkyellow' },
                { front: 'orange', back: 'darkorange' },
                { front: 'pink', back: 'darkpink' },
                { front: 'purple', back: 'darkpurple' },
                { front: 'turquoise', back: 'darkturquoise' }];
                resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                cx = ctx.canvas.width / 2;
                cy = ctx.canvas.height / 2;
                };
                randomRange = (min, max) => Math.random() * (max - min) + min;
                initConfetti = () => {
                for (let i = 0; i < confettiCount; i++) {
                    confetti.push({
                    color: colors[Math.floor(randomRange(0, colors.length))],
                    dimensions: {
                        x: randomRange(10, 20),
                        y: randomRange(10, 30) },
                    position: {
                        x: randomRange(0, canvas.width),
                        y: canvas.height - 1 },
                    rotation: randomRange(0, 2 * Math.PI),
                    scale: {
                        x: 1,
                        y: 1 },
                    velocity: {
                        x: randomRange(-25, 25),
                        y: randomRange(0, -50) } });
                }
                };
                render = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                confetti.forEach((confetto, index) => {
                    let width = confetto.dimensions.x * confetto.scale.x;
                    let height = confetto.dimensions.y * confetto.scale.y;
                    ctx.translate(confetto.position.x, confetto.position.y);
                    ctx.rotate(confetto.rotation);
                    confetto.velocity.x -= confetto.velocity.x * drag;
                    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
                    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
                    confetto.position.x += confetto.velocity.x;
                    confetto.position.y += confetto.velocity.y;
                    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
                    if (confetto.position.x > canvas.width) confetto.position.x = 0;
                    if (confetto.position.x < 0) confetto.position.x = canvas.width;
                    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
                    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
                    ctx.fillRect(-width / 2, -height / 2, width, height);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                });
                if (confetti.length <= 10) initConfetti();
                window.requestAnimationFrame(render);
                };
                initConfetti();
                render();
                window.addEventListener('resize', function () {
                resizeCanvas();
                });
                window.addEventListener('click', function () {
                initConfetti();
                });
                //----------- Coffeti End --------------
            setTimeout(function() {
                welcome.style = 'transform:translateX(-100%)';
                setTimeout(function() {
                    welcome.style = "display:none"
                    menu.style = 'transform:translateX(0)';
                },500);
            },4500) // Change korte hobe
        },0)
    }
});
// ========= Modal Js End ==========
// ========= Welcome Js Start ==========
const sparkle = document.querySelector(".sparkle");
var current_star_count = 0;
const MAX_STARS = 60;
const STAR_INTERVAL = 16;
const MAX_STAR_LIFE = 3;
const MIN_STAR_LIFE = 1;
const MAX_STAR_SIZE = 70;
const MIN_STAR_SIZE = 30;
const MIN_STAR_TRAVEL_X = 100;
const MIN_STAR_TRAVEL_Y = 100;
const Star = class {
constructor() {
    this.size = this.random(MAX_STAR_SIZE, MIN_STAR_SIZE);
    this.x = this.random(
    sparkle.offsetWidth * 0.75,
    sparkle.offsetWidth * 0.25
    );
    this.y = sparkle.offsetHeight / 2 - this.size / 2;
    this.x_dir = this.randomMinus();
    this.y_dir = this.randomMinus();
    this.x_max_travel =
    this.x_dir === -1 ? this.x : sparkle.offsetWidth - this.x - this.size;
    this.y_max_travel = sparkle.offsetHeight / 2 - this.size;
    this.x_travel_dist = this.random(this.x_max_travel, MIN_STAR_TRAVEL_X);
    this.y_travel_dist = this.random(this.y_max_travel, MIN_STAR_TRAVEL_Y);
    this.x_end = this.x + this.x_travel_dist * this.x_dir;
    this.y_end = this.y + this.y_travel_dist * this.y_dir;
    this.life = this.random(MAX_STAR_LIFE, MIN_STAR_LIFE);
    this.star = document.createElement("div");
    this.star.classList.add("star");
    this.star.style.setProperty("--start-left", this.x + "px");
    this.star.style.setProperty("--start-top", this.y + "px");
    this.star.style.setProperty("--end-left", this.x_end + "px");
    this.star.style.setProperty("--end-top", this.y_end + "px");
    this.star.style.setProperty("--star-life", this.life + "s");
    this.star.style.setProperty("--star-life-num", this.life);
    this.star.style.setProperty("--star-size", this.size + "px");
    this.star.style.setProperty("--star-color", this.randomRainbowColor());
}
draw() {
    sparkle.appendChild(this.star);
}
pop() {
    sparkle.removeChild(this.star);
}
random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomRainbowColor(){
    return "hsla("+this.random(360,0)+", 100%, 50%, 1)";
}
randomMinus() {
    return Math.random() > 0.5 ? 1 : -1;
}
};
setInterval(() => {
if (current_star_count >= MAX_STARS) {
    return;
}
current_star_count++;
var newStar = new Star();
newStar.draw();
setTimeout(() => {
    current_star_count--;
    newStar.pop();
}, newStar.life * 1000);
}, STAR_INTERVAL);
// ========= Welcome Js End ==========
// ========= Cursor Gradient Js Start ==========
const followDiv = document.getElementById('followDiv');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});
function updatePosition() {
    const speed = 0.2;
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;
    followDiv.style.transform = `translate(${posX - followDiv.offsetWidth / 2}px, ${posY - followDiv.offsetHeight / 2}px)`;
    requestAnimationFrame(updatePosition);
}
updatePosition();
// ========= Cursor Gradient Js End ==========
// ========= Cards Js Start ==========
const cards = document.querySelectorAll('.single-card');
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const xOffset = (mouseX / viewportWidth - 0.5) * 40;
    const yOffset = (mouseY / viewportHeight - 0.5) * 40;
    cards.forEach((card) => {
        card.style.transform = `rotateY(${xOffset}deg) rotateX(${-yOffset}deg)`;
        card.style.boxShadow = `${-xOffset * 0.5}px ${yOffset * 0.5}px 30px rgba(0, 0, 0, 0.3)`;
        const gradientX = (0.5 - (mouseX / viewportWidth)) * 100;
        const gradientY = (mouseY / viewportHeight) * 100;
        card.style.background = `linear-gradient(${gradientY}deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0) 90%)`;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out, background 0.2s ease-out';
    });
});
// ========= Cards Js End ==========




// ===== Copyright Zakin Ghani & Mehedi Hasan Tanjim