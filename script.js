// Love quotes array
const loveQuotes = [
    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "You are my today and all of my tomorrows.",
    "I love you not only for what you are, but for what I am when I am with you.",
    "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.",
    "In your smile, I see something more beautiful than the stars.",
    "My love for you is a journey, starting at forever and ending at never.",
    "You are my sun, my moon, and all of my stars.",
    "Every love story is beautiful, but ours is my favorite.",
    "I fell in love with you because of the million things you never knew you were doing.",
    "You are the source of my joy, the center of my world, and the whole of my heart.",
    "When I tell you I love you, I don't say it out of habit. I say it to remind you that you're the best thing that ever happened to me.",
    "I love you more than words can wield the matter, dearer than eyesight, space and liberty."
];

let currentQuoteIndex = 0;
let musicPlaying = true;
let startTime = Date.now();

// Create floating hearts
function createFloatingHeart() {
    const container = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['💕', '💖', '💗', '💝', '💞', '💓'][Math.floor(Math.random() * 6)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create falling petals
function createFallingPetal() {
    const container = document.getElementById('petalsContainer');
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = ['🌸', '🌺', '🌹', '🌷', '🏵️'][Math.floor(Math.random() * 5)];
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
    petal.style.animationDelay = Math.random() * 3 + 's';
    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 13000);
}

// Create hearts and petals periodically
setInterval(createFloatingHeart, 500);
setInterval(createFallingPetal, 800);

// Create initial hearts and petals
for (let i = 0; i < 15; i++) {
    setTimeout(createFloatingHeart, i * 200);
    setTimeout(createFallingPetal, i * 250);
}

// Create glowing particles
function createParticles() {
    const particles = 30;
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 4 + 4 + 's';
        document.body.appendChild(particle);
    }
}

createParticles();

// Change love quote
function changeQuote() {
    const quoteElement = document.getElementById('loveQuote');
    currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;
    
    quoteElement.style.opacity = '0';
    quoteElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        quoteElement.textContent = `"${loveQuotes[currentQuoteIndex]}"`;
        quoteElement.style.opacity = '1';
        quoteElement.style.transform = 'translateY(0)';
    }, 300);
}

// Open love letter
function openLetter() {
    const letter = document.getElementById('loveLetter');
    letter.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close love letter
function closeLetter() {
    const letter = document.getElementById('loveLetter');
    letter.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Forgive button action
document.getElementById('forgiveBtn').addEventListener('click', function() {
    this.classList.add('clicked');
    
    // Create confetti
    createConfetti();
    
    // Show success message
    setTimeout(() => {
        alert('Thank you so much! 💖 You make my world complete! I promise to always cherish you! 🥰');
    }, 500);
    
    // Change button text
    setTimeout(() => {
        this.querySelector('.btn-text').textContent = 'Thank you for forgiving me! 💖';
        this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    }, 1000);
});

// Confetti animation
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    canvas.classList.add('active');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ['#ff6b9d', '#c23669', '#ec4899', '#d946ef', '#f4d03f', '#ff8fab'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < 150; i++) {
        confettiPieces.push(new ConfettiPiece());
    }

    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        animationId = requestAnimationFrame(animate);
    }

    animate();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
        canvas.classList.remove('active');
    }, 5000);
}

// Music control
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    
    if (musicPlaying) {
        music.pause();
        toggleBtn.textContent = '🔇';
        musicPlaying = false;
    } else {
        music.play();
        toggleBtn.textContent = '🔊';
        musicPlaying = true;
    }
}

// Background music with fade-in
window.addEventListener('load', () => {
    const music = document.getElementById('bgMusic');
    music.volume = 0;
    
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Fade in music
            let volume = 0;
            const fadeIn = setInterval(() => {
                if (volume < 0.3) {
                    volume += 0.01;
                    music.volume = volume;
                } else {
                    clearInterval(fadeIn);
                }
            }, 100);
        }).catch(error => {
            console.log('Autoplay prevented. Click anywhere to start music.');
            document.body.addEventListener('click', () => {
                music.play();
                let volume = 0;
                const fadeIn = setInterval(() => {
                    if (volume < 0.3) {
                        volume += 0.01;
                        music.volume = volume;
                    } else {
                        clearInterval(fadeIn);
                    }
                }, 100);
            }, { once: true });
        });
    }
});

// Countdown timer
function updateCountdown() {
    const now = Date.now();
    const elapsed = now - startTime;
    
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.className = 'particle';
        sparkle.style.width = '3px';
        sparkle.style.height = '3px';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.position = 'fixed';
        sparkle.style.animation = 'particleFloat 2s ease-out forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
});

// Smooth scroll for better experience
document.documentElement.style.scrollBehavior = 'smooth';

// Close letter when clicking outside
document.getElementById('loveLetter').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLetter();
    }
});

// Randomize initial quote
currentQuoteIndex = Math.floor(Math.random() * loveQuotes.length);
document.getElementById('loveQuote').textContent = `"${loveQuotes[currentQuoteIndex]}"`;

console.log('💖 This page was made with love! 💖');