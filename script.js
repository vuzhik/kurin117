// Функція для перемикання між секціями
function showSection(sectionId) {
    // Спочатку сховати всі секції
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    
    // Показати обрану секцію
    document.getElementById(sectionId).classList.add('active');
}

// За замовчуванням відображати головну секцію
showSection('home');
