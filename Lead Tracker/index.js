let myLeads = []
let oldLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn  = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("Websites") )
console.log(leadsFromLocalStorage)

//checking if the leads is truthy
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
 
    chrome.tabs.query({active: true, currentWindow : true}, function(tabs) {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("Websites",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

function render(leads) {

    let listItems = ""
    //render the leads in the unordered list using ulEl.textContent
    for(let x = 0; x < leads.length; x++) {
        listItems += `
        <li>
            <a target='_blank'href="${leads[x]}">${leads[x]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems 
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" //clearing the input value after submitting
    localStorage.setItem("Websites", JSON.stringify(myLeads))
    render(myLeads)

    //To verify that it works
    console.log(localStorage.getItem("Websites"))
})



