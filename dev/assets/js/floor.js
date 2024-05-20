const installFloor = () => {
    const flats = document.querySelectorAll('.flat');

const removeActiveClass = ()=> flats.forEach(flat => {
    flat.classList.remove('active');
})
    


flats.forEach(flat => {
    flat.addEventListener('click', ()=>{
        removeActiveClass();
        flat.classList.add('active')
    })
})
}



document.querySelector('.floor-item-page') ? installFloor() : null;