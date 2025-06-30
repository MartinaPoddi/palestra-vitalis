function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    
    // Alterna la classe 'show' per mostrare/nascondere il menu
    mobileMenu.classList.toggle('show');
    
    // Cambia l'icona da bars a X
    const icon = hamburger.querySelector('i');
    if (mobileMenu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Chiudi il menu quando si clicca su un link
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('hamburger');
            const icon = hamburger.querySelector('i');
            
            // Chiudi il menu
            mobileMenu.classList.remove('show');
            
            // Ripristina l'icona hamburger
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});

// Chiudi menu se si clicca fuori
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    
    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        const icon = hamburger.querySelector('i');
        mobileMenu.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});