// JavaScript for Mrs Olu Oniwinde Portfolio

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Data for Testimonials (45 testimonials)
const testimonials = [
    { id: 1, name: "James Anderson", testimony: "Olu delivered our digital transformation project ahead of schedule and under budget. Her attention to detail and leadership were exceptional." },
    { id: 2, name: "Sarah Johnson", testimony: "Working with Olu was a game-changer for our team. Her project management skills and strategic thinking helped us achieve results we never thought possible." },
    { id: 3, name: "Michael Chen", testimony: "Olu's ability to manage complex projects with multiple stakeholders is remarkable. She kept everyone aligned and focused on delivery." },
    { id: 4, name: "Amina Bello", testimony: "The most organized and effective project manager I've worked with. She turned around a failing project and delivered outstanding results." },
    { id: 5, name: "David Okafor", testimony: "Olu's financial management of our $3M project was impeccable. She delivered 15% under budget without compromising quality." },
    { id: 6, name: "Grace Williams", testimony: "As a team member, I appreciated Olu's leadership style. She empowered us while keeping the project on track. Best project manager I've worked with." },
    { id: 7, name: "Robert Kim", testimony: "Olu's technical understanding combined with her project management skills made her invaluable to our team." },
    { id: 8, name: "Elizabeth Ade", testimony: "She managed our organization-wide change management project flawlessly. Highly recommended." },
    { id: 9, name: "Thomas Wright", testimony: "Professional, efficient, and results-oriented. Olu delivers beyond expectations every time." },
    { id: 10, name: "Fatima Ali", testimony: "Collaborating with Olu was seamless. Her communication and organizational skills are top-notch." },
    { id: 11, name: "Samuel Peters", testimony: "Turned around a failing project and delivered exceptional results. A true professional." },
    { id: 12, name: "Chloe Martin", testimony: "Olu managed our campaign launch perfectly, coordinating across multiple teams flawlessly." },
    { id: 13, name: "Benjamin Okon", testimony: "Her risk management skills saved our project multiple times. Cannot recommend her enough." },
    { id: 14, name: "Patricia Nwosu", testimony: "Olu's attention to detail and proactive approach ensured our project's success despite challenges." },
    { id: 15, name: "Kevin O'Brien", testimony: "Exceptional project manager who consistently delivers quality results on time and within budget." },
    { id: 16, name: "Ngozi Eze", testimony: "Olu's mentorship transformed my project management skills. She's not just a manager but a true leader." },
    { id: 17, name: "Richard Banks", testimony: "The most reliable project manager I've encountered. She makes complex projects look easy." },
    { id: 18, name: "Susan Lee", testimony: "Olu's stakeholder management is outstanding. She keeps everyone informed and engaged throughout." },
    { id: 19, name: "Paul Thompson", testimony: "Her strategic planning skills are unmatched. She anticipates challenges before they occur." },
    { id: 20, name: "Joyce Adewale", testimony: "Working with Olu improved our team's productivity by 40%. She's a project management expert." },
    { id: 21, name: "Mark Davis", testimony: "Olu delivered our most challenging project with excellence. Her leadership inspired the entire team." },
    { id: 22, name: "Linda Carter", testimony: "Her ability to manage budgets while maintaining quality is remarkable. Saved us thousands." },
    { id: 23, name: "Peter Jones", testimony: "Olu's problem-solving skills are exceptional. She finds solutions where others see obstacles." },
    { id: 24, name: "Mary Wilson", testimony: "The most organized project manager I've worked with. Her documentation is always impeccable." },
    { id: 25, name: "John Miller", testimony: "Olu's communication skills ensure everyone is aligned. No misunderstandings under her leadership." },
    { id: 26, name: "Jane Smith", testimony: "Her Agile methodology implementation transformed our development process. Delivery times improved by 50%." },
    { id: 27, name: "Charles Brown", testimony: "Olu manages pressure with grace. She remained calm and effective during our most stressful project." },
    { id: 28, name: "Helen Taylor", testimony: "Her team leadership skills are outstanding. She motivates and empowers team members effectively." },
    { id: 29, name: "George Wilson", testimony: "Olu's quality assurance processes are thorough. Our deliverables have never been better." },
    { id: 30, name: "Margaret Moore", testimony: "She transformed our project management office. Processes are now efficient and effective." },
    { id: 31, name: "Joseph White", testimony: "Olu's strategic thinking helped us pivot successfully when market conditions changed." },
    { id: 32, name: "Dorothy Harris", testimony: "Her attention to risk management saved our project multiple times. Proactive and prepared." },
    { id: 33, name: "Thomas Martin", testimony: "Olu's vendor management skills ensured we got the best value while maintaining quality." },
    { id: 34, name: "Karen Thompson", testimony: "She managed our international project seamlessly across time zones and cultures." },
    { id: 35, name: "Christopher Garcia", testimony: "Olu's data-driven approach to project management delivers measurable results every time." },
    { id: 36, name: "Nancy Martinez", testimony: "Her training and mentoring of junior project managers is exceptional. She builds capability." },
    { id: 37, name: "Daniel Robinson", testimony: "Olu's change management skills ensured smooth adoption of new systems and processes." },
    { id: 38, name: "Lisa Clark", testimony: "She consistently delivers projects that exceed stakeholder expectations. Truly exceptional." },
    { id: 39, name: "Matthew Rodriguez", testimony: "Olu's financial acumen combined with project management expertise is a rare combination." },
    { id: 40, name: "Sandra Lewis", testimony: "Her ability to manage multiple projects simultaneously without losing quality is impressive." },
    { id: 41, name: "Anthony Lee", testimony: "Olu's crisis management skills are outstanding. She handles emergencies with calm professionalism." },
    { id: 42, name: "Emily Walker", testimony: "She built a project management culture that values both results and team well-being." },
    { id: 43, name: "Donald Hall", testimony: "Olu's negotiation skills saved our project budget while maintaining scope and quality." },
    { id: 44, name: "Michelle Allen", testimony: "Her documentation and reporting are so thorough that audits are always smooth." },
    { id: 45, name: "Steven Young", testimony: "Olu doesn't just manage projects; she transforms how organizations think about project delivery." }
];

