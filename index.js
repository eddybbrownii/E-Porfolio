let modalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x,y);

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    if (contrastToggle) {
        document.body.classList += "dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.loading');
    const success = document.querySelector('.success');

    emailjs
.sendForm('template_noy8rwc', 'service_9h7l5qj', event.target, 'user_z0LbFZMrY9Wg1puyf'

).then(() => {
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    console.log("it works");
    form.reset();
}, 2000);})
.catch((error) => {
    loading.classList.remove("modal__overlay--visible");
    alert("The email service is temporarily unavailable. Please contact me directly at example@email.com");
}
);
}
let isModalOpen = false;
function toggleModal() {
    if (modalOpen) {
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
    document.body.classList 
    //toggle the modal

// toggle modal
document.body.classList += " modal--open";
}