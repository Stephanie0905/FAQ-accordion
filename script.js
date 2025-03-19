const faqs = document.querySelectorAll('.question');

faqs.forEach((question) => {
    question.addEventListener('click', ()=> {
        question.nextElementSibling.classList.toggle('active-faq');
        const minusIcon = question.querySelector('.minus');
        minusIcon.classList.toggle('minus-active');
    })
})