"use strict";

var form = document.getElementById("form");
var input = document.getElementById("input");
var message = document.getElementById("message");
var posts = document.getElementById("posts");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

var formValidation = function formValidation() {
  if (input.value === '') {
    message.innerHTML = 'Post cannot be blank';
    console.log("failure");
  } else {
    console.log("success");
    message.innerHTML = '';
    acceptData();
  }
}; // Accept data from input fields


var data = {};

var acceptData = function acceptData() {
  data['text'] = input.value;
  console.log(data);
}; // Create posts using Javascript Template Literals


var createPost = function createPost() {
  posts.innerHTML += "";
  div;
};