// Configuration
const TESTIMONIALS_PER_LOAD = 9;
let loadedTestimonials = 0;

// Page load animation
window.addEventListener("load", function () {
    document.body.classList.add("page-loaded");

    // Animate skill bars
    gsap.utils.toArray(".skill-bar").forEach((bar) => {
        const width = bar.getAttribute("data-width") + "%";
        ScrollTrigger.create({
            trigger: bar.parentElement.parentElement,
            start: "top 80%",
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: "power3.out",
                });
            },
        });
    });

    // Animate section elements on scroll
    gsap.utils.toArray(".page-load").forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            onEnter: () => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });
            },
        });
    });

    // Load initial testimonials
    loadTestimonials();
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = menuBtn.querySelector(".hamburger");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");

    // Hamburger animation
    if (mobileMenu.classList.contains("hidden")) {
        hamburger.innerHTML = `
            <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
            <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
            <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
        `;
    } else {
        hamburger.innerHTML = `
            <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 rotate-45 translate-y-2 transition-all duration-300"></span>
            <span class="block w-6 h-0.5 bg-gray-700 opacity-0 transition-all duration-300"></span>
            <span class="block w-6 h-0.5 bg-gray-700 -rotate-45 -translate-y-1 transition-all duration-300"></span>
        `;
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        hamburger.innerHTML = `
            <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
            <span class="block w-6 h-0.5 bg-gray-700 mb-1.5 transition-all duration-300"></span>
            <span class="block w-4 h-0.5 bg-gray-700 transition-all duration-300"></span>
        `;
    });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg");
        navbar.classList.remove("shadow-sm");
    } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.add("shadow-sm");
    }

    // Show/hide back to top button
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 500) {
        backToTop.classList.remove("hidden");
        gsap.to(backToTop, { opacity: 1, duration: 0.3 });
    } else {
        gsap.to(backToTop, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => backToTop.classList.add("hidden"),
        });
    }
});

