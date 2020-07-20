let myListner = document.querySelector('h5')
myListner.addEventListener('mouseover', () => {
    myListner.classList.add('heading')
})

myListner.addEventListener('mouseout', () => {
    myListner.classList.remove('heading')
})