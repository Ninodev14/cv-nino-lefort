document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carousel = document.getElementById('carousel');

    let currentIndex = 0;
    let autoSlideInterval;
    let isDragging = false;
    let mouseX = 0;
    let mouseY = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        updateDots(index);
        updateNavigationButtons();
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function updateNavigationButtons() {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        startAutoSlide();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
        startAutoSlide();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
            startAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');
    updateDots(currentIndex);
    updateNavigationButtons();

    // Swipe functionality
    let touchstartX = 0;
    let touchendX = 0;
    const minSwipeDistance = 50;

    carousel.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    });

    carousel.addEventListener('mousedown', function(event) {
        isDragging = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    carousel.addEventListener('mousemove', function(event) {
        if (isDragging) {
            event.preventDefault();
        }
    });

    carousel.addEventListener('mouseup', function(event) {
        if (isDragging) {
            const distanceX = event.clientX - mouseX;
            const distanceY = event.clientY - mouseY;
            if (Math.abs(distanceX) >= minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY)) {
                if (distanceX < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            isDragging = false;
        }
    });

    carousel.addEventListener('mouseleave', function(event) {
        isDragging = false;
    });

    function handleGesture() {
        const distanceX = touchendX - touchstartX;
        if (Math.abs(distanceX) >= minSwipeDistance) {
            if (touchendX < touchstartX) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
});
