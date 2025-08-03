
// Floating particles animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.bottom = `-10px`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random color variation
        const colors = ['#ff66b2', '#66b3ff', '#b266ff'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Set current date
function setCurrentDate() {
    const now = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', options);
}

// Initialize everything when the page loads
window.onload = function() {
    createParticles();
    setCurrentDate();
    
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
};