function savePost() {
    let postText = document.getElementById("postInput").value;
    
    if (postText === "") {
        alert("Post likho pehle! 🚀");
        return;
    }

    let posts = localStorage.getItem("posts");
    
    if (posts === null) {
        posts = []; // Agar koi post nahi to khali array bana lo
    } else {
        posts = JSON.parse(posts); // Pehle se saved posts ko JS object me convert karo
    }

    let postObject = { text: postText, time: new Date().toLocaleString() };
    posts.push(postObject); // Naya post array me add karo

    localStorage.setItem("posts", JSON.stringify(posts)); // Wapas local storage me save karo
    
    document.getElementById("postInput").value = ""; // Input field ko empty karo
    showPosts(); // Taake nayi post foran show ho
}

function showPosts() {
    let posts = localStorage.getItem("posts");
    
    if (posts === null) {
        posts = [];
    } else {
        posts = JSON.parse(posts);
    }

    let postWall = document.getElementById("postWall");
    postWall.innerHTML = ""; // Purani posts hatao

    for (let i = 0; i < posts.length; i++) {
        let postDiv = document.createElement("div");
        postDiv.innerHTML = `
            <p>${posts[i].text}</p>
            <small>${posts[i].time}</small>
            <button onclick="deletePost(${i})">🗑 Delete</button>
        `;
        postWall.appendChild(postDiv);
    }
}

function deletePost(index) {
    let posts = localStorage.getItem("posts");

    if (posts === null) {
        return;
    }

    posts = JSON.parse(posts);
    posts.splice(index, 1); // List me se ek post hatao
    localStorage.setItem("posts", JSON.stringify(posts)); // Wapas save karo
    
    showPosts(); // Update wall
}