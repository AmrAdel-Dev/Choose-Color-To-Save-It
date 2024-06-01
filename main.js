let lis = document.querySelectorAll('ul li')
let exp = document.querySelector('.experiment')

if (window.localStorage.getItem('color')) {
    exp.style.backgroundColor = window.localStorage.color
    lis.forEach((li) => {
        li.classList.remove('active')
    })
    document.querySelector(`[data-color='${window.localStorage.color}']`).classList.add('active')
}

lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.color);
        lis.forEach((li) => {
            li.classList.remove('active')
        });
        e.currentTarget.classList.add('active')
        window.localStorage.setItem('color', e.currentTarget.dataset.color)
        exp.style.backgroundColor = window.localStorage.color
    });
})