// Back to top button
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

// Set current year in footer
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Form validation and submission
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const formError = document.getElementById("formError");

// Form validation function
function validateForm() {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => {
        el.classList.add('hidden');
    });
    
    document.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error', 'success');
    });
    
    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
        document.getElementById('nameError').classList.remove('hidden');
        name.classList.add('error');
        isValid = false;
    } else {
        name.classList.add('success');
    }
    
    // Validate email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        document.getElementById('emailError').classList.remove('hidden');
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.add('success');
    }
    
    // Validate subject
    const subject = document.getElementById('subject');
    if (!subject.value.trim()) {
        document.getElementById('subjectError').classList.remove('hidden');
        subject.classList.add('error');
        isValid = false;
    } else {
        subject.classList.add('success');
    }
    
    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
        document.getElementById('messageError').classList.remove('hidden');
        message.classList.add('error');
        isValid = false;
    } else {
        message.classList.add('success');
    }
    
    // Validate consent
    const consent = document.getElementById('consent');
    if (!consent.checked) {
        document.getElementById('consentError').classList.remove('hidden');
        isValid = false;
    }
    
    return isValid;
}

// Contact form submission
contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitBtn.disabled = true;
    this.classList.add('form-loading');

    // Hide previous messages
    formSuccess.classList.add('hidden');
    formError.classList.add('hidden');

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Success animation
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
        
        // Show success message
        formSuccess.classList.remove('hidden');
        formSuccess.style.animation = 'slideUp 0.3s ease-out';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            this.classList.remove('form-loading');
            formSuccess.classList.add('hidden');
            
            // Clear validation styles
            document.querySelectorAll('.form-input').forEach(input => {
                input.classList.remove('error', 'success');
            });
        }, 3000);

    } catch (error) {
        // Error handling
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        this.classList.remove('form-loading');
        
        // Show error message
        formError.classList.remove('hidden');
        formError.style.animation = 'slideUp 0.3s ease-out';
        
        // Hide error after 5 seconds
        setTimeout(() => {
            formError.classList.add('hidden');
        }, 5000);
    }
});

// Real-time form validation
contactForm.addEventListener('input', function(e) {
    const input = e.target;
    
    // Remove error/success classes on input
    input.classList.remove('error', 'success');
    
    // Hide error message for this input
    const errorId = input.id + 'Error';
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.add('hidden');
    }
    
    // Validate specific fields as user types
    if (input.id === 'email' && input.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            input.classList.add('error');
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.classList.remove('hidden');
            }
        } else {
            input.classList.add('success');
        }
    }
});

