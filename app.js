// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let post = document.getElementById("post");




// function postMessage() {
//     if(input.value == ""){
//         alert("Please enter a message");
//     }else{
//         let message = document.createElement("p");
//         localStorage.setItem("bhaiya",input.value)
//          message.innerHTML = input.value;
//          post.appendChild(message);
//         input.value = "";
//     }
// }

// post.innerHTML = localStorage.getItem("bhaiya")

// Elements ko select karlo
let input = document.getElementById("input");
let post = document.getElementById("post");

// Function jo pehli posts ko load karega
function loadPosts() {
    let savedPosts = JSON.parse(localStorage.getItem("posts")) || []; // Pehle se jo posts hain unko laao
    post.innerHTML = ""; // Purane posts hatao

    savedPosts.forEach(msg => {
        let message = document.createElement("p");
        message.innerHTML = msg;
        post.appendChild(message);
    });
}

// Function jo naye posts ko add karega
function postMessage() {
    if (input.value.trim() === "") {
        alert("Please enter a message");
        return;
    }

    let savedPosts = JSON.parse(localStorage.getItem("posts")) || []; // Pehli wali posts le ao
    savedPosts.push(input.value); // Naya post add karo
    localStorage.setItem("posts", JSON.stringify(savedPosts)); // Wapas localStorage me save karo

    let message = document.createElement("p");
    message.innerHTML = input.value;
    post.appendChild(message);
    
    input.value = ""; // Input field khali karo
}

// Jab page load ho toh purane posts dikhayen
loadPosts();
