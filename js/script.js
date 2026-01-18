// Contador regresivo
function updateCountdown() {
    // Nota: Los meses en JavaScript van de 0 a 11 (Enero = 0, Febrero = 1, etc.)
    const weddingDate = new Date(2026, 1, 14, 12, 0, 0).getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    if (distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
}

// Actualizar contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// Detectar si es un dispositivo móvil
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Ajustar flores decorativas según dispositivo
document.addEventListener("DOMContentLoaded", function() {
    const flowerEmojis = ["🌸", "🌺", "🌷", "💮", "🌹", "🌻", "🌼"];
    const sections = document.querySelectorAll('.section, .header, .footer');
    
    // En móviles, reducimos el número de flores para mejor rendimiento
    const flowerCount = isMobileDevice() ? 1 : 3;
    
    sections.forEach(section => {
        // Solo agregar flores si no es un dispositivo móvil muy pequeño
        if (!isMobileDevice() || window.innerWidth > 576) {
            for (let i = 0; i < flowerCount; i++) {
                const flower = document.createElement('div');
                flower.className = 'flower-decoration';
                flower.style.top = `${Math.random() * 80 + 10}%`;
                flower.style.left = `${Math.random() * 80 + 10}%`;
                flower.style.fontSize = `${Math.random() * 20 + 16}px`;
                flower.style.opacity = `${Math.random() * 0.5 + 0.3}`;
                flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
                
                section.appendChild(flower);
            }
        }
    });
    
    // Mejorar experiencia táctil en móviles
    if (isMobileDevice()) {
        // Aumentar área táctil para botones
        const buttons = document.querySelectorAll('.whatsapp-btn');
        buttons.forEach(btn => {
            btn.style.padding = "16px 25px";
        });
    }
});

// Suavizar scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de animación para el ramo de rosas
document.addEventListener('DOMContentLoaded', function() {
    const roses = document.querySelectorAll('.rose');
    
    // Añadir animación más pronunciada al hacer hover (solo en desktop)
    if (!isMobileDevice()) {
        roses.forEach(rose => {
            rose.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(10deg)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            rose.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
});