// Load Testimonials
function loadTestimonials() {
    const testimonialsGrid = document.getElementById("testimonialsGrid");
    const countDisplay = document.getElementById("currentTestimonialsCount");
    const loadBtn = document.getElementById("loadMoreTestimonials");
    
    const nextTestimonials = testimonials.slice(loadedTestimonials, loadedTestimonials + TESTIMONIALS_PER_LOAD);
    
    nextTestimonials.forEach(testimonial => {
        const testimonialCard = document.createElement("div");
        const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        testimonialCard.className = "testimonial-card rounded-xl p-6";
        testimonialCard.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy-500 to-burgundy-700 flex items-center justify-center mr-4 shadow-lg">
                    <span class="text-white font-bold text-lg">${initials}</span>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 text-lg">${testimonial.name}</h4>
                </div>
            </div>
            <div class="text-yellow-400 mb-4">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-600 italic">"${testimonial.testimony}"</p>
        `;
        testimonialsGrid.appendChild(testimonialCard);
    });
    
    loadedTestimonials += nextTestimonials.length;
    countDisplay.textContent = loadedTestimonials;
    
    // Hide button if all testimonials loaded
    if (loadedTestimonials >= testimonials.length) {
        loadBtn.style.display = "none";
        loadBtn.parentElement.innerHTML += `
            <p class="text-gray-600 mt-4">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                All ${testimonials.length} testimonials loaded
            </p>
        `;
    }
    
    // Animate newly loaded testimonials
    gsap.utils.toArray(".testimonial-card").slice(-nextTestimonials.length).forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out"
        });
    });
}

// Event listener for load more button
document.getElementById("loadMoreTestimonials").addEventListener("click", loadTestimonials);

// Success counter animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + "+";
    }, 16);
}

// Initialize counter animation when section is visible
const successCounter = document.querySelector('.success-counter');
if (successCounter) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(successCounter, 45);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(successCounter);
}

// Hover effects for interactive elements
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            y: -5,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Progress bar animation on scroll
function animateProgressBars() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.9);
        
        if (isVisible && !bar.classList.contains('animated')) {
            const width = bar.getAttribute('data-width') + '%';
            bar.style.width = width;
            bar.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateProgressBars);
animateProgressBars();

// Section reveal animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
});

// Add CSS for hover effects
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .skill-item:hover .skill-bar {
            transform: scaleY(1.2);
            transition: transform 0.3s ease;
        }
        
        .nav-link:hover {
            color: #800020;
        }
        
        .mobile-nav-link:hover {
            background: rgba(128, 0, 32, 0.05);
        }
        
        .social-icon:hover {
            transform: translateY(-3px) rotate(5deg);
        }
        
        .back-to-top:hover {
            transform: translateY(-5px) scale(1.1);
        }
        
        @media (max-width: 768px) {
            .section-padding {
                padding: 3rem 1rem;
            }
            
            .hero-section {
                padding-top: 7rem;
            }
        }
        
        /* Form focus styles */
        .form-input:focus {
            transform: translateY(-1px);
        }
        
        /* Smooth transitions */
        .form-input,
        .cta-primary,
        .cta-secondary {
            transition: all 0.2s ease-in-out;
        }
        
        /* Enhanced button hover effects */
        .cta-primary:hover,
        .cta-secondary:hover {
            transform: translateY(-3px) scale(1.02);
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
`);

// Add to your existing script.js

// Experience section animations
function initExperienceAnimations() {
    // Animate timeline dots on scroll
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach((dot, index) => {
        ScrollTrigger.create({
            trigger: dot,
            start: "top 80%",
            onEnter: () => {
                gsap.to(dot, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "back.out(1.7)"
                });
            }
        });
    });

    // Animate responsibility items on hover
    document.querySelectorAll('.responsibility-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('.responsibility-icon'), {
                rotate: 10,
                scale: 1.1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('.responsibility-icon'), {
                rotate: 0,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
    });

    // Animate achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
                gsap.from(card, {
                    x: index % 2 === 0 ? -20 : 20,
                    opacity: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power3.out"
                });
            }
        });
    });
}

// Initialize experience animations when page loads
window.addEventListener('load', () => {
    // Call after a slight delay to ensure DOM is ready
    setTimeout(initExperienceAnimations, 500);
});

// Add click handlers for expanded view (optional)
document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const details = this.nextElementSibling;
        const isExpanded = details.classList.contains('expanded');
        
        if (isExpanded) {
            gsap.to(details, {
                height: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => details.classList.remove('expanded', 'block')
            });
            this.innerHTML = '<i class="fas fa-chevron-down mr-2"></i>View More Details';
        } else {
            details.classList.add('expanded', 'block');
            gsap.fromTo(details, 
                { height: 0 }, 
                { 
                    height: 'auto', 
                    duration: 0.3,
                    ease: "power2.inOut" 
                }
            );
            this.innerHTML = '<i class="fas fa-chevron-up mr-2"></i>View Less';
        }
    });
});