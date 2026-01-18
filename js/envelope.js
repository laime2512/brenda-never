// Detectar si es un dispositivo móvil
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Abrir el sobre y redirigir a la invitación
function openEnvelope() {
    const container = document.querySelector('.envelope-container');
    const envelope = document.querySelector('.envelope');
    
    // Abrir el sobre
    container.classList.add('open');
    
    // Redirigir después de la animación
    setTimeout(() => {
        // Añadir efecto de desvanecimiento
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.5s ease';
        
        // Redirigir a la invitación
        setTimeout(() => {
            window.location.href = 'invitacion.html';
        }, 500);
    }, 2000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Configurar evento de clic en toda la página
    document.body.addEventListener('click', openEnvelope);
    
    // Para móviles, también permitir toque
    if (isMobileDevice()) {
        document.body.addEventListener('touchstart', openEnvelope);
    }
    
    // Añadir efecto de brillo al pasar el cursor (solo desktop)
    if (!isMobileDevice()) {
        const envelope = document.querySelector('.envelope-front');
        
        envelope.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.25)';
        });
        
        envelope.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
    }
    
    // Efecto de entrada para la página
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});