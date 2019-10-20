const educationList = document.querySelector('.education-items');
const educationButton = document.querySelector('.education-title');
educationButton.addEventListener('click', () => {
    if (educationList.classList.contains('education-close')) {
        educationButton.innerHTML = `Education <span>&#708;</span>`;
        educationList.classList.remove('education-close');
        return;
    }
    educationButton.innerHTML = `Education <span>&#709;</span>`;
    educationList.classList.add('education-close');
});
