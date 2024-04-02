const addNote = () => {
    const userInput = document.getElementById('userInput');
    const output = document.getElementById('output');
    
    if (userInput.value) {
        console.log(userInput.value);
        localStorage.setItem("data", userInput.value);
        output.innerHTML += `<li><input type="checkbox"> ${userInput.value} <button class="btn2" onclick="deleteNote(this)">&#x274c;</button></li>`;
        userInput.value = ""; 
    } else {
        alert("Please enter valid note!!!");
    }
}

const deleteNote = (btn) => {
    const listItem = btn.parentElement;
    listItem.remove();
}


