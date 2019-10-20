const education = () => {
    const educationList = document.querySelector('.education-items');
    const educationButton = document.querySelector('.education-title');

    const removeClass = () => {
        educationList.classList.remove('education-open');
    };

    const showItem = () => {
        educationList.removeEventListener('animationend', addClass);
        educationButton.innerHTML = `Education <span>&#708;</span>`;
        educationList.classList.remove('education-none');
        educationList.classList.add('education-open');
        educationList.addEventListener('animationend', removeClass);
    };

    const addClass = () => {
        educationList.classList.add('education-none');
        educationList.classList.remove('education-close');
    };

    const hideItem = () => {
        educationList.removeEventListener('animationend', removeClass);
        educationButton.innerHTML = `Education <span>&#709;</span>`;
        educationList.classList.remove('education-open');
        educationList.classList.add('education-close');
        educationList.addEventListener('animationend', addClass);
    };

    educationButton.addEventListener('click', () => {
        if (educationList.classList.contains('education-none')) {
            showItem();
            return;
        }
        hideItem();
    });
};
education();