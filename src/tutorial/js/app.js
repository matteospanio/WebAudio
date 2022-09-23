window.onload = () => {
    const hamburger = document.querySelector('#hamburger')
    const nav = document.querySelector('.navbar>ul')
    nav.style.display = window.innerWidth < 768 ? 'none' : 'flex'

    hamburger.addEventListener('click', () => {
        if (nav.style.display === 'none'){
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768){
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    })
}

