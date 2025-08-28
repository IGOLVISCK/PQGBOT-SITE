document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background-interativo');
    const numParticles = 70; // Aumente ou diminua este número para mais ou menos partículas

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        background.appendChild(particle);

        // Estilos e animação da partícula
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = '0';
        particle.style.transform = `scale(0)`;
        particle.style.boxShadow = `0 0 5px rgba(255, 255, 255, 0.5)`;

        setTimeout(() => {
            particle.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
            particle.style.transform = `scale(1)`;
            particle.style.opacity = '1';

            // Partícula desaparece após um tempo
            setTimeout(() => {
                particle.style.transition = 'transform 1s ease, opacity 1s ease';
                particle.style.transform = `scale(0)`;
                particle.style.opacity = '0';
                setTimeout(() => {
                    background.removeChild(particle);
                }, 1000); // Remove o elemento após a animação
            }, Math.random() * 2000 + 1000);
        }, 10);
    }

    // Cria as partículas ao mover o mouse
    background.addEventListener('mousemove', (e) => {
        // Cria uma nova partícula em cada movimento
        createParticle(e.clientX, e.clientY);
    });

    // Cria partículas iniciais para dar vida ao background
    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        setTimeout(() => {
            createParticle(x, y);
        }, i * 100);
    }

    // Código para o efeito de "teclas digitando" no nome do bot
    const botNameElement = document.querySelector('.bot-name');
    const originalText = botNameElement.innerText;
    botNameElement.innerText = '';
    let index = 0;

    function typeWriter() {
        if (index < originalText.length) {
            botNameElement.innerText += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Inicia o efeito de digitação após o carregamento
    setTimeout(typeWriter, 1500); 
});