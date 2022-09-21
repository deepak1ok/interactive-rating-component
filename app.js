const rate = document.querySelectorAll('.rate');
const rating = document.querySelector('.rate_no');
const submitBtn = document.querySelector('.button');
const cont1 = document.querySelector('.container');
const cont2 = document.querySelector('.thank-you_container');

const init = function() {
    rate.forEach(function(el) {
        el.style.color = 'hsl(217, 12%, 63%)';
        el.style.backgroundColor = 'hsla(212, 19%, 27%, 0.826)';
        rating.textContent = 0;
    });
};

const rateFunc = function(i) {
    document.querySelector(`.rate-${i}`).style.backgroundColor = 'hsl(216, 12%, 54%)';
    document.querySelector(`.rate-${i}`).style.color = 'hsl(0, 0%, 100%)';
    rating.textContent = i;
}

for (let i = 1; i <= 5; i++) {
    const el = document.querySelector(`.rate-${i}`).addEventListener('click', function() {
        init();
        rateFunc(i);
    });
}

submitBtn.addEventListener('click', function() {
    cont1.classList.add('hide');
    cont2.classList.remove('hide');
})