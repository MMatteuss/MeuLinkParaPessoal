// Floating particles animation with more variety
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    const shapes = ['circle', 'heart', 'star', 'paw'];
    const emojis = ['🌸', '🐾', '🌟', '🎮', '❤️', '✨', '🎵'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        
        // Random shape or emoji
        const useEmoji = Math.random() > 0.7;
        
        if (useEmoji) {
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.fontSize = `${size * 2}px`;
            particle.style.display = 'flex';
            particle.style.alignItems = 'center';
            particle.style.justifyContent = 'center';
        } else {
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'circle') {
                particle.style.borderRadius = '50%';
            }
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundImage = `url('https://i.imgur.com/${['JR4Qe0a', 'X3ZQX7A', '8QZQZvQ'][Math.floor(Math.random() * 3)]}.png')`;
            particle.style.backgroundSize = 'contain';
        }
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.bottom = `-30px`;
        
        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 15}s`;
        
        // Random color variation
        const colors = ['#ff66b2', '#66b3ff', '#b266ff', '#ff9966', '#ff6ec7', '#66ff66'];
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        if (!useEmoji) {
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        
    }
}

// Create anime decorations
function createAnimeDecorations() {
    const body = document.body;
    
    const deco1 = document.createElement('div');
    deco1.className = 'anime-decoration deco1';
    body.appendChild(deco1);
    
    const deco2 = document.createElement('div');
    deco2.className = 'anime-decoration deco2';
    body.appendChild(deco2);
}

// Interactive buttons effects
function setupInteractiveButtons() {
    const buttons = document.querySelectorAll('.link-button');
    
    buttons.forEach(button => {
        // Add sparkle effect on click
        button.addEventListener('click', (e) => {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const sparkle = document.createElement('span');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            button.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        });
        
        // Add floating emoji on hover
        button.addEventListener('mouseenter', () => {
            const emojis = ['🌸', '🐾', '🌟', '🎮', '❤️', '✨'];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            
            const floatEmoji = document.createElement('span');
            floatEmoji.textContent = emoji;
            floatEmoji.className = 'float-emoji';
            floatEmoji.style.left = `${Math.random() * 100}%`;
            button.appendChild(floatEmoji);
            
            setTimeout(() => {
                floatEmoji.remove();
            }, 1500);
        });
    });
}

// Game items hover effects
function setupGameItemEffects() {
    const gameItems = document.querySelectorAll('.game-item');
    
    gameItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const gameName = item.querySelector('.game-name').textContent;
            const tooltip = document.createElement('div');
            tooltip.className = 'game-tooltip';
            tooltip.textContent = `Jogando ${gameName} ❤️`;
            document.body.appendChild(tooltip);
            
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width/2 - tooltip.offsetWidth/2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            
            item.tooltip = tooltip;
        });
        
        item.addEventListener('mouseleave', () => {
            if (item.tooltip) {
                item.tooltip.remove();
            }
        });
    });
}

// Set current date with emoji
function setCurrentDate() {
    const now = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const emojis = ['🌸', '🐾', '🎮', '✨', '❤️', '🎵'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('current-date').textContent = 
        `${now.toLocaleDateString('pt-BR', options)} ${randomEmoji}`;
}

// Initialize everything when the page loads
window.onload = function() {
    createParticles();
    createAnimeDecorations();
    setCurrentDate();
    setupInteractiveButtons();
    setupGameItemEffects();
    
    // Add hover effect to all elements with the 'pixel-corners' class
    const pixelCorners = document.querySelectorAll('.pixel-corners');
    pixelCorners.forEach(corner => {
        corner.addEventListener('mouseenter', () => {
            corner.style.boxShadow = '0 0 30px rgba(255, 102, 178, 0.5)';
        });
        
        corner.addEventListener('mouseleave', () => {
            corner.style.boxShadow = '0 0 20px rgba(255, 102, 178, 0.3)';
        });
    });
    
    // Update date every minute
    setInterval(setCurrentDate, 60000);
    
    // Add music player (optional)
    const musicPlayer = document.createElement('audio');
    musicPlayer.src = 'music/Tonight You Belong To Me.mp3'; // Caminho corrigido
    musicPlayer.loop = true;
    musicPlayer.volume = 0.3;
    document.body.appendChild(musicPlayer);

    // Opcional: Adicionar controles para tocar/pausar
    musicPlayer.controls = true; // Mostra controles padrão do HTML5
    
    const musicToggle = document.createElement('div');
    musicToggle.className = 'music-toggle';
    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    musicToggle.title = 'Play/Pause Music';
    musicToggle.addEventListener('click', () => {
        if (musicPlayer.paused) {
            musicPlayer.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            musicPlayer.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }
    });
    document.body.appendChild(musicToggle);
};

// Add some styles for dynamic elements
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .sparkle {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: sparkle 1s ease-out forwards;
    }
    
    @keyframes sparkle {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
    }
    
    .float-emoji {
        position: absolute;
        bottom: 100%;
        font-size: 20px;
        animation: floatUp 1.5s ease-out forwards;
        pointer-events: none;
    }
    
    @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
    }
    
    .game-tooltip {
        position: fixed;
        background-color: rgba(26, 26, 46, 0.9);
        color: var(--primary);
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        pointer-events: none;
        z-index: 100;
        border: 1px solid var(--accent);
        box-shadow: 0 0 10px var(--primary);
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .music-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 100;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    }
    
    .music-toggle:hover {
        transform: scale(1.1);
        background-color: var(--accent);
        box-shadow: 0 0 15px var(--primary);
    }
`;
document.head.appendChild(dynamicStyles);