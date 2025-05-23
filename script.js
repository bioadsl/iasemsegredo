// Popup aparece depois de 5 segundos
window.onload = function() {
    setTimeout(() => {
        document.getElementById('popup').style.display = 'block';
    }, 5000);
};

// Fechar popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// FAQ clicável
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            item.style.color = '#0ff';
        } else {
            item.style.color = '#fff';
        }
    });
});
