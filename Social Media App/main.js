let form = document.getElementById("form");
let input = document.getElementById("input");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => { 
    if (input.value === '') {
        message.innerHTML = 'Post cannot be blank';
        console.log("failure");
    } else {
        console.log("success");
        message.innerHTML = '';
        acceptData();
    }
};

// Accept data from input fields
let data = {};
let acceptData = () => {
    data['text'] = input.value;
    console.log(data);

    createPost();
};
 
// 1. Create posts 
// using Javascript Template Literals
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = '';
};

// 2. Delete a post
let deletePost = (e) => { 
    e.parentElement.parentElement.remove();
};


// 3. Edit a post
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

