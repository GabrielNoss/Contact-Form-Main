// Declaración de variables
const contactForm = document.getElementById('myForm');
const alertDiv = document.getElementById('alert');
const contactFormContainer = document.querySelector('.contact-form');

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const queryTypeInputs = document.querySelectorAll('input[name="query-type"]');
const commentsInput = document.getElementById('comments');
const checkboxInput = document.getElementById('checkbox');

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const radioError = document.getElementById('radio-error');
const commentsError = document.getElementById('error-query');
const checkboxError = document.getElementById('consent-contact');



// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para validar el formulario
function validateForm() {
    let isValid = true;

    // Validar First Name
    if (!firstNameInput.value.trim()) {
        firstNameError.style.display = 'block';
        isValid = false;
    }

    // Validar Last Name
    if (!lastNameInput.value.trim()) {
        lastNameError.style.display = 'block';
        isValid = false;
    }

    // Validar Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validar Query Type (Radio Buttons)
    let isQueryTypeSelected = false;
    queryTypeInputs.forEach(input => {
        if (input.checked) {
            isQueryTypeSelected = true;
        }
    });
    if (!isQueryTypeSelected) {
        radioError.style.display = 'block';
        isValid = false;
    }

    // Validar Message (Textarea)
    if (!commentsInput.value.trim()) {
        commentsError.style.display = 'block';
        isValid = false;
    }

    // Validar Checkbox
    if (!checkboxInput.checked) {
        checkboxError.style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Event listener para el envío del formulario
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Validar el formulario
    if (validateForm()) {
        // Si el formulario es válido, mostrar el mensaje de éxito
        alertDiv.style.display = 'block';
        // Ocultar el formulario (opcional)
        contactFormContainer.style.display = 'block';
    }
});