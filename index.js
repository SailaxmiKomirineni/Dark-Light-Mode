let toggleEle = document.getElementById("toggle")
let containerEle = document.getElementById("containerId")

function dark_light(){
    toggleEle.classList.toggle("toggle--light")
    toggleEle.classList.toggle("toggle--dark")
    containerEle.classList.toggle("--container--light")
    containerEle.classList.toggle("--container--dark")
}