const genplanItem = document.querySelectorAll('.genplan-item-path')
const cellAdress = document.querySelector('#adress')
const cellFloors = document.querySelector('#floors')
const cellFreeFlats = document.querySelector('#freeFlats')


genplanItem.forEach(build => {
    build.addEventListener('mouseover', () => {
        const thisAdress = build.getAttribute('data-adress')
        const thisFloors = build.getAttribute('data-floors')
        const thisFreeFlats = build.getAttribute('data-free-flats')
        


        cellAdress.innerHTML = thisAdress
        cellFloors.innerHTML = thisFloors
        cellFreeFlats.innerHTML = thisFreeFlats
    
    })

        const buildFreeFlats = build.getAttribute('data-free-flats') 

        if (buildFreeFlats === "0") {
            build.classList.add('sold')
        }




        if (build.classList.contains ('sold')) {
            const buildLink = build.closest('.genplan-item-link')

            buildLink.addEventListener('click', (event) => {
                event.preventDefault()
            })
        }
})

