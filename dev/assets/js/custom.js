const genplanItem = document.querySelectorAll('.genplan-item')
const cellAdress = document.querySelector('#adress')
const cellFloors = document/querySelector('#floors')


genplanItem.forEach(build => {
    build.addEventListener('mouseover', () => {
        const thisAdress = build.getAttribute('data-adress')
        const thisFloors = build.getAttribute('data-floors')


        cellAdress.innerHTML = thisAdress
        cellFloors.innerHTML = thisFloors
    })
})