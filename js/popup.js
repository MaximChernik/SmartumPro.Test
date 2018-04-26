var hideP = document.querySelector('.hide-popup');
hideP.addEventListener('click', hidePopup);

var table = document.querySelector('.table-tab1');
table.addEventListener('click', showPopup);

function hidePopup() {
    document.querySelector('.popup').style.transform = 'scale(0)';
}

function showPopup() {
    document.querySelector('.popup').style.transform = 'scale(1)';
}