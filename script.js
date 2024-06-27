const buttons = document.querySelectorAll('.btnON');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const parentCard = button.parentElement;
        const textParagraph = parentCard.querySelector('p');

        if (textParagraph.classList.contains('hidden')) {
            textParagraph.classList.remove('hidden');
            button.innerText = 'Скрыть';
        } else {
            textParagraph.classList.add('hidden');
            button.innerText = 'Показать';
        }
    });
});



// const buttons = document.querySelectorAll('.btnON');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const parentCard = button.parentElement;
//         const textParagraph = parentCard.querySelector('p');

//         if (texts.classList.contains('hidden')) {
//             textParagraph.classList.remove('hidden');
//             button.innerText = 'Скрыть';
//         } else {
//             textParagraph.classList.add('hidden');
//             button.innerText = 'Показать';
//         }
//     })
// })
