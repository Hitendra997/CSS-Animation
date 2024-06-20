// Question 8
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open');
        document.querySelectorAll('.accordion-content').forEach((item) => {
            if (item !== content) {
                item.classList.remove('open');
            }
        });
    });
});
// Quwation 9
// function setProgress(percentage) {
//     document.querySelector('.progress').style.width = `${percentage}%`;
// }

// setProgress(70);

// Question 10
document.getElementById('menu-button').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('open');
});

