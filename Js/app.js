const progress = document.getElementById('progres')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')


let curentActive = 1;

next.addEventListener('click', () => {
    curentActive++

    if(curentActive > circle.length){
        curentActive = circle.length
    }

    update()
})
prev.addEventListener('click', () => {
    curentActive--

    if(curentActive < 1 ){
        curentActive = 1
    }

    update()
})

function update(){
    circle.forEach((circle, i) => {
    if(i < curentActive){
        circle.classList.add('active')
    }else{
        circle.classList.remove('active')
    }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1 ) / ( circle.length -1 ) * 100 + '%'

    if(curentActive === 1){
        prev.disabled = true
    }else if(curentActive === circle.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}