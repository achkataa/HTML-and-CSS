function solve() {
    let fruits = document.getElementsByClassName('img')
    let fruitArr = Array.from(fruits)

    const handleOnClick = function(e) {
        let specificFruit = e.currentTarget
        specificFruit.classList.toggle('red')
        
    }

    fruitArr.forEach(el => {
        el.addEventListener('click', handleOnClick)
    })
}