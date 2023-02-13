const car_buttons = document.getElementsByName("car-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

//activate car_buttons
car_buttons.forEach(button => {
    button.addEventListener("change", event =>{
        text.innerHTML = "Here's a picture of a " + button.value
        photo.src = "../images/" + button.value + ".jpg"
    })
})