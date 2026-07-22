const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

if (prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.prev') || container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next') || container.querySelector('.next-btn');

        if (!slides.length || !prevBtn || !nextBtn) return;

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll(".form-container");

    forms.forEach(form => {
        const phoneInput = form.querySelector('input[type="tel"]') || form.querySelector('input[name="phone"]') || form.querySelector('input[name="customer-phone"]');

        if (phoneInput) {
            phoneInput.addEventListener("input", function () {
                this.value = this.value.replace(/[^0-9+]/g, '');
            });
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[name="customer-name"]') || form.querySelector('input[name="fb-name"]');
            const emailInput = form.querySelector('input[type="email"]');
            const messageInput = form.querySelector('textarea');
            const selectInput = form.querySelector('select');

            if (nameInput) nameInput.setCustomValidity("");
            if (emailInput) emailInput.setCustomValidity("");
            if (phoneInput) phoneInput.setCustomValidity("");
            if (messageInput) messageInput.setCustomValidity("");
            if (selectInput) selectInput.setCustomValidity("");

            if (nameInput) {
                const cleanName = nameInput.value.trim();
                const nameRegex = /^[a-zA-Z\s\-']+$/;
                if (!cleanName) {
                    nameInput.setCustomValidity("Please enter your name.");
                    nameInput.reportValidity();
                    return;
                } else if (!nameRegex.test(cleanName) || cleanName.length < 2) {
                    nameInput.setCustomValidity("Please enter a valid name using letters only.");
                    nameInput.reportValidity();
                    return;
                }
            }

            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailInput.value.trim()) {
                    emailInput.setCustomValidity("Please enter your email address.");
                    emailInput.reportValidity();
                    return;
                } else if (!emailRegex.test(emailInput.value.trim())) {
                    emailInput.setCustomValidity("Please enter a valid email address (e.g. name@example.com).");
                    emailInput.reportValidity();
                    return;
                }
            }

            if (phoneInput) {
                const digitsOnly = phoneInput.value.replace(/[^0-9]/g, '');
                if (!phoneInput.value.trim()) {
                    phoneInput.setCustomValidity("Please enter your phone number.");
                    phoneInput.reportValidity();
                    return;
                } else if (digitsOnly.length < 8 || digitsOnly.length > 12) {
                    phoneInput.setCustomValidity("Please enter a valid phone number (8 to 12 digits).");
                    phoneInput.reportValidity();
                    return;
                }
            }

            if (selectInput && selectInput.hasAttribute('required')) {
                if (!selectInput.value) {
                    selectInput.setCustomValidity("Please select an option from the list.");
                    selectInput.reportValidity();
                    return;
                }
            }

            if (messageInput && messageInput.hasAttribute('required')) {
                if (!messageInput.value.trim()) {
                    messageInput.setCustomValidity("Please complete this field.");
                    messageInput.reportValidity();
                    return;
                } else if (messageInput.value.trim().length < 10) {
                    messageInput.setCustomValidity("Your message must be at least 10 characters long.");
                    messageInput.reportValidity();
                    return;
                }
            }

            const userName = nameInput ? nameInput.value.trim() : "there";
            alert(`Thank you, ${userName}!\n\nYour request has been submitted successfully.`);
            form.reset();
        });
    });

    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.prev') || container.querySelector('.prev-btn') || container.querySelector('.slider-btn.prev');
        const nextBtn = container.querySelector('.next') || container.querySelector('.next-btn') || container.querySelector('.slider-btn.next');

        if (!slides.length || !prevBtn || !nextBtn) return;

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });

});
const orderForm = document.getElementById("order-form");

