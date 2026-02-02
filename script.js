// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
});

// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#bc13fe"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#bc13fe",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Buy button functionality
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        
        // Create purchase modal
        const modalHTML = `
            <div class="modal fade" id="purchaseModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content neon-border-glow">
                        <div class="modal-header">
                            <h5 class="modal-title neon-text rajdhani-font">Purchase ${product}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="text-center mb-4">
                                <div class="modal-icon neon-glow mb-3">
                                    <i class="fas fa-shopping-cart fa-3x"></i>
                                </div>
                                <p class="neon-text-light exo-font">
                                    To complete your purchase of 
                                    <strong class="neon-accent rajdhani-font">${product}</strong>, 
                                    please join our Discord server and open a ticket in the <span class="minecraft-font">#purchases</span> channel.
                                </p>
                            </div>
                            <div class="text-center">
                                <a href="https://discord.gg/arieshp" target="_blank" class="btn btn-neon btn-pulse">
                                    <i class="fab fa-discord me-2"></i>
                                    <span class="rajdhani-font">JOIN DISCORD TO PURCHASE</span>
                                </a>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-neon-outline" data-bs-dismiss="modal">
                                <span class="exo-font">CLOSE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal
        const existingModal = document.getElementById('purchaseModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add new modal
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Show modal
        const purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));
        purchaseModal.show();
    });
});

// Currency card hover effects with enhanced animation
document.querySelectorAll('.currency-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) rotate(2deg)';
        this.style.boxShadow = '0 0 30px rgba(188, 19, 254, 0.5)';
        
        // Add floating effect
        this.style.animation = 'float 3s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.animation = '';
    });
});

// Typewriter effect for hero section
function typeWriterEffect() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const speed = 50;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    });
}

// Update copyright year
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Add hover effect to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.product-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.boxShadow = '0 0 30px rgba(188, 19, 254, 0.5)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.product-icon');
        if (icon) {
            icon.style.transform = '';
            icon.style.boxShadow = '';
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-neon, .btn-neon-outline-lg').forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s linear';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    .btn-close-white {
        filter: invert(1) grayscale(100%) brightness(200%);
    }
    
    .btn-neon-outline {
        background: transparent;
        border: 1px solid var(--neon-purple);
        color: var(--neon-white);
        padding: 0.6rem 1.5rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .btn-neon-outline:hover {
        background: rgba(188, 19, 254, 0.1);
        border-color: var(--neon-blue);
        box-shadow: 0 0 15px rgba(188, 19, 254, 0.3);
    }
    
    .modal-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin: 0 auto;
        background: rgba(188, 19, 254, 0.1);
        border: 2px solid var(--neon-purple);
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(2deg);
        }
        50% {
            transform: translateY(-10px) rotate(2deg);
        }
    }
`;
document.head.appendChild(rippleStyle);

// Parallax effect for background
window.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const lightSweep = document.querySelector('.light-sweep');
    if (lightSweep) {
        lightSweep.style.transform = `translateX(${x * 50}px) translateY(${y * 50}px)`;
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    
    // Add active class to current nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add slight delay for animations to start
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    });
});