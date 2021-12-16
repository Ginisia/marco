
var myContact = document.querySelector('.contact-link');
var contact = document.querySelector('.window-contact');
var cross = document.querySelector(".cross-wind");

myContact.addEventListener('click', function () {
    contact.classList.toggle('active');
});

cross.addEventListener('click', function () {
    contact.classList.toggle("active");
});