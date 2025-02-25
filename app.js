let input = document.getElementById("input");
let btn = document.getElementById("btn")
let output = document.getElementById("output");

window.onload = function() {
    showPosts()
}
function savePost(){
    if (input.value === ""){
        alert("kuch likho")
        return;
    }

     let post = localStorage.getItem("post")
     if (post === null){
        post = []
     }else{
        post = JSON.parse(post);
     }
     let postObject = {
        text: input.value,
     };
     post.unshift(postObject);
     localStorage.setItem("post",JSON.stringify(post))
     input.value = "";
     showPosts()
    }

    function showPosts() {
        let posts = localStorage.getItem("post");
    
        if (posts === null) {
            posts = [];
        } else {
            posts = JSON.parse(posts);
        }
    
        let postWall = document.getElementById("postWall");
        postWall.innerHTML = ""; 
    
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