if (orderForm) {
    const nameInput = document.getElementById("customer-name");
    const emailInput = document.getElementById("customer-email");
    const itemSelect = document.getElementById("order-item");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (nameInput) nameInput.setCustomValidity("");
        if (emailInput) emailInput.setCustomValidity("");
        if (itemSelect) itemSelect.setCustomValidity("");

        if (nameInput) {
            const cleanName = nameInput.value.trim();
            const nameRegex = /^[a-zA-Z\s\-']+$/;
            if (!cleanName) {
                nameInput.setCustomValidity("Please enter your full name.");
                nameInput.reportValidity();
                return;
            } else if (!nameRegex.test(cleanName) || cleanName.length < 2) {
                nameInput.setCustomValidity("Please enter a valid name using letters only.");
                nameInput.reportValidity();
                return;
            }
        }

        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const cleanEmail = emailInput.value.trim();
            if (!cleanEmail) {
                emailInput.setCustomValidity("Please enter your email address.");
                emailInput.reportValidity();
                return;
            } else if (!emailRegex.test(cleanEmail)) {
                emailInput.setCustomValidity("Please enter a valid email address (e.g. name@example.com).");
                emailInput.reportValidity();
                return;
            }
        }

        if (itemSelect) {
            if (!itemSelect.value) {
                itemSelect.setCustomValidity("Please select an item from the menu list.");
                itemSelect.reportValidity();
                return;
            }
        }

        const selectedText = itemSelect.options[itemSelect.selectedIndex].text;
        alert(`Order Placed Successfully!\n\nThank you, ${nameInput.value.trim()}!\nYour order for "${selectedText}" has been received.`);
        
        orderForm.reset();
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll(".form-container");

    forms.forEach(form => {
        const phoneInput = form.querySelector('input[type="tel"]') || form.querySelector('input[name="phone"]') || form.querySelector('input[name="customer-phone"]');

        if (phoneInput) {
            phoneInput.addEventListener("input", function () {
                this.value = this.value.replace(/[^0-9+]/g, '');
            });
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nameInput = form.querySelector('input[name="name"]') || form.querySelector('input[name="customer-name"]') || form.querySelector('input[name="fb-name"]');
            const emailInput = form.querySelector('input[type="email"]');
            const messageInput = form.querySelector('textarea');
            const selectInput = form.querySelector('select');

            if (nameInput) nameInput.setCustomValidity("");
            if (emailInput) emailInput.setCustomValidity("");
            if (phoneInput) phoneInput.setCustomValidity("");
            if (messageInput) messageInput.setCustomValidity("");
            if (selectInput) selectInput.setCustomValidity("");

            if (nameInput) {
                const cleanName = nameInput.value.trim();
                const nameRegex = /^[a-zA-Z\s\-']+$/;
                if (!cleanName) {
                    nameInput.setCustomValidity("Please enter your name.");
                    nameInput.reportValidity();
                    return;
                } else if (!nameRegex.test(cleanName) || cleanName.length < 2) {
                    nameInput.setCustomValidity("Please enter a valid name using letters only.");
                    nameInput.reportValidity();
                    return;
                }
            }

            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailInput.value.trim()) {
                    emailInput.setCustomValidity("Please enter your email address.");
                    emailInput.reportValidity();
                    return;
                } else if (!emailRegex.test(emailInput.value.trim())) {
                    emailInput.setCustomValidity("Please enter a valid email address (e.g. name@example.com).");
                    emailInput.reportValidity();
                    return;
                }
            }

            if (phoneInput) {
                const digitsOnly = phoneInput.value.replace(/[^0-9]/g, '');
                if (!phoneInput.value.trim()) {
                    phoneInput.setCustomValidity("Please enter your phone number.");
                    phoneInput.reportValidity();
                    return;
                } else if (digitsOnly.length < 8 || digitsOnly.length > 12) {
                    phoneInput.setCustomValidity("Please enter a valid phone number (8 to 12 digits).");
                    phoneInput.reportValidity();
                    return;
                }
            }

            if (selectInput && selectInput.hasAttribute('required')) {
                if (!selectInput.value) {
                    selectInput.setCustomValidity("Please select an option from the list.");
                    selectInput.reportValidity();
                    return;
                }
            }

            if (messageInput && messageInput.hasAttribute('required')) {
                if (!messageInput.value.trim()) {
                    messageInput.setCustomValidity("Please complete this field.");
                    messageInput.reportValidity();
                    return;
                } else if (messageInput.value.trim().length < 10) {
                    messageInput.setCustomValidity("Your message must be at least 10 characters long.");
                    messageInput.reportValidity();
                    return;
                }
            }

            const userName = nameInput ? nameInput.value.trim() : "there";
            alert(`Thank you, ${userName}!\n\nYour request has been submitted successfully.`);
            form.reset();
        });
    });

    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        const prevBtn = container.querySelector('.prev') || container.querySelector('.prev-btn') || container.querySelector('.slider-btn.prev');
        const nextBtn = container.querySelector('.next') || container.querySelector('.next-btn') || container.querySelector('.slider-btn.next');

        if (!slides.length || !prevBtn || !nextBtn) return;

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            slides[currentSlide].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    });

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const faqItem = this.parentElement;

            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            faqItem.classList.toggle("active");
        });
    });

    const orderForm = document.getElementById("order-form");

    if (orderForm) {
        const nameInput = document.getElementById("customer-name");
        const emailInput = document.getElementById("customer-email");
        const itemSelect = document.getElementById("order-item");

        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (nameInput) nameInput.setCustomValidity("");
            if (emailInput) emailInput.setCustomValidity("");
            if (itemSelect) itemSelect.setCustomValidity("");

            if (nameInput) {
                const cleanName = nameInput.value.trim();
                const nameRegex = /^[a-zA-Z\s\-']+$/;
                if (!cleanName) {
                    nameInput.setCustomValidity("Please enter your full name.");
                    nameInput.reportValidity();
                    return;
                } else if (!nameRegex.test(cleanName) || cleanName.length < 2) {
                    nameInput.setCustomValidity("Please enter a valid name using letters only.");
                    nameInput.reportValidity();
                    return;
                }
            }

            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const cleanEmail = emailInput.value.trim();
                if (!cleanEmail) {
                    emailInput.setCustomValidity("Please enter your email address.");
                    emailInput.reportValidity();
                    return;
                } else if (!emailRegex.test(cleanEmail)) {
                    emailInput.setCustomValidity("Please enter a valid email address (e.g. name@example.com).");
                    emailInput.reportValidity();
                    return;
                }
            }

            if (itemSelect) {
                if (!itemSelect.value) {
                    itemSelect.setCustomValidity("Please select an item from the menu list.");
                    itemSelect.reportValidity();
                    return;
                }
            }

            const selectedText = itemSelect.options[itemSelect.selectedIndex].text;
            alert(`Order Placed Successfully!\n\nThank you, ${nameInput.value.trim()}!\nYour order for "${selectedText}" has been received.`);

            orderForm.reset();
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {
const feedbackForm = document.getElementById("feedback-form");

if (feedbackForm) {
    const nameInput = document.getElementById("fb-name");
    const emailInput = document.getElementById("fb-email");
    const ratingSelect = document.getElementById("fb-rating");
    const messageInput = document.getElementById("fb-message");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (nameInput) nameInput.setCustomValidity("");
        if (emailInput) emailInput.setCustomValidity("");
        if (ratingSelect) ratingSelect.setCustomValidity("");
        if (messageInput) messageInput.setCustomValidity("");

        if (nameInput) {
            const cleanName = nameInput.value.trim();
            const nameRegex = /^[a-zA-Z\s\-']+$/;
            if (!cleanName) {
                nameInput.setCustomValidity("Please enter your full name.");
                nameInput.reportValidity();
                return;
            } else if (!nameRegex.test(cleanName) || cleanName.length < 2) {
                nameInput.setCustomValidity("Please enter a valid name using letters only.");
                nameInput.reportValidity();
                return;
            }
        }

        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const cleanEmail = emailInput.value.trim();
            if (!cleanEmail) {
                emailInput.setCustomValidity("Please enter your email address.");
                emailInput.reportValidity();
                return;
            } else if (!emailRegex.test(cleanEmail)) {
                emailInput.setCustomValidity("Please enter a valid email address (e.g. name@example.com).");
                emailInput.reportValidity();
                return;
            }
        }

        if (ratingSelect) {
            if (!ratingSelect.value) {
                ratingSelect.setCustomValidity("Please select a rating.");
                ratingSelect.reportValidity();
                return;
            }
        }

        if (messageInput) {
    const cleanMessage = messageInput.value.trim();
    if (cleanMessage.length < 10) {
        messageInput.setCustomValidity("Your feedback must be at least 10 characters long.");
        messageInput.reportValidity();
        return;
    }
}
alert(`Thank you for your feedback, ${nameInput.value.trim()}!\n\nWe appreciate you taking the time to rate us.`);
            feedbackForm.reset();
        });
    }

});