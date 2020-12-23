const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()

})

prev.addEventListener('click', () => {
    currentActive--
    
    if(currentActive < 1){
        currentActive = 1
    }

    update()
    
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if(currentActive == 1) {
        prev.disabled = true
    } else if(currentActive == circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

    switch(actives.length){
        case 1:
            document.getElementById("lyrics").textContent = "Oh the weather outside is frightful..."
            break;
        case 2:
            document.getElementById("lyrics").textContent = "But the fire is so delightful!"
            break;
        case 3:
            document.getElementById("lyrics").textContent = "And since we've no place to go..."
            break;     
        case 4:
            document.getElementById("lyrics").textContent = "LET IT SNOW, LET IT SNOW, LET IT SNOW!"
            break;       
    }

}



