//selecting popUp Box and popUpOverlay

var popUpBox = document.querySelector(".popup-Box")
var popUpOverlay = document.querySelector(".popup-Overlay")
var addpopUpButton = document.getElementById("add")

addpopUpButton.addEventListener("click",function() {
    popUpBox.style.display="block"
    popUpOverlay.style.display="block"
})

//selecting cancel button to hide the popUp Box 
//selecting cancel button

var DelButton = document.getElementById("delete")

DelButton.addEventListener("click",function(event){
    event.preventDefault()
    popUpBox.style.display="none"
    popUpOverlay.style.display="none"
})
//selecting Container,Container div,and all the inputs

var addbikeButton = document.getElementById("add-bike")
var Container = document.querySelector(".Container")
var bikeNameInput = document.getElementById("bike-name-input")
var bikeOwner = document.getElementById("bike-owner-input")
var bikeDescription = document.getElementById("bike-description")


addbikeButton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","Container-box")
    div.innerHTML=`<h2>${bikeNameInput.value}<h2>
    <h5>${bikeOwner.value}</h5>
        <p>${bikeDescription.value}</p>    
        <button onclick="delNotes(event)">Delete</button>`
    Container.append(div)
    popUpBox.style.display="none"
    popUpOverlay.style.display="none"
})

//Now we are going to delete Notes by del button

function delNotes(event) {
    event.target.parentElement.remove()
}