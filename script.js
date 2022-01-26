const contactBtn = document.querySelector('.contact-btn');
const contactCloseBtn = document.querySelector('.contact-close-btn')
const contact = document.querySelector('.contact');
const contactContainer = document.querySelector('.contact-container');


//**** Popup ****//
//Popup Function
function popUp(){
    contact.style.visibility = "visible";
    contactContainer.style.transform = "scale(1)";
}
function closeContact(){
    contact.style.visibility = "hidden";
    contactContainer.style.transform = "scale(0)";
}
//Contact Popup
contactBtn.addEventListener('click', popUp);
//Contact Close Btn
contactCloseBtn.addEventListener('click', closeContact);