(function () {
    pagination(true);
})();

// Featured Slider functionality
(function () {
    const slider = document.querySelector('.gh-featured-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.gh-featured-slide');
    const images = slider.querySelectorAll('.gh-featured-slide-image');
    const dots = slider.querySelectorAll('.gh-slider-dot');
    const prevBtn = slider.querySelector('.gh-slider-prev');
    const nextBtn = slider.querySelector('.gh-slider-next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoplayInterval;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Initialize
    showSlide(0);
    startAutoplay();
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoplay();
            startAutoplay();
        });
    });
    
    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
})();

(function () {
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();

// Text Scramble Animation
(function () {
    const el = document.querySelector('.gh-scramble-text');
    if (!el) return;

    // Speed configurations
    const speedConfig = {
        'Fast': { frameRange: 20, durationRange: 20, pause: 1500 },
        'Normal': { frameRange: 40, durationRange: 40, pause: 2500 },
        'Slow': { frameRange: 60, durationRange: 60, pause: 4000 }
    };

    // Get speed setting from data attribute
    const speedAttr = el.getAttribute('data-speed') || 'Normal';
    const config = speedConfig[speedAttr] || speedConfig['Normal'];

    // TextScramble Class
    class TextScramble {
        constructor(el, config) {
            this.el = el;
            this.config = config;
            this.chars = '甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => (this.resolve = resolve));
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * this.config.frameRange);
                const end = start + Math.floor(Math.random() * this.config.durationRange);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += '<span class="dud">' + char + '</span>';
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Get phrases from data attribute or use defaults
    const phrasesAttr = el.getAttribute('data-phrases');
    const phrases = phrasesAttr ? phrasesAttr.split(',') : [
        'Neo,',
        'sooner or later',
        "you're going to realize",
        'just as I did',
        "there's a difference",
        'between knowing the path',
        'and walking the path'
    ];

    const fx = new TextScramble(el, config);
    let counter = 0;
    
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, config.pause);
        });
        counter = (counter + 1) % phrases.length;
    };
    
    // Start animation
    next();
})();
