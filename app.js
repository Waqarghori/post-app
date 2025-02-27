let selectedBg = "white"; 

function selectBg(color) {
    selectedBg = color;
    let bgOptions = document.querySelectorAll(".bg-option");

    for (let i = 0; i < bgOptions.length; i++) {
        bgOptions[i].classList.remove("selected");
    }

    event.target.classList.add("selected");
}

function savePost() {
    let input = document.getElementById("input");

    if (input.value === "") { 
        alert("Please write a post");
        return;
    }

    let post = localStorage.getItem("posto"); 
    if (post) {
        post = JSON.parse(post);
    } else {
        post = [];
    }

    let postObject = {
        text: input.value,
        time: new Date().toLocaleString(),
        bg: selectedBg
    };

    post.unshift(postObject);
    localStorage.setItem("posto", JSON.stringify(post));
    input.value = "";
    showPost();
}
window.addEventListener("load", showPost())
function showPost() {
    let post = localStorage.getItem("posto");

    if (post) {
        post = JSON.parse(post);
    } else {
        post = [];
    }

    let postWall = document.getElementById("postWall");
    postWall.innerHTML = "";
    for (let i = 0; i < post.length; i++) {
        let p = post[i];

        let postDiv = document.createElement("div");
        postDiv.classList.add("post");

        let postContent = document.createElement("div");
        postContent.classList.add("post-content");
        postContent.style.background = p.bg;
        postContent.innerHTML = `<p>${p.text}</p>`;

        let postFooter = document.createElement("div");
        postFooter.classList.add("post-footer");

        postFooter.innerHTML = `
            <small>${p.time}</small>
            <button onclick="deletePost(${i})"><i class="fa-solid fa-trash-can"></i></button>
        `;

        postDiv.appendChild(postContent);
        postDiv.appendChild(postFooter);
        postWall.appendChild(postDiv);
    }
}

function deletePost(index) {
    let posts = localStorage.getItem("posto");

    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }

    posts.splice(index, 1);
    localStorage.setItem("posto", JSON.stringify(posts));
    showPost();
}

