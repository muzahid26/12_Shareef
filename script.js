// Target date: September 05, 2025 17:56
const targetDate = new Date('2025-09-05T17:27:00').getTime();

// Correct Bengali numerals mapping
const bengaliNumerals = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

// Function to convert a number to a string with Bengali numerals
function convertToBengali(number) {
  return String(number).padStart(2, '0').split('').map(digit => bengaliNumerals[digit]).join('');
}

// Example usage
// let days = 8;
// let hours = 13;
// let minutes = 25;
// let seconds = 50;

// document.getElementById("days").innerHTML = convertToBengali(days);
// document.getElementById("hours").innerHTML = convertToBengali(hours);
// document.getElementById("minutes").innerHTML = convertToBengali(minutes);
// document.getElementById("seconds").innerHTML = convertToBengali(seconds);

// Convert English numbers to Bengali
function toBengaliNumber(num) {
    return num.toString().split('').map(digit => bengaliNumerals[digit] || digit).join('');
}

// Pad with zeros and convert to Bengali
function formatNumber(num) {
    return toBengaliNumber(num.toString().padStart(2, '0'));
}

// Create particle system
function createParticles() {
    const particleContainer = document.querySelector('.particle-system');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat ${Math.random() * 10 + 5}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation styles
function addParticleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        .particle {
            box-shadow: 0 0 6px rgba(255, 215, 0, 0.8);
        }
    `;
    document.head.appendChild(style);
}

// Create floating Islamic symbols
function createFloatingSymbols() {
    const symbols = ['☪', '۩', '✦', '۩', '☪'];
    const container = document.body;

    setInterval(() => {
        const symbol = document.createElement('div');
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 20}px;
            color: rgba(255, 215, 0, ${Math.random() * 0.5 + 0.2});
            left: ${Math.random() * 100}%;
            top: 100%;
            pointer-events: none;
            z-index: 1;
            animation: floatUp ${Math.random() * 5 + 8}s linear forwards;
        `;
        container.appendChild(symbol);

        setTimeout(() => {
            symbol.remove();
        }, 13000);
    }, 3000);
}

// Add floating symbol animation
function addFloatingSymbolStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Update countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        // If the date has passed, show celebration
        document.querySelector('#days').textContent = 'à§¦à§¦';
        document.querySelector('#hours').textContent = 'à§¦à§¦';
        document.querySelector('#minutes').textContent = 'à§¦à§¦';
        document.querySelector('#seconds').textContent = 'à§¦à§¦';

        // Add celebration effects
        addCelebrationEffects();
        return;
    }

    // Calculate time units
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update display with animation
    updateNumberWithAnimation('days', formatNumber(days));
    updateNumberWithAnimation('hours', formatNumber(hours));
    updateNumberWithAnimation('minutes', formatNumber(minutes));
    updateNumberWithAnimation('seconds', formatNumber(seconds));
}

// Update number with flip animation
function updateNumberWithAnimation(elementId, newValue) {
    const element = document.querySelector(`#${elementId}`);
    const currentValue = element.textContent;

    if (currentValue !== newValue) {
        element.style.transform = 'rotateX(90deg)';
        element.style.transition = 'transform 0.3s ease-in-out';

        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'rotateX(0deg)';

            // Add extra glow effect on change
            element.parentElement.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.8)';
            setTimeout(() => {
                element.parentElement.style.boxShadow = '';
            }, 500);
        }, 150);
    }
}

// Add celebration effects
function addCelebrationEffects() {
    const style = document.createElement('style');
    style.textContent = `
        .celebration {
            animation: celebrate 2s ease-in-out infinite;
        }
        
        @keyframes celebrate {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(5deg); }
            75% { transform: scale(1.1) rotate(-5deg); }
        }
        
        .firework {
            position: fixed;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ffd700, #ff6b6b);
            border-radius: 50%;
            animation: firework 2s ease-out forwards;
        }
        
        @keyframes firework {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(20);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add celebration class to countdown
    document.querySelector('.countdown-container').classList.add('celebration');

    // Create fireworks
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = Math.random() * 100 + '%';
            document.body.appendChild(firework);

            setTimeout(() => {
                firework.remove();
            }, 2000);
        }
    }, 1000);
}

// Add ripple effect to countdown cards
function addRippleEffect() {
    const cards = document.querySelectorAll('.countdown-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 215, 0, 0.4);
                width: 100px;
                height: 100px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            card.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add breathing effect to main title
function addBreathingEffect() {
    const title = document.querySelector('.title-line-2');
    let scale = 1;
    let growing = true;

    setInterval(() => {
        if (growing) {
            scale += 0.005;
            if (scale >= 1.05) growing = false;
        } else {
            scale -= 0.005;
            if (scale <= 0.95) growing = true;
        }

        title.style.transform = `scale(${scale})`;
    }, 50);
}

// Add twinkling stars effect
function addTwinklingStars() {
    const starsContainer = document.querySelector('.stars');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 1}s infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        starsContainer.appendChild(star);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Initialize visual effects
    createParticles();
    addParticleStyles();
    createFloatingSymbols();
    addFloatingSymbolStyles();
    addRippleEffect();
    addBreathingEffect();
    addTwinklingStars();

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add periodic glow bursts
    setInterval(() => {
        const cards = document.querySelectorAll('.countdown-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.9)';
                card.style.transform = 'translateY(-5px) scale(1.02)';

                setTimeout(() => {
                    card.style.boxShadow = '';
                    card.style.transform = '';
                }, 500);
            }, index * 200);
        });
    }, 10000);

    // Add dynamic background color shifts
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        document.body.style.background = `
            linear-gradient(135deg, 
                hsl(${hue}, 70%, 8%) 0%, 
                hsl(${(hue + 30) % 360}, 60%, 12%) 25%, 
                hsl(${(hue + 60) % 360}, 50%, 6%) 50%, 
                hsl(${(hue + 90) % 360}, 65%, 10%) 75%, 
                hsl(${(hue + 120) % 360}, 80%, 4%) 100%
            )`;
    }, 100);
});

// Add sound effect (optional - requires user interaction)
function playNotificationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Play sound every minute (when seconds reach 00)
setInterval(() => {
    const now = new Date();
    if (now.getSeconds() === 0) {
        // Uncomment the line below if you want sound effects
        // playNotificationSound();
    }
}, 1000);