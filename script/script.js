let goTo = document.querySelector('.go-to');
    
let LinkedIn = document.createElement('a');
let GitHub = document.createElement('a');
let Facebook = document.createElement('a');

LinkedIn.textContent = "LinkedIn";
Facebook.textContent = "Facebook";
GitHub.textContent = "GitHub";

LinkedIn.classList.add('go-To');
GitHub.classList.add('go-To');
Facebook.classList.add('go-To');

LinkedIn.href = "https://www.linkedin.com/in/thierno-d-8078259b/";
GitHub.href = "https://github.com/thiernodiallo222/";
Facebook.href = "https://www.facebook.com/tiernoabdoul/";

goTo.addEventListener("mouseenter", function () {
goTo.appendChild(LinkedIn);
goTo.appendChild(GitHub);
goTo.appendChild(Facebook);
goTo.style.color = 'rgb(129, 22, 230)';
    // goTo.style.backgroundColor = 'black'
    // LinkedIn.style.color = 'white';
    // GitHub.style.color = 'white';
    // Facebook.style.color = 'white';
    
});
goTo.addEventListener('mouseleave', function () {
    goTo.removeChild(LinkedIn);
    goTo.removeChild(GitHub);
    goTo.removeChild(Facebook);
});

LinkedIn.addEventListener('mouseenter', ()=> {
    LinkedIn.style.background = 'blue';
    LinkedIn.style.color = 'white';
});

LinkedIn.addEventListener('mouseleave', () => {
    LinkedIn.style.background = 'whitesmoke';
    LinkedIn.style.color = 'black';
})
GitHub.addEventListener('mouseenter', ()=> {
    GitHub.style.background = 'blue';
    GitHub.style.color = 'white';
});

GitHub.addEventListener('mouseleave', () => {
    GitHub.style.color = 'black';
    GitHub.style.background = 'whitesmoke';
})
Facebook.addEventListener('mouseenter', ()=> {
    Facebook.style.background = 'blue';
    Facebook.style.color = 'white';
});

Facebook.addEventListener('mouseleave', () => {
    Facebook.style.color = 'black';
    Facebook.style.backgroundColor = 'whitesmoke';
})

