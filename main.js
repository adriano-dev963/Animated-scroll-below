const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', boxesCheck)
boxesCheck()

function boxesCheck() {
    const bottomTrigger = Window.innerHeight / 5 * 4
    boxes.forEach( box => {
        const boxtop = box.getBoundingClientRect().top
        
        if(boxtop < bottomTrigger) {
             box.classList.add('show')
        } else {
            box.classList.remove('show')
    }

    })
}