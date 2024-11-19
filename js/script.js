document.querySelector('.form-group-select').addEventListener('change', function () {
    if (this.value === '') {
        this.style.color = '#727272';
    } else {
        this.style.color = 'black'; 
    }
});

function validateForm(){
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('interestError').textContent = '';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let interest = document.getElementById('interest').value;

    let valid = true;

    if(name == ''){
        document.getElementById('nameError').textContent = "Form Wajib diisi: Nama";
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email === ''){
        document.getElementById('emailError').textContent = "Form Wajib diisi: Email";alert("Form wajib diisi: Email");
        valid = false;
    } else if(!emailPattern.test(email)){
        document.getElementById('emailError').textContent = "Gunakan email yang valid!";
        valid = false;
    }

    if(interest === ''){
        document.getElementById('interestError').textContent = "Form Wajib diisi: Interest";
        valid = false;
    }

    if (valid) {
        document.getElementById('nameError').textContent = ''; 
        document.getElementById('emailError').textContent = '';
        document.getElementById('interestError').textContent = '';
        alert("Data Berhasil Terkirim");
    }

    return valid;
}
let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    slideIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 3000); 