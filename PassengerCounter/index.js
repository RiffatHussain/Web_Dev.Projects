
let incrementBtn = document.getElementById('Increment-btn');
let result = document.getElementById('result');

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    result.innerHTML = `${count}`;
    
});

let savedOutput = document.getElementById('savedOutput');
let saveBtn = document.getElementById('save-Btn');

saveBtn.addEventListener("click", () => {
    savedOutput.innerHTML += `${count} - `;
    count = 0;